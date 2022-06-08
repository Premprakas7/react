
import { Center } from '@chakra-ui/react'
import React from 'react'

import { Navbar } from './AllRoute'




const Home = () => {
  return (
    <div>
        <Navbar/>
        <Center fontSize='30px' color='#003049' fontStyle='italic'>Welcome to home page</Center>
    </div>
  )
}

export default Home
