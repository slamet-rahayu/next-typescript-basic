import pCategReducer from './products-category';
import pReducer from './products';
import loginReducer from './login';

export default {
  pCategReducer,
  pReducer: pReducer.productSlice,
  pDReducer: pReducer.productDetailSlice,
  loginReducer
};
