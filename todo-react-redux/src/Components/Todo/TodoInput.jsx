import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos, getTodos } from '../action';

const TodoInput = () => {
    const [text, setText]=useState("")
const dispatch=useDispatch();

const handleTodos=()=>{
  addTodos({
    title:text,
    dispatch
  }).then(()=>{
    getTodos(dispatch)
  })
}

  return (
    <div>
      <input type={text} onChange={(e)=>setText(e.target.value)} placeholder="Add a task" />
      <button onClick={handleTodos}>Add</button>
    </div>
  )
}

export default TodoInput
