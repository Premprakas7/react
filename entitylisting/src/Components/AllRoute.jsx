import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import { Link } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'

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
        </Routes>
      
    </div>
  )
}

export default AllRoute
