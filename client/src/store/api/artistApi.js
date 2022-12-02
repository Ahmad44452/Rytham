import axios from "axios";
import { setArtists } from "../slices/artistSlice";

axios.defaults.headers.post['Content-Type'] = "application/json";

export const addArtistApi = (artistName, artistArtwork) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/addArtist', { artistName, artistArtwork });

      const artistsRes = await axios.get('/api/getArists');

      await dispatch(setArtists(artistsRes.data));

    } catch (error) {
      console.log(error);
    }
  }
}

export const deleteArtistApi = (artistId) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/deleteArtist', { artistId });

      const artistsRes = await axios.get('/api/getArists');

      await dispatch(setArtists(artistsRes.data));

    } catch (error) {
      console.log(error);
    }
  }
}

export const getArtistsApi = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/api/getArists');

      await dispatch(setArtists(res.data));

    } catch (error) {
      console.log(error);
    }
  }
}