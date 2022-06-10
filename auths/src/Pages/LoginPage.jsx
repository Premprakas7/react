import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Login } from "../Components/Login";
import { Navigate } from "react-router-dom";
import { loginUser } from "../Redux/auth/action";

export function LoginPage() {
  const dispatch = useDispatch();
  const { isAuth, isLoading, token, isError } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
  const handleLogin = ({ email, password }) => {
    dispatch(loginUser({ email, password }));
  };
  if (isAuth) {
    return <Navigate to="/posts" />;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Login handleLogin={handleLogin} />
      {isError && <div>Login failed</div>}
    </div>
  );
}
