import logo from './logo.svg'
import './App.css'
import React, { useState } from "react";
import { Navbar } from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
    </div>
  )
}

export default App
