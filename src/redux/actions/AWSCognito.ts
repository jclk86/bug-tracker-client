import {Auth} from 'aws-amplify';
import {AuthType} from '../../shared/constants/AppEnums';
import {defaultUser} from '../../shared/constants/AppConst';
import {AuthUser} from '../../types/models/AuthUser';
import {fetchError, fetchStart, fetchSuccess, showMessage} from './Common';
import {Dispatch} from 'redux';
import {AppActions} from '../../types';
import {UPDATE_AUTH_USER} from '../../types/actions/Auth.actions';

export const onConfirmCognitoUserSignup = (
  username: string,
  confirmCode: string,
  history: any,
) => {
  const code = confirmCode ? confirmCode : '000000';
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Auth.confirmSignUp(username, code, {
      forceAliasCreation: false,
    })
      .then(data => {
        if (data) {
          if (history) {
            history.replace('/signin');
          }
          dispatch(
            showMessage(
              'Congratulations, Signup process is complete, You can now Sign in by entering correct credentials!',
            ),
          );
        } else {
          dispatch(fetchError(data.error));
        }
      })
      .catch(function(error) {
        switch (error.code) {
          case 'UserNotFoundException': {
            return dispatch(fetchError('User not found'));
          }
          case 'NotAuthorizedException': {
            return dispatch(
              fetchError('The entered Email address is already registered!'),
            );
          }
          case 'AliasExistsException': {
            return dispatch(
              fetchError('The entered Email address is already registered!'),
            );
          }
          case 'UsernameExistsException': {
            dispatch(
              fetchError(
                'you have already started Signup Process, please enter security code to complete the process!',
              ),
            );
            return history.push('/confirm-signup', {email: username});
          }
          case 'CodeMismatchException': {
            if (code === '000000') {
              dispatch(
                fetchError(
                  'you have already started Signup Process, please enter security code to complete the process!',
                ),
              );
              return history.push('/confirm-signup', {email: username});
            }
            return dispatch(fetchError(error.message));
          }
          case 'ExpiredCodeException': {
            dispatch(
              fetchError(
                'The Code you entered is expired, please signup again!',
              ),
            );
            return history.push('/signup');
          }
          default:
            return false;
        }
      });
  };
};

export const onSignUpCognitoUser = (
  paramData: {email: string; password: string; name: string},
  history: any,
) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Auth.signUp({
      username: paramData.email,
      password: paramData.password,
      attributes: {
        name: paramData.name,
      },
    })
      .then(data => {
        if (data) {
          if (history) {
            history.push('/confirm-signup', {email: paramData.email});
            dispatch(
              showMessage(
                'A code has been sent to your registered email address, Enter the code to complete the signup process!',
              ),
            );
          }
        }
      })
      .catch(function(error) {
        if (error.code === 'UsernameExistsException') {
          dispatch(
            fetchError(
              'you have already started Signup Process, please enter security code to complete the process!',
            ),
          );
          return history.push('/confirm-signup', {email: paramData.email});
        }
        dispatch(fetchError(error.message));
      });
  };
};

export const onSignInCognitoUser = (
  data: {email: string; password: string},
  history: any,
) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Auth.signIn(data.email, data.password)
      .then(user => {
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          dispatch({type: UPDATE_AUTH_USER, payload: getUserObject(user)});
          history.push('/force-change-password', {email: data.email});
          dispatch(fetchSuccess());
        } else {
          dispatch({
            type: UPDATE_AUTH_USER,
            payload: getUserObject(user),
          });
          dispatch(fetchSuccess());
        }
      })
      .catch(function(error) {
        dispatch(fetchError(error.message));
      });
  };
};

const getUserObject = (authUser: any): AuthUser => {
  return {
    authType: AuthType.AWS_COGNITO,
    role: defaultUser.role,
    id: authUser.username,
    displayName: authUser.attributes.name,
    email: authUser.attributes.email,
    photoURL: authUser.photoURL,
    token: authUser.signInUserSession.accessToken.jwtToken,
  };
};

export const onChangePasswordFirstTime = (
  data: {email: string; password: string},
  user: any,
) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Auth.completeNewPassword(user, data.password, {email: data.email})
      .then(user => {
        localStorage.setItem(
          'token',
          user.signInUserSession.accessToken.jwtToken,
        );
        localStorage.setItem('user', JSON.stringify(user));
        // dispatch({type: USER_TOKEN_SET, payload: user.signInUserSession.accessToken.jwtToken});
        dispatch({type: UPDATE_AUTH_USER, payload: getUserObject(user)});
        dispatch(fetchSuccess());
      })
      .catch(function(error) {
        dispatch(fetchError(error.message));
      });
  };
};

export const onResetCognitoPassword = (email: string, history: any) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Auth.forgotPassword(email)
      .then(data => {
        if (data) {
          dispatch(fetchSuccess());
          dispatch(
            showMessage(
              `A code has been sent to registered email address ${data.CodeDeliveryDetails.Destination}`,
            ),
          );
          history.push('/reset-password', {email: email});
        } else {
          dispatch(fetchError(data.error));
        }
      })
      .catch(function(error) {
        dispatch(fetchError(error.message));
      });
  };
};

export const onSetNewCognitoPassword = (
  email: string,
  code: string,
  new_password: string,
  history: any,
) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Auth.forgotPasswordSubmit(email, code, new_password)
      .then(() => {
        dispatch(fetchSuccess());
        dispatch(showMessage('The new Password has been successfully set'));
        history.push('/signin');
      })
      .catch(function(error) {
        dispatch(fetchError(error.message));
      });
  };
};

export const onCognitoUserSignOut = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Auth.signOut().then(() => {
      dispatch(fetchSuccess());
      dispatch({type: UPDATE_AUTH_USER, payload: null});
    });
  };
};

export const onGetLoggedInCognitoUser = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    Auth.currentAuthenticatedUser()
      .then(user => {
        if (user) {
          dispatch(fetchSuccess());
          dispatch({
            type: UPDATE_AUTH_USER,
            payload: getUserObject(user),
          });
        } else {
          dispatch(fetchError(user.error));
        }
      })
      .catch(function(error) {
        dispatch(fetchError(error.message));
      });
  };
};
