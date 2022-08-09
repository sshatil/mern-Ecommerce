import { GET_CATEGORIES, GET_PRODUCTS, GET_TOP_PRODUCTS } from "../types";

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

// GET category list
export const categoryList = (state = { category: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        category: payload,
      };
    default:
      return state;
  }
};
