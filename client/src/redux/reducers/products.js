import { GET_PRODUCTS } from "../types";

const initialState = {
  products: [],
};

const product = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default product;
