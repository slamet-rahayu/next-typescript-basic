import { spawn } from 'redux-saga/effects';
import pCategSaga from './products-category';
import pSaga from './products';

export default function* rootSaga() {
  yield spawn(pCategSaga);
  yield spawn(pSaga);
}
