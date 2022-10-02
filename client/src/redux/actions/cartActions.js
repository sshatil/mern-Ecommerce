import axios from "axios";
import { ADD_TO_CART, REMOVE_TO_CART } from "../types";

export const addToCart = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`/api/products/${id}`);
    dispatch({
      type: ADD_TO_CART,
      payload: res.data,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.log(error);
  }
};

export const removeProductFromCart = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_TO_CART,
    payload: id,
  });
};

export const handleOpenCartPage = () => (dispatch) => {
  dispatch({
    type: "OPEN_SHOPPING_PAGE",
  });
  // dispatch({
  //   type: "CLOSE_SHOPPING_PAGE",
  // });
};
export const handleCloseCartPage = () => (dispatch) => {
  dispatch({
    type: "CLOSE_SHOPPING_PAGE",
  });
};
