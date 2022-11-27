import { CREATE_USER_ORDER } from "../types";

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
