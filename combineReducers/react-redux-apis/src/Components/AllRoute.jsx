import React from 'react'
import {Routes,Route} from "react-router-dom"
import TodoDisplay from './Todo/TodoDisplay'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<TodoDisplay/>}/>
            
        </Routes>
        
      Prem
    </div>
  )
}

export default AllRoute
