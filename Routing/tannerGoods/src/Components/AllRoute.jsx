import React from 'react'
import {Routes,Route,Link} from "react-router-dom"
import Home from './Home'

const Navbar=()=>{
    return(
        <nav>
            <Link to='/' ><img src="" alt="logo" /></Link>
            <Link to=''></Link>
        </nav>
    )
}



const AllRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
      
    </div>
  )
}

export default AllRoute
