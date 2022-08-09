import axios from "axios";
import { GET_CATEGORIES, GET_PRODUCTS, GET_TOP_PRODUCTS } from "../types";

export const getProducts =
  (name = "", category = "", min = "", max = "", rating = "", setLoading) =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `/api/products?name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}`
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
// get top products
export const getTopProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/products/top");
    dispatch({
      type: GET_TOP_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
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
