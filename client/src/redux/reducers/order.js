import {
  CREATE_USER_ORDER,
  GET_ORDER_LIST,
  GET_USER_ORDER_LIST,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
  ORDER_TO_DELIVERED,
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

export const userOrderList = (state = { orderList: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_ORDER_LIST:
      return {
        ...state,
        orderList: payload,
        loading: false,
      };
    default:
      return state;
  }
};

// get all user list (admin)
export const orderList = (state = { allOrderList: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ORDER_LIST:
      return {
        ...state,
        allOrderList: payload,
        loading: false,
      };
    case ORDER_TO_DELIVERED:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
