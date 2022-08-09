import { combineReducers } from "redux";
import { product, topProducts, categoryList } from "./products";

export default combineReducers({
  product,
  topProducts,
  categoryList,
});
