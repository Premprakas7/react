import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginPage } from "./LoginPage";

export const Home = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  //  if (!isAuth) {
  //    return <Navigate to="/" />;
  //  }

  //  React.useEffect(()=>{
  //    dispatch()
  //  },[]);
  return (
    <div>
      <LoginPage />
    </div>
  );
};
