import { call, put, takeEvery } from 'redux-saga/effects';
import { TProducts } from 'interface/products';
import products from 'apis/products';
import Actions from 'redux-local/actions/products';
import { getProducts, doneGetProducts, failGetProducts } from '../reducers/products';

function* productsFetch() {
  try {
    const data: TProducts = yield call(() => products.getProduct());
    yield put(getProducts(data));
  } catch (error) {
    yield put(failGetProducts());
  } finally {
    yield put(doneGetProducts());
  }
}

export default function* productsSaga() {
  yield takeEvery(Actions.GET_PRODUCTS_REQUESTED, productsFetch);
}
