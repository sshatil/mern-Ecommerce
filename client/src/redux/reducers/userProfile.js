import { GET_USER_PROFILE } from "../types";

export const userProfile = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
