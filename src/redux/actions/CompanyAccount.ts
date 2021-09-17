import axios from 'axios';
import {fetchError, fetchStart, fetchSuccess, showMessage} from './Common';
import {AppActions} from '../../types';
import {Dispatch} from 'redux';

export const onCompanySignUp = (body: {email: string; companyName: string}) => {
  return async (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_DEVELOPMENT_BASE_URL}/account`,
        body,
      );
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
