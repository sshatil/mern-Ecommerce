import axios from "axios";
import { GET_PRODUCTS, GET_TOP_PRODUCTS } from "../types";

export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/products");
    dispatch({
      type: GET_PRODUCTS,
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
    console.log(error);
  }
};
