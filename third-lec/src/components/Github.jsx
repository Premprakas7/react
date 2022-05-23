import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Github.css"

const GithubUserRepo=(q = "react" ,page=1 )=>{
 return (axios("https://api.github.com/search/repositories",{
 method:"GET",
   
 params:{q:q,
  per_page:5,
 page,
}})

)}

export const Github = () => {
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    const [query,setQuery]=useState("react");
    const [data, setData]=useState([]);
    const [page,setPage]=useState(1);

useEffect(()=>{GithubUserRepo(query,page)
.then((res)=>
{ setLoading(false)
  setData(res.data)})
.catch((err)=>{setError(true)})
},[query,page])
const handleClick=(query)=>setQuery(query)
//const PageChange=page=>setPage(page)
console.log(data)


  return (
    <div>
      <h2>Github Users</h2>
      {loading && <div>...loading</div>}
      <SearchBox handleClick={handleClick}/>
      {data?.items?.map((item)=><GithubCard key={item.id} {...item}/>)}
      <div>
        <button disabled={page===1} onClick={()=>setPage(page-1)}>PREV</button>
        <button onClick={()=>setPage(page+1)}>NEXT</button>
      </div>
    </div>
  )
}

const SearchBox=({handleClick})=>{
  const [text, setText]=useState("");
  return(
    <div>
      <input type="text" onChange={e=>setText(e.target.value)} />
    <button onClick={()=>{handleClick(text)}}>SEARCH</button>
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