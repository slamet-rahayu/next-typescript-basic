import pCategReducer from './products-category';
import pReducer from './products';
import loginReducer from './login';
import userReducer from './user';

export default {
  pCategReducer,
  pReducer: pReducer.productSlice,
  pDReducer: pReducer.productDetailSlice,
  loginReducer,
  userInfoReducer: userReducer.userInfoSlice
};
