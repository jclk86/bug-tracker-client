import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {AuthUser} from 'types/models/AuthUser';
import {fetchStart} from 'redux/actions/Common';
import {Dispatch} from 'redux';
import {
  loadJWTUser,
  onJWTAuthSignout,
  setJWTToken,
} from 'redux/actions/JWTAuth';
import {AppActions} from 'types';

const jwtAxios = axios.create({
  baseURL: process.env.REACT_APP_DEVELOPMENT_BASE_URL, //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});
jwtAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.data.msg === 'Token is not valid') {
      console.log('Need to logout user');
      // store.dispatch({type: LOGOUT});
    }
    return Promise.reject(err);
  },
);
export const setAuthToken = (token: string | null) => {
  if (token) {
    jwtAxios.defaults.headers.common['x-auth-token'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete jwtAxios.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('token');
  }
};

let refreshTimeOutId: ReturnType<typeof setTimeout>;

export const refreshToken = (delay?: number) => {
  refreshTimeOutId = setTimeout(postRefreshToken, 10000);
};

const postRefreshToken = () => {
  return async (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    try {
      const newAccessToken = await jwtAxios.post('refreshToken');
      localStorage.setItem('token', newAccessToken.data.token);
      dispatch(setJWTToken(newAccessToken.data.token));
      await loadJWTUser(dispatch);
    } catch (err) {
      abortRefreshToken();
      global.console.log('Failed to renew the jwt from the refresh token.');
      return onJWTAuthSignout();
    }
  };
};

const abortRefreshToken = () => {
  if (refreshTimeOutId) {
    window.clearTimeout(refreshTimeOutId);
  }
};

export const parseJWT = (jwt: string | null): AuthUser | null => {
  if (jwt) {
    return jwtDecode(jwt);
  } else {
    return null;
  }
};

export default jwtAxios;
