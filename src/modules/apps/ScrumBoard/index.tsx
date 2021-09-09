import React, {useEffect} from 'react';
import axios from 'axios';
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
    let source = axios.CancelToken.source();

    // ! need to catch error with try catch for async
    dispatch(onGetScrumLabelList());
    async function getData() {
      try {
        const response = await jwtAxios.get(
          `users/account/${user?.accountId}`,
          {
            cancelToken: source.token,
          },
        );
        console.log('scrumboard user data: ', response);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('caught cancel in Scumboard');
        } else {
          throw err;
        }
      }
    }
    getData();

    return () => {
      console.log('unmounting in scrumboard');
      source.cancel();
    };
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
