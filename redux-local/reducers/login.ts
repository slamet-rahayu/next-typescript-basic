/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const loginSlice: any = createSlice({
  name: 'login',
  initialState: {
    data: {},
    isLoading: false,
    isError: ''
  },
  reducers: {
    resetState: (state: any) => {
      state.data = {};
      state.isLoading = true;
      state.isError = '';
    },
    postLogin: (state: any, action: any): void => {
      state.data = action.payload;
    },
    failLogin: (state: any, action: any) => {
      state.isError = action.payload;
    },
    donePostLogin: (state) => {
      state.isLoading = false;
    }
  }
});

export const { postLogin, failLogin, donePostLogin, resetState } = loginSlice.actions;

export default loginSlice.reducer;
