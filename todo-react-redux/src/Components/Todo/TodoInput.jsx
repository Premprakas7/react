import React, { useState } from 'react'

const TodoInput = () => {
    const [text, setText]=useState("")
  return (
    <div>
      <input type={text} onChange={(e)=>setText(e.target.value)} placeholder="Add a task" />
      <button>Add</button>
    </div>
  )
}

export default TodoInput
