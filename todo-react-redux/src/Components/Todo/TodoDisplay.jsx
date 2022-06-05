import React, { useEffect } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import axios from "axios"
import { getTodoFailure, getTodoRequest, getTodoSuccess } from '../action'
import { useDispatch } from 'react-redux'


const TodoDisplay = () => {
  const dispatch= useDispatch();
  useEffect(()=>{
    const todoRequestAction=getTodoRequest();
    dispatch(todoRequestAction)
    axios({
      url:"http://localhost:8080/todos",
      method:"GET"
    }).then((res)=>{
      const todoSuccessAction=getTodoSuccess(res.data);
      dispatch(todoSuccessAction)
    }).catch((err)=>{
      const todoErrorAction=getTodoFailure();
      dispatch(todoErrorAction)
    })
  },[])
  return (
    <div>
        <TodoInput/>
        <br />
        <TodoList/>
      
    </div>
  )
}

export default TodoDisplay
