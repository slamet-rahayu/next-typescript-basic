import pCategReducer from './products-category';
import pReducer from './products';

export default {
  pCategReducer,
  pReducer: pReducer.productSlice,
  pDReducer: pReducer.productDetailSlice
};
