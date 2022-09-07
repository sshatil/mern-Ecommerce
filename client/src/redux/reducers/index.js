import { combineReducers } from "redux";
import { product, topProducts, categoryList, singleProduct } from "./products";

export default combineReducers({
  product,
  singleProduct,
  topProducts,
  categoryList,
});
