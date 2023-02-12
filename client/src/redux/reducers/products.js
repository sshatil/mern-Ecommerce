import {
  CREATE_PRODUCT,
  CREATE_REVIEW,
  CREATE_REVIEW_REQUEST,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_SINGLE_PRODUCT,
  GET_TOP_PRODUCTS,
  UPLOAD_PRODUCT_IMAGE,
} from "../types";

const initialState = {
  products: [],
  loading: true,
};

export const product = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    default:
      return state;
  }
};

// get single product

export const singleProduct = (
  state = { product: [], loading: true },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        loading: false,
        product: payload,
        // reviewLoading: true,
      };
    case CREATE_REVIEW:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

// get top products

export const topProducts = (
  state = { products: [], loading: true },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TOP_PRODUCTS:
      return {
        ...state,
        loading: false,
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

// admin panel create product
export const createProduct = (state = { path: "", loading: true }, action) => {
  const { type, payload } = action;
  switch (type) {
    case UPLOAD_PRODUCT_IMAGE:
      return {
        ...state,
        loading: false,
        path: payload.secure_url,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        loading: false,
        path: "",
      };

    default:
      return state;
  }
};
