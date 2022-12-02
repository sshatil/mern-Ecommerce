import axios from "axios";
import {
  CREATE_USER_ORDER,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  RESET_CART,
  USER_ORDER_DETAILS,
} from "../types";

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
    dispatch({
      type: RESET_CART,
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
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
export const userOrderPayment =
  (orderId, paymentResult, toast) => async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
      dispatch({
        type: ORDER_PAY_REQUEST,
      });
      const res = await axios.put(`/api/orders/${orderId}/pay`, paymentResult, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: ORDER_PAY_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
