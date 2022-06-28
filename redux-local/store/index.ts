import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import sagas from 'redux-local/sagas';
import pCategReducer from '../reducers/products-category';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    productscategory: pCategReducer
  },
  middleware: [saga]
});

saga.run(sagas);

export default store;
