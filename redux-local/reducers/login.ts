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
    postLogin: (state: any, action: any): void => {
      state.login = true;
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

export const { postLogin, failLogin, donePostLogin } = loginSlice.actions;

export default loginSlice.reducer;
