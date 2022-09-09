import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGOUT_USER,
} from "../types";

const { token, isAdmin } = JSON.parse(localStorage.getItem("eshop-auth"));

const initialState = {
  token: token ? token : null,
  isAuthenticated: token ? true : false,
  isAdmin: isAdmin ? isAdmin : false,
  loading: token ? false : true,
};

export const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        isAdmin: payload.isAdmin,
        loading: false,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_USER:
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
