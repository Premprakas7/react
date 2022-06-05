import React from 'react'
import { useSelector } from "react-redux"

const TodoList = () => {
    const todos=useSelector(state=>state.todos)
    console.log(todos)
  return (
    <div>
      <h3>Todos</h3>
      {todos.map((item)=><div key={item.id}>{item.title}</div>)}
    </div>
  )
}

export default TodoList
