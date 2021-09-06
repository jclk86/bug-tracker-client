import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onGetMemberList, onGetScrumLabelList} from '../../../redux/actions';
import BoardDetail from './BoardDetail';
import BoardList from './BoardList';
import {useParams} from 'react-router-dom';
import jwtAxios from '@crema/services/auth/jwt-auth/jwt-api';
import {AppState} from '../../../redux/store';

interface ParamsProps {
  id: string;
}

const ScrumBoard = () => {
  const dispatch = useDispatch();
  const params = useParams<ParamsProps>();
  const {user} = useSelector<AppState, AppState['auth']>(({auth}) => auth);

  useEffect(() => {
    dispatch(onGetScrumLabelList());
    async function getData() {
      const response = await jwtAxios.get(`users/account/${user?.accountId}`);
      console.log(response);
    }
    getData();
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(onGetMemberList());
  }, [dispatch]);

  const onGetMainComponent = () => {
    if (params.id) {
      return <BoardDetail />;
    } else {
      return <BoardList />;
    }
  };

  return <>{onGetMainComponent()}</>;
};

export default ScrumBoard;
