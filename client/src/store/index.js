import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "./slices/adminSlice";
// import numbersReducer from "./slices/numbersSlice";

export const store = configureStore({
  reducer: {
    adminReducer
  }
})