import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './Components/Home'
import Products from './Components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
      <Products/>
      
    </div>
  )
}

export default App
