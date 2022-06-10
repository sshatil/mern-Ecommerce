import { GET_PRODUCTS, GET_TOP_PRODUCTS } from "../types";

const initialState = {
  products: [],
};

export const product = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

// get top products

export const topProducts = (state = { products: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TOP_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
