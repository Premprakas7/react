import { GET_POST_SUCCESS, GET_POST_REQUEST, GET_POST_FAILURE } from "./action";

const initState = {
  posts: [],
  isLoading: false,
  isError: false,
};

export const taskReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_POST_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_POST_SUCCESS: {
      return {
        ...state,
        posts: payload,
        isLoading: false,
      };
    }
    case GET_POST_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
