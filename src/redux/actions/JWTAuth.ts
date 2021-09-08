import jwtAxios from '@crema/services/auth/jwt-auth/jwt-api';
import jwtManager from '@crema/services/auth/jwt-auth/jwtManager';
import {fetchError, fetchStart, fetchSuccess} from './Common';
import {AuthType} from '../../shared/constants/AppEnums';
import {defaultUser} from '../../shared/constants/AppConst';
import {AuthUser} from '../../types/models/AuthUser';
import {AppActions} from '../../types';
import {Dispatch} from 'redux';
import {
  SET_AUTH_TOKEN,
  SIGNOUT_AUTH_SUCCESS,
  UPDATE_AUTH_USER,
} from '../../types/actions/Auth.actions';

// ! this link comes from an email -- redirect to site? This will take the query params and asset it into the axios post
export const onJwtUserSignUp = (body: {
  email: string;
  password: string;
  name: string;
}) => {
  return async (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    try {
      const res = await jwtAxios.post('users', body);
      localStorage.setItem('token', res.data.token);
      dispatch(setJWTToken(res.data.token));
      await loadJWTUser(dispatch);
    } catch (err) {
      console.log('error!!!!', err.response.data.error);
      dispatch(fetchError(err.response.data.error));
    }
  };
};

export const onJwtSignIn = (body: {email: string; password: string}) => {
  return async (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    try {
      const res = await jwtAxios.post('login', body);
      localStorage.setItem('token', res.data.token);
      dispatch(setJWTToken(res.data.token));
      await loadJWTUser(dispatch);
    } catch (err) {
      console.log('error!!!!', err.response.data.error);
      dispatch(fetchError(err.response.data.error));
    }
  };
};

export const loadJWTUser = async (dispatch: Dispatch<AppActions>) => {
  dispatch(fetchStart());
  const token = localStorage.getItem('token');
  if (!token) {
    dispatch(fetchSuccess());
    return;
  }

  const decoded = jwtManager.parseJWT(token);
  if (!decoded) return onJWTAuthSignout();

  try {
    // const token = localStorage.getItem('token');
    // const decoded = jwtManager.parseJWT(token);
    // if (!decoded) return onJWTAuthSignout();
    const res = await jwtAxios.get(`user/${decoded.id}`);
    dispatch(fetchSuccess());
    dispatch({
      type: UPDATE_AUTH_USER,
      payload: getUserObject(res.data),
    });
    dispatch(setJWTToken(token)); // ! added
    // initiates token refresh, even when page is reloaded
    // Do not 'await', as loading will last as long as timeout does.
    jwtManager.refreshToken();
  } catch (err) {
    console.log('error!!!!', err.response.error);
    dispatch(fetchError(err.response.error));
  }
};

export const setJWTToken = (token: string | null): AppActions => ({
  type: SET_AUTH_TOKEN,
  payload: token,
});

export const getUserObject = (authUser: any): AuthUser => {
  return {
    authType: AuthType.JWT_AUTH,
    displayName: authUser.first_name + ' ' + authUser.last_name,
    email: authUser.email,
    role: defaultUser.role,
    token: authUser.id,
    id: authUser.id,
    photoURL: authUser.avatar,
    accountId: authUser.account_id,
  };
};

export const onJWTAuthSignout = () => {
  return async (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchSuccess());
    try {
      await jwtAxios.delete('logout');
      setTimeout(() => {
        dispatch({type: SIGNOUT_AUTH_SUCCESS});
        dispatch(fetchSuccess());
        jwtManager.eraseToken();
      }, 500);
    } catch (err) {
      console.log('error!!!!', err);
      dispatch(fetchError(err.response.error));
    }
  };
};
