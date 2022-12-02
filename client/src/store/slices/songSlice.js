import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: []
}

export const songsSlice = createSlice({
  name: 'Songs',
  initialState,
  reducers: {
    setSongs: (state, action) => {
      state.songs = [...action.payload]
    }
  }
});


export const { setSongs } = songsSlice.actions;
export default songsSlice.reducer;