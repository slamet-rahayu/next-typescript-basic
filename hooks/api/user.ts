import { useEffect } from 'react';
import { IHookRes } from 'interface/res-api';
import { IUserRes } from 'interface/user';
import { useDispatch, useSelector } from 'react-redux';
import Actions from 'redux-local/actions/user';

function useGetUserInfoSaga(): IHookRes<IUserRes> {
  const userInfoCalls = useSelector((state: any) => state.userinfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: Actions.GET_USERINFO_REQUESTED, payload: '' });
  }, [dispatch]);

  return {
    isLoading: userInfoCalls.isLoading,
    isError: userInfoCalls.isError,
    data: userInfoCalls.data
  };
}

export default {
  useGetUserInfoSaga
};
