import axios from "axios";
import { GET_USER_PROFILE, UPDATE_USER_PROFILE } from "../types";

export const getUserProfile = (toast) => async (dispatch, getState) => {
  const token = getState().auth.token;
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

export const updateUserProfile =
  (updatedUserData, toast) => async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      const res = await axios.put("/api/users/profile", updatedUserData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: UPDATE_USER_PROFILE,
        payload: res.data,
      });
      toast.success("User profile updated");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
