import axios from "axios";
import {
  CREATE_USER_ORDER,
  GET_ORDER_LIST,
  GET_USER_ORDER_LIST,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_TO_DELIVERED,
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
    toast.error("Fill all the input field");
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
      toast.success("Payment successful");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

export const getUserOrderList = (toast) => async (dispatch, getState) => {
  const token = getState().auth.token;
  try {
    const res = await axios.get(`/api/orders/myorders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: GET_USER_ORDER_LIST,
      payload: res.data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// get all order list (admin)
export const getOrderList = (toast) => async (dispatch, getState) => {
  const token = getState().auth.token;
  try {
    const res = await axios.get(`/api/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: GET_ORDER_LIST,
      payload: res.data,
    });
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// order delivered
export const orderToDelivered =
  (orderId, toast) => async (dispatch, getState) => {
    const token = getState().auth.token;
    console.log(token);
    console.log(orderId);
    try {
      // dispatch({
      //   type: ORDER_TO_DELIVERED,
      // });
      await axios.put(
        `/api/orders/${orderId}/deliver`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: ORDER_TO_DELIVERED,
        // payload: res.data,
      });
      toast.success("Product Delivered");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
