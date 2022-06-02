import React from 'react'
import {Routes,Route,Link} from "react-router-dom"
import Home from './Home'
import "./home.css"

const Navbar=()=>{
    return(
        <nav className='nav'>
            <div>
            <Link to='/' ><img className='pumalogo' src="https://assets.turbologo.com/blog/en/2019/11/19084917/puma-logo-cover-958x575.png" alt="logo" /></Link>
            </div>
            <div>
                <Link to='/newarrival'>New Arrival</Link>
            </div>
            <Link to='/login'>login</Link>
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
