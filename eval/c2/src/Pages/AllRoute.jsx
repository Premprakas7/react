import React from 'react'
import {Routes , Route} from "react-router-dom"
import Dasboard from './Dasboard'
import Home from './Home'
import RegisterPageOne from './RegisterPageOne'
import RegisterPageTwo from './RegisterPageTwo'

const AllRoute = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/register/one' element={<RegisterPageOne/>}/>
            <Route path='/register/two' element={<RegisterPageTwo/>}/>
            <Route path='/dashboard' element={<Dasboard/>}/>
        </Routes>
      
    </div>
  )
}

export default AllRoute
