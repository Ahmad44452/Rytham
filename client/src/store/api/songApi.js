import axios from "axios";
import { setSongs } from "../slices/songSlice";

axios.defaults.headers.post['Content-Type'] = "application/json";

export const addSongApi = (songName, albumId, songLink) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/addSong', { songName, albumId, songLink });

      const songsRes = await axios.get('/api/getSongs');

      await dispatch(setSongs(songsRes.data));

    } catch (error) {
      console.log(error);
    }
  }
}

export const getSongsApi = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/api/getSongs');

      await dispatch(setSongs(res.data));

    } catch (error) {
      console.log(error);
    }
  }
}


export const deleteSongApi = (songId) => {
  return async (dispatch) => {
    try {
      await axios.post('/api/deleteSong', { songId });

      const songsRes = await axios.get('/api/getSongs');

      await dispatch(setSongs(songsRes.data));

    } catch (error) {
      console.log(error);
    }
  }
}