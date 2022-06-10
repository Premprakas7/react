import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Posts } from "./Posts";

export const AllRoutes = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/posts">Posts</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
};
