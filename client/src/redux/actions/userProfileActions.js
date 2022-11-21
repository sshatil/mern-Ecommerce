import axios from "axios";
import { GET_USER_PROFILE } from "../types";

export const getUserProfile = (token, toast) => async (dispatch) => {
  console.log(token);
  try {
    const res = await axios.get("/api/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: GET_USER_PROFILE,
      payload: res.data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
