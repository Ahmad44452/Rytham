import axios from "axios";
import { setAlbums } from "../slices/albumSlice";

axios.defaults.headers.post['Content-Type'] = "application/json";

export const addAlbumApi = (albumName, artistId, albumArtwork) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/addAlbum', { albumName, artistId, albumArtwork });

      const albumsRes = await axios.get('/api/getAlbums');

      await dispatch(setAlbums(albumsRes.data));

    } catch (error) {
      console.log(error);
    }
  }
}

export const deleteAlbumApi = (albumId) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/deleteAlbum', { albumId });

      const albumsRes = await axios.get('/api/getAlbums');

      await dispatch(setAlbums(albumsRes.data));

    } catch (error) {
      console.log(error);
    }
  }
}

export const getAlbumsApi = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/api/getAlbums');

      await dispatch(setAlbums(res.data));

    } catch (error) {
      console.log(error);
    }
  }
}