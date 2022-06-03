
import './App.css';
import React, { useContext } from 'react';
import { ReduxContext } from './Redux/ReduxProvider';

function App() {
  const[getState]=useContext(ReduxContext)
  return (
    <div className="App">
     Prem
    </div>
  );
}

export default App;
