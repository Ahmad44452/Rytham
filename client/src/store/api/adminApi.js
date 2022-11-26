import axios from "axios";
import { setAdminData, signOutAdmin } from "../slices/adminSlice";

axios.defaults.headers.post['Content-Type'] = "application/json";

export const loginAdminApi = (email, password) => {
  return async (dispatch) => {
    try {

      const user = await axios.post(`/api/adminLogin`, { email, password });

      await dispatch(setAdminData(user.data));

    } catch (error) {
      console.log(error);
      // let errorMessage = error.response.data.message;
      // if (errorMessage === "Error") {
      //   errorMessage = error.response.data.error.message;
      // }
      // showToast('error', errorMessage);
    }
  }
}