import axios from "axios";
import { GET_PRODUCTS, GET_TOP_PRODUCTS } from "../types";

export const getProducts =
  (name, category, min, max, rating) => async (dispatch) => {
    try {
      const res = await axios.get(
        // `/api/products?name=${name | " "}&category=${category}&min=${min}&max=${max}&rating=${rating}`
        `/api/products?name=${name}`
      );
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
