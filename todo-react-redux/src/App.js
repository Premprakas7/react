
import { useEffect } from 'react';
import './App.css';
import TodoDisplay from './Components/Todo/TodoDisplay';
import axios from "axios"


function App() {
  useEffect(()=>{
    axios({
      url:"",
      method:"GET"
    })
  })
  return (
    <div className="App">
    Prem
    <TodoDisplay/>
    </div>
  );
}

export default App;
