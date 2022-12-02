import {
  CREATE_USER_ORDER,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
  USER_ORDER_DETAILS,
} from "../types";

export const createOrder = (state = { order: {}, loading: true }, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_USER_ORDER:
      return {
        ...state,
        order: payload,
        loading: false,
      };
    default:
      return state;
  }
};
// order details
export const orderDetails = (
  state = { orderItem: {}, loading: true },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ORDER_DETAILS:
      return {
        ...state,
        orderItem: payload,
        loading: false,
      };
    default:
      return state;
  }
};
// order pay
export const orderPay = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case ORDER_PAY_REQUEST:
      return {
        loading: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};
