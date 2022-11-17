import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_TO_CART,
} from "../types";

const allCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const initialState = {
  cartItems: allCartItems,
};

export const cart = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      const item = payload;
      const sameItem = state.cartItems.find((i) => i._id === item._id);
      if (sameItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i._id === sameItem._id ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...payload, qty: 1 }],
        };
      }
    case REMOVE_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i._id !== payload),
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((i) =>
          i._id === payload.id ? { ...i, qty: payload.qty + 1 } : i
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((i) =>
          i._id === payload.id ? { ...i, qty: payload.qty - 1 } : i
        ),
      };

    default:
      return state;
  }
};

export const shoppingPage = (state = { open: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "OPEN_SHOPPING_PAGE":
      return { open: true };
    case "CLOSE_SHOPPING_PAGE":
      return { open: false };
    default:
      return state;
  }
};
