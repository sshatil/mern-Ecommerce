import { combineReducers } from "redux";
import { product, topProducts, categoryList, singleProduct } from "./products";
import { auth } from "./auth";
import { cart, shoppingPage } from "./cart";
import { userProfile } from "./userProfile";
import { createOrder } from "./createOrder";

export default combineReducers({
  product,
  singleProduct,
  topProducts,
  categoryList,
  auth,
  cart,
  shoppingPage,
  userProfile,
  createOrder,
});
