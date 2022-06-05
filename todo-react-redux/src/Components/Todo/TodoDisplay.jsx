import React, { useEffect } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import {  getTodos } from '../action'
import { useDispatch } from 'react-redux'


const TodoDisplay = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    getTodos(dispatch);
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
