import axios from "axios";

export const GET_POST_REQUEST = "GET_POST_REQUEST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAILURE = "GET_POST_FAILURE";

export const getPostRequest = () => {
  return {
    type: GET_POST_REQUEST,
  };
};
export const getPostSuccess = (payload) => {
  return {
    type: GET_POST_SUCCESS,
    payload,
  };
};
export const getPostFailure = (error) => {
  return {
    type: GET_POST_FAILURE,
    payload: error,
  };
};

export const getPost = (payload) => (dispatch) => {
  dispatch(getPostRequest());
  return axios
    .get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _page: 1,
        _limit: 10,
      },
    })
    .then((response) => {
      //console.log("task data", response);
      dispatch(getPostSuccess(response.data));
      //  dispatch(getPost());
    })
    .catch((error) => {
      dispatch(getPostFailure());
    });
};
