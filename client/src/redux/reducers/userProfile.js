import { GET_USER_PROFILE, LOGOUT_USER, UPDATE_USER_PROFILE } from "../types";

export const userProfile = (state = { user: {}, loading: true }, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        loading: false,
      };
    default:
      return state;
  }
};
