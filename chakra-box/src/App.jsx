import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Box, Center, Flex} from "@chakra-ui/react"


function App() {
  const [count, setCount] = useState(0)

  return (<div>
    <Flex >
      <Center h='200px'  flex='1' bg="blue" >NAV</Center>
      <Center h='200px' flex='2' bg="yellow">CONTENT</Center>
      <Center h='200px' flex='1' bg="red">WIDGET</Center>
    </Flex>
    <Flex>
      <Flex><Center w='100%' bg='red'>1</Center></Flex>
      
        <Center>2</Center>
        <Center>3</Center>
      

    </Flex>
 
    </div>
  )
}

export default App
