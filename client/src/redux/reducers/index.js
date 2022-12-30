import { combineReducers } from "redux";
import {
  product,
  topProducts,
  categoryList,
  singleProduct,
  createProduct,
} from "./products";
import { auth } from "./auth";
import { cart, shoppingPage } from "./cart";
import { userProfile } from "./userProfile";
import { createOrder, orderDetails, orderPay, userOrderList } from "./order";

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
  orderDetails,
  orderPay,
  userOrderList,
  createProduct,
});
