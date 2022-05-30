import React from 'react'
import Home from './Home'
import Products from './Products'
import {Routes, Route,Link} from "react-router-dom"
import "./home.css"
import Details from './Details'

const Navbar=()=>{
    return(<div className='nav'>
         <Link to="/">Home</Link>
      <Link to="/products">Product</Link>
    </div>)
}

const AllRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}>
        
        </Route>
        <Route path='/products/:id' element={<Details/>}/>
      </Routes>
      
    </div>
  )
}

export default AllRoute
