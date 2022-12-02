import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  artists: []
};

export const artistsSlice = createSlice({
  name: 'Artists',
  initialState,
  reducers: {
    setArtists: (state, action) => {
      state.artists = [...action.payload];
    }
  }
});

export const { setArtists } = artistsSlice.actions;
export default artistsSlice.reducer;