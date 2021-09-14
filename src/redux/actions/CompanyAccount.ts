import jwtAxios from '@crema/services/auth/jwt-auth/jwt-api';
import {fetchError, fetchStart, fetchSuccess, showMessage} from './Common';
import {AppActions} from '../../types';
import {Dispatch} from 'redux';

export const onCompanySignUp = (body: {email: string; companyName: string}) => {
  return async (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    try {
      const res = await jwtAxios.post('account', body);
      console.log('RES: ', res);
      dispatch(fetchSuccess());
      dispatch(showMessage('Successful sign up. Please see email.'));
      return true;
    } catch (err) {
      dispatch(fetchError(err.response.data));
      return false;
    }
  };
};
