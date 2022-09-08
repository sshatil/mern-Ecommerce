import { REGISTER_FAIL, REGISTER_SUCCESS } from "../types";

const initialState = {
  token: null,
  isAuthenticated: null,
  isAdmin: false,
  loading: true,
};

export const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        isAdmin: payload.isAdmin,
        loading: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        isAdmin: false,
        loading: false,
      };
    default:
      return state;
  }
};
