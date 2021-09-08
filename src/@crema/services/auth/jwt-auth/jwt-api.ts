import axios from 'axios';

const jwtAxios = axios.create({
  baseURL: process.env.REACT_APP_DEVELOPMENT_BASE_URL, //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
  // allows httpOnly cookie
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

export default jwtAxios;
