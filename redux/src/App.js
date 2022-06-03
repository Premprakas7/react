
import './App.css';
import React  from 'react';
import {useSelector,useDispatch} from "react-redux"
import { incrementCountAction } from './Redux/action';

function App() {
  const count=useSelector((state)=>state.count);
  const dispatch=useDispatch();
  return (
    <div className="App">
     <h1>Count :{count}</h1>
     <button onClick={()=>dispatch(incrementCountAction(1))}>ADD</button>
     <button onClick={()=>dispatch(incrementCountAction(-1))}>REDUCE</button>
    </div>
  );
}

export default App;
