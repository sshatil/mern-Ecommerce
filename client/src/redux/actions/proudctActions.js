import axios from "axios";
import {
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_SINGLE_PRODUCT,
  GET_TOP_PRODUCTS,
  GET_TOP_PRODUCTS_FAILED,
} from "../types";

export const getProducts =
  (name = "", categoryName = "", min = "", max = "", rating = "", setLoading) =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `/api/products?name=${name}&category=${categoryName}&min=${min}&max=${max}&rating=${rating}`
      );
      setLoading(false);
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data.products,
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
