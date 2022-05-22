import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Github.css"

const GithubUserRepo=(q = "react" )=>{
 return (axios("https://api.github.com/search/repositories",{
 method:"GET",  
 params:{q:q}})

)}

export const Github = () => {
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    const [query,setQuery]=useState(true);
    const [data, setData]=useState([]);

useEffect(()=>{GithubUserRepo(query)
.then((res)=>
{ setLoading(false)
  setData(res.data)})
.catch((err)=>{setError(true)})
})
const handleClick=(query)=>setQuery(query)
console.log(data)


  return (
    <div>
      <h2>Github Users</h2>
      {loading && <div>...loading</div>}
      <SearchBox handleClick={handleClick}/>
      {data?.items?.map((item)=><GithubCard key={item.id} {...item}/>)}
    </div>
  )
}

const SearchBox=({handleClick})=>{
  const [text, setText]=useState("");
  return(
    <div>
      <input type="text" onChange={e=>setText(e.target.value)} />
    <button onClick={handleClick}>SEARCH</button>
    </div>
    
  )
}



const GithubCard=({description,full_name})=>{
  return(
    <div className='details'>
  <div>description:{description}</div>
   <div>Name:{full_name}</div>

    </div>
    
  )
}