import axios from "axios";
import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_TO_CART,
} from "../types";

export const addToCart = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: ADD_TO_CART,
      // payload: data,
      // send payload as required backend orderItems
      payload: {
        // _id: data._id,
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        qty: 1,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.log(error);
  }
};

export const removeProductFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_TO_CART,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// product quantity change
export const increaseProductQuantity = (id, qty) => (dispatch, getState) => {
  dispatch({
    type: INCREASE_QUANTITY,
    payload: { id, qty },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const decreaseProductQuantity = (id, qty) => (dispatch, getState) => {
  dispatch({
    type: DECREASE_QUANTITY,
    payload: { id, qty },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
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
