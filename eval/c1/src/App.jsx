import { useState,useEffect } from 'react'
import logo from './logo.svg'
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";
import axios from "axios"

const CandidateList=(page=1)=>{
  return (axios("https://json-server-mocker-masai.herokuapp.com/candidates",{
    method:"GET",
    params:{
      _page: page,
      _limit:5
    }
  }))
}

function App() {
  const [data, setData] = useState([]);
  const [Loading,setLoading]=useState(true);
  const [error,setError]=useState(false);
  const [page,setPage]=useState(1);


  useEffect(()=>{CandidateList({page})
    .then((res)=>
    { setLoading(false)
      setData(res.data)})
    .catch((err)=>{setError(true)})
    },[page])

  return (
    <div className="App">
       <div>
        <div id="loading-container">{Loading && <div>...Loading</div>}</div>
        <Button  id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        <Button disabled={page===1} onClick={()=>setPage(page-1)} title="PREV" id="PREV" />
        <Button onClick={()=>setPage(page-1)} id="NEXT" title="NEXT" />
      </div>
      
      {data.map((item) => 
      <CandidateCard key={item.id} {...item}/>)}
     
    </div>
  )
}

export default App
