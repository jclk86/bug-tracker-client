import {
  auth,
  facebookAuthProvider,
  githubAuthProvider,
  googleAuthProvider,
  twitterAuthProvider,
} from '../../@crema/services/auth/firebase/firebase';
import {UPDATE_AUTH_USER} from '../../types/actions/Auth.actions';
import {AuthType} from '../../shared/constants/AppEnums';
import {defaultUser} from '../../shared/constants/AppConst';
import {AppActions} from '../../types';
import {Dispatch} from 'redux';
import {AuthUser} from '../../types/models/AuthUser';
import {fetchError, fetchStart, fetchSuccess} from './Common';

export const onSignUpFirebaseUser = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    try {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((data) => {
          dispatch(fetchSuccess());
          dispatch({type: UPDATE_AUTH_USER, payload: getUserObject(data)});
        })
        .catch((error) => {
          dispatch(fetchError(error.message));
        });
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};

export const onForgetPasswordFirebaseUser = (email: string) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    try {
      auth
        .sendPasswordResetEmail(email)
        .then((data) => {
          dispatch(fetchSuccess());
          // dispatch({type: UPDATE_AUTH_USER, payload: data});
        })
        .catch((error) => {
          dispatch(fetchError(error.message));
        });
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};

export const onGetFirebaseSignInUser = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    try {
      // auth
      //   .onAuthStateChanged()
      //   .then((authUser: any) => {
      //     dispatch(fetchSuccess());
      //     dispatch({
      //       type: UPDATE_AUTH_USER,
      //       payload: getUserObject(authUser),
      //     });
      //   })
      //   .catch((error: any) => {
      //     dispatch(fetchError(error.message));
      //   });
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};

const getUserObject = (authUser: any): AuthUser => {
  return {
    authType: AuthType.FIREBASE,
    role: defaultUser.role,
    id: authUser.id,
    displayName: authUser.displayName,
    email: authUser.email,
    photoURL: authUser.photoURL,
    token: authUser.refreshToken,
  };
};

export const onSignInFirebaseUser = (email: string, password: string) => {
  return (dispatch: Dispatch<AppActions>) => {
    try {
      dispatch(fetchStart());
      auth
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
          dispatch(fetchSuccess());
          dispatch({
            type: UPDATE_AUTH_USER,
            payload: getUserObject(data),
          });
        })
        .catch((error) => {
          dispatch(fetchError(error.message));
        });
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};

export const onSignOutFirebaseUser = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    try {
      auth
        .signOut()
        .then((data) => {
          dispatch(fetchSuccess());
          dispatch({type: UPDATE_AUTH_USER, payload: null});
        })
        .catch((error) => {
          dispatch(fetchError(error.message));
        });
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};

export const signInUserWithGoogle = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    try {
      auth
        .signInWithPopup(googleAuthProvider)
        .then((data) => {
          dispatch(fetchSuccess());
          dispatch({type: UPDATE_AUTH_USER, payload: getUserObject(data.user)});
        })
        .catch((error) => {
          dispatch(fetchError(error.message));
        });
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};
export const signInUserWithGithub = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    try {
      auth
        .signInWithPopup(githubAuthProvider)
        .then((data) => {
          dispatch(fetchSuccess());
          dispatch({type: UPDATE_AUTH_USER, payload: getUserObject(data.user)});
        })
        .catch((error) => {
          dispatch(fetchError(error.message));
        });
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};

export const signInUserWithFacebook = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    try {
      auth
        .signInWithPopup(facebookAuthProvider)
        .then((data) => {
          dispatch(fetchSuccess());
          dispatch({type: UPDATE_AUTH_USER, payload: getUserObject(data.user)});
        })
        .catch((error) => {
          dispatch(fetchError(error.message));
        });
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};

export const signInUserWithTwitter = () => {
  return (dispatch: Dispatch<AppActions>) => {
    // dispatch(fetchStart());
    try {
      auth
        .signInWithPopup(twitterAuthProvider)
        .then((data) => {
          dispatch(fetchSuccess());
          dispatch({type: UPDATE_AUTH_USER, payload: getUserObject(data.user)});
        })
        .catch((error) => {
          dispatch(fetchError(error.message));
        });
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};
