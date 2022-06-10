import React from "react";
import { useSelector } from "react-redux";

export const PostItem = () => {
  const tasks = useSelector((state) => state.app.posts);
  return (
    <div className="post-item">
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.body}</p>
        </div>
      ))}
      <div>
        <button className="btn">Prev</button>
        <button className="btn">Next</button>
      </div>
    </div>
  );
};
