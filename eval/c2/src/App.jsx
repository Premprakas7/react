import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AllRoute from './Pages/AllRoute'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    Progress
    <AllRoute/>
    </div>
  )
}

export default App
