import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { AppContextProvider } from './AppContext/AppContextProvider'
import Github from './Components/Github'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
     <h2>Prem</h2>
     <Github/>
    </div>
  )
}

export default App
