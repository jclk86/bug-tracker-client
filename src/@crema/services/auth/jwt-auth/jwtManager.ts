import jwtAxios, {setAuthToken} from './jwt-api';
import configureStore from 'redux/store';
import jwtDecode from 'jwt-decode';
import {getUserObject} from 'redux/actions';
import {AuthUser} from 'types/models/AuthUser';
import {fetchStart, fetchError} from 'redux/actions';
import {
  SET_AUTH_TOKEN,
  SIGNOUT_AUTH_SUCCESS,
  UPDATE_AUTH_USER,
} from 'types/actions/Auth.actions';

const {dispatch} = configureStore();

export const jwtManager = () => {
  let refreshTimeOutId: any;

  const wait = (ms: number) => {
    return new Promise((resolve) =>
      window.setTimeout(() => resolve('refreshing'), ms),
    );
  };

  const refreshToken = async (delay?: number) => {
    refreshTimeOutId = await wait(15000);
    return postRefreshToken();
  };

  const postRefreshToken = async () => {
    // return jwtAxios
    //   .post('refreshToken')
    //   .then((res) => {
    //     if (res.status !== 201) {
    //       store.dispatch({type: SIGNOUT_AUTH_SUCCESS});
    //       eraseToken();
    //       return {data: {token: null}};
    //     }
    //     return res;
    //   })
    //   .then((res) => {
    //     if (res.data.token) {
    //       localStorage.setItem('token', res.data.token);
    //       const decoded = parseJWT(res.data.token);
    //       const user = jwtAxios.get(`user/${decoded?.id}`);
    //       store.dispatch({
    //         type: UPDATE_AUTH_USER,
    //         payload: getUserObject(user),
    //       });
    //       setAuthToken(decoded?.id!);
    //       store.dispatch({type: SET_AUTH_TOKEN, payload: res.data.token});
    //       refreshToken();
    //     }
    //     return res.data.token;
    //   });
  

    if(!localStorage.getItem('token')) {
      
    }

    try {
      dispatch(fetchStart());
      const res = await jwtAxios.post('refreshToken');
      const decoded = parseJWT(res.data.token) as AuthUser;
      const user = await jwtAxios.get(`user/${decoded.id}`);
      dispatch({
        type: UPDATE_AUTH_USER,
        payload: getUserObject(user),
      });
      setAuthToken(decoded.id);
      dispatch({type: SET_AUTH_TOKEN, payload: res.data.token});
      refreshToken();
    } catch (err) {
      dispatch(fetchError('Not Authorized'));
      dispatch({type: SIGNOUT_AUTH_SUCCESS});
      eraseToken();
      return {data: {token: null}};
    }
  };

  const abortRefreshToken = () => {
    if (refreshTimeOutId) {
      window.clearTimeout(refreshTimeOutId);
    }
  };

  const eraseToken = () => {
    abortRefreshToken();
    setAuthToken(null);
    return true;
  };

  const parseJWT = (jwt: string | null): AuthUser | null => {
    if (jwt) {
      return jwtDecode(jwt);
    } else {
      return null;
    }
  };

  return {
    refreshToken,
    parseJWT,
    eraseToken,
    abortRefreshToken,
  };
};

export default jwtManager();
