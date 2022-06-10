import { combineReducers } from "redux";
import { product, topProducts } from "./products";

export default combineReducers({
  product,
  topProducts,
});
