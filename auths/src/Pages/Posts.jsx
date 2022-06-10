import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostItem } from "../Components/PostItem";
import { getPost } from "../Redux/app/action";
import { Navigate } from "react-router-dom";

export const Posts = () => {
  const token = useSelector((state) => state.auth.token);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  React.useEffect(() => {
    dispatch(getPost());
  }, []);
  return (
    <div>
      Token: {token}
      <PostItem />
    </div>
  );
};
