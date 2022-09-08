import axios from "axios";
import { REGISTER_SUCCESS } from "../types";

export const registerUser =
  ({ name, email, password }, toast) =>
  async (dispatch) => {
    try {
      const res = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
