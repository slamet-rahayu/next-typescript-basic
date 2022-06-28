import { spawn } from 'redux-saga/effects';
import pCategSaga from './products-category';

export default function* rootSaga() {
  yield spawn(pCategSaga);
}
