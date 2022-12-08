import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSongPlaying: false,
  playingSongInfo: {}
};

export const playerSlice = createSlice({
  name: 'Player',
  initialState,
  reducers: {
    toggleSongPlaying: (state, action) => {
      state.isSongPlaying = !state.isSongPlaying;
    },
    setSongPlaying: (state, action) => {
      state.isSongPlaying = action.payload;
    },
    setPlayingSongInfo: (state, action) => {
      state.playingSongInfo = { ...action.payload };
      state.isSongPlaying = true;
    }
  }
});

export const { toggleSongPlaying, setSongPlaying, setPlayingSongInfo } = playerSlice.actions;
export default playerSlice.reducer;