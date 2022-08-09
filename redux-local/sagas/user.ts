import { call, put, takeEvery } from 'redux-saga/effects';
import { IUserRes } from 'interface/user';
import { PayloadAction } from '@reduxjs/toolkit';
import userApi from 'apis/user';
import Actions from '../actions/user';
import { getPCateg, failGetPCateg, doneGetPcateg } from '../reducers/products-category';

function* userInfoFetch(action: PayloadAction<string>) {
  try {
    const { payload } = action;
    const data: IUserRes = yield call(() => userApi.getUserInfo(payload));
    yield put(getPCateg(data));
  } catch (error) {
    yield put(failGetPCateg());
  } finally {
    yield put(doneGetPcateg());
  }
}

export default function* userInfoSaga() {
  yield takeEvery(Actions.GET_USERINFO_REQUESTED, userInfoFetch);
}
