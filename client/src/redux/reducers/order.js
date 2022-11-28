import { CREATE_USER_ORDER, USER_ORDER_DETAILS } from "../types";

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
