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

  const refreshToken = async (delay?: number) => {
    refreshTimeOutId = setTimeout(postRefreshToken, 10000);
    // refreshTimeOutId = await wait(15000).then(() => {
    //   postRefreshToken();
    // });
  };

  const postRefreshToken = async () => {
    try {
      dispatch(fetchStart());
      const res = await jwtAxios.post('/refreshToken');
      // Ensures user isn't null after token refresh.
      const decoded = parseJWT(res.data.token) as AuthUser;
      const user = await jwtAxios.get(`/user/${decoded.id}`);
      dispatch({
        type: UPDATE_AUTH_USER,
        payload: getUserObject(user),
      });
      setAuthToken(res.data.token);
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
    refreshTimeOutId,
  };
};

export default jwtManager();
