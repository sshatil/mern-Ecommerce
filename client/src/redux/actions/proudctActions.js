import axios from "axios";
import {
  CREATE_PRODUCT,
  CREATE_REVIEW,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_SINGLE_PRODUCT,
  GET_TOP_PRODUCTS,
  GET_TOP_PRODUCTS_FAILED,
  UPLOAD_PRODUCT_IMAGE,
} from "../types";

export const getProducts =
  (name = "", categoryName = "", min = "", max = "", rating = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `/api/products?name=${name}&category=${categoryName}&min=${min}&max=${max}&rating=${rating}`
      );
      // setLoading(false);
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

// get single product
export const getSingleProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/products/${id}`);
    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// get top products
export const getTopProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/products/top");
    dispatch({
      type: GET_TOP_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TOP_PRODUCTS_FAILED,
    });
    console.log(error);
  }
};
// get category list
export const getCategoryList = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/products/categories");
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const reviewProduct =
  (id, name, rating, comment, toast) => async (dispatch, getState) => {
    console.log(name, rating, comment);
    const data = { name, rating, comment };
    const token = getState().auth.token;
    try {
      // dispatch({
      //   type: CREATE_REVIEW_REQUEST,
      // });
      await axios.post(`/api/products/${id}/reviews`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: CREATE_REVIEW,
        // payload: res.data,
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

// admin panel
export const uploadProductImage = (formData) => async (dispatch, getState) => {
  const token = getState().auth.token;
  try {
    // await axios.post("/api/products", formData, {
    const { data } = await axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: UPLOAD_PRODUCT_IMAGE,
      payload: data,
    });
  } catch (error) {
    // toast.error(error.response.data.message);
  }
};
export const createProduct = (formData) => async (dispatch, getState) => {
  const token = getState().auth.token;
  try {
    const { data } = await axios.post("/api/products", formData, {
      // const { data } = await axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: CREATE_PRODUCT,
    });
  } catch (error) {
    // toast.error(error.response.data.message);
  }
};
