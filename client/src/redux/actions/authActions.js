import axios from "axios";
import { LOGIN_SUCCESS, LOGOUT_USER, REGISTER_SUCCESS } from "../types";

export const registerUser =
  ({ name, email, password }, toast, from, navigate) =>
  async (dispatch) => {
    try {
      const res = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      if (res.data) {
        localStorage.setItem("eshop-auth", JSON.stringify(res.data));
        navigate(from, { replace: true });
      }
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

export const loginUser =
  ({ email, password }, toast, from, navigate) =>
  async (dispatch) => {
    const loginData = { email, password };
    try {
      const res = await axios.post("/api/users/login", loginData);
      if (res.data) {
        localStorage.setItem("eshop-auth", JSON.stringify(res.data));
        navigate(from, { replace: true });
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
