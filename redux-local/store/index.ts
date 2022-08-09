import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import sagas from 'redux-local/sagas';
import reducers from '../reducers';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    productscategory: reducers.pCategReducer,
    products: reducers.pReducer,
    product: reducers.pDReducer,
    login: reducers.loginReducer
  },
  middleware: [saga]
});

saga.run(sagas);

export default store;
