import axios from "axios";
import { CREATE_USER_ORDER, USER_ORDER_DETAILS } from "../types";

export const createUserOrder = (data, toast) => async (dispatch, getState) => {
  const token = getState().auth.token;
  try {
    const res = await axios.post("/api/orders", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: CREATE_USER_ORDER,
      payload: res.data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
export const userOrderDetails = (id, toast) => async (dispatch, getState) => {
  const token = getState().auth.token;
  try {
    const res = await axios.get(`/api/orders/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: USER_ORDER_DETAILS,
      payload: res.data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
