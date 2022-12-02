import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  albums: []
}

export const albumsSlice = createSlice({
  name: 'Albums',
  initialState,
  reducers: {
    setAlbums: (state, action) => {
      state.albums = [...action.payload]
    }
  }
});


export const { setAlbums } = albumsSlice.actions;
export default albumsSlice.reducer;