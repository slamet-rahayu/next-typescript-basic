/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const productSlice: any = createSlice({
  name: 'pruducts',
  initialState: {
    data: [],
    isLoading: true,
    isError: false
  },
  reducers: {
    getProducts: (state: any, action: any): void => {
      state.data = action.payload;
    },
    failGetProducts: (state) => {
      state.isError = true;
    },
    doneGetProducts: (state) => {
      state.isLoading = false;
    }
  }
});

export const { getProducts, failGetProducts, doneGetProducts } = productSlice.actions;

export default productSlice.reducer;
