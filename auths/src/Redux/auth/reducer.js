import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from "./action";

const initState = {
  isAuth: false,
  token: null,
  isError: false,
  isLoading: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        token: payload,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: null,
        isError: true,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
