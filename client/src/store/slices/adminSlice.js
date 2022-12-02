import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    name: '',
    email: '',
  },
  auth: null,
  loginError: null
};

export const adminSlice = createSlice({
  name: 'Admin',
  initialState,
  reducers: {
    setAdminData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
      state.auth = true;
      state.loginError = null;
    },
    signOutAdmin: (state, action) => {
      state.data = initialState.data;
      state.auth = false;
    },
    setError: (state, action) => {
      state.loginError = action.payload
    }
  }
});

export const { setAdminData, signOutAdmin, setError } = adminSlice.actions;
export default adminSlice.reducer;