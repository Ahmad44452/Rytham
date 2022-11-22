import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    name: '',
    email: '',
  },
  auth: null
};

export const adminSlice = createSlice({
  name: 'Admin',
  initialState,
  reducers: {
    setAdminData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
      state.auth = true;
    },
    signOutAdmin: (state, action) => {
      state.data = initialState.data;
      state.auth = false;
    }
  }
});

export const { setAdminData, signOutAdmin } = adminSlice.actions;
export default adminSlice.reducer;