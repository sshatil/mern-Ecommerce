import { combineReducers } from "redux";
import { product, topProducts, categoryList, singleProduct } from "./products";
import { auth } from "./auth";

export default combineReducers({
  product,
  singleProduct,
  topProducts,
  categoryList,
  auth,
});
