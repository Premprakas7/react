import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import { Link } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import SingleProduct from './SingleProduct'

export const Navbar=()=>{
    return(
        <div>
        <Flex bg='maroon'>
        <Box p='4' fontSize='20px' color='white'>
            <Link to='/'>Home</Link>
        </Box>
        <Box p='4'  fontSize='20px' color='white'>
            <Link to='/products'>Product</Link>
        </Box>
        <Box p='4'  fontSize='20px' color='white'>
            <Link to='/carts'>Carts</Link>
        </Box>
        <Box p='4'  fontSize='20px' color='white'>
            <Link to='/products'>Login</Link>
        </Box>
        </Flex>
        </div>
    )
}

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/products/:id' element={<SingleProduct/>}/>
        </Routes>
      
    </div>
  )
}

export default AllRoute
