import Auth0Config from '../../@crema/services/auth/auth0/auth0Config';
import {AuthType} from '../../shared/constants/AppEnums';
import {setJWTToken} from './JWTAuth';
import {defaultUser} from '../../shared/constants/AppConst';
import {AppActions} from '../../types';
import {Dispatch} from 'redux';
import {AuthUser} from '../../types/models/AuthUser';
import {fetchError, fetchStart, fetchSuccess} from './Common';
import {UPDATE_AUTH_USER} from '../../types/actions/Auth.actions';

export const onSignInAuth0User = () => {
  return async (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    try {
      const auth0 = await Auth0Config();
      await auth0.loginWithPopup({});
      auth0
        .getUser()
        .then((user: any) => {
          dispatch(fetchSuccess());
          dispatch(setJWTToken(user.sub));
          dispatch({
            type: UPDATE_AUTH_USER,
            payload: getUserObject(user),
          });
        })
        .catch((error: any) => {
          dispatch(fetchError(error.message));
        });
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};

const getUserObject = (authUser: any): AuthUser => {
  return {
    authType: AuthType.AUTH0,
    role: defaultUser.role,
    id: authUser.id,
    displayName: authUser.name,
    email: authUser.email,
    photoURL: authUser.picture,
    token: authUser.id,
  };
};

export const onSignOutAuth0User = () => {
  return async (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    try {
      const auth0 = await Auth0Config();
      auth0.logout();
      dispatch({type: UPDATE_AUTH_USER, payload: null});
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};
