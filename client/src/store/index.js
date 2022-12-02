import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "./slices/adminSlice";
import artistsReducer from './slices/artistSlice';
import albumsReducer from "./slices/albumSlice";
import songsReducer from './slices/songSlice';

export const store = configureStore({
  reducer: {
    adminReducer,
    artistsReducer,
    albumsReducer,
    songsReducer
  }
})