import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { store } from "./store"
import "./dashboard.css"



export const Dashboard = ()=>{

    let [search , setsearch ] = useState("")

 
    let [page , setpage] = useState(6)
    let [alldata , setdata ] = useState([])

    useEffect(()=>{
         getdata()
    },[page])

let handlepage = (value) =>{
  
    setpage(page + value)
    console.log(page)
}    
    let getdata = async()=>{
        try {
            let res = await fetch(`https://api.github.com/users?page=${page}&per_page=5;rel="next"`
              
       )
                
            let data = await res.json()
       
            setdata(data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        
        <div>
         <input type="text" name="" id=""onChange={(e)=>{
             setsearch(e.target.value)
         }} value={search}/>
         </div>
        <div className="grid">
           {alldata.filter(alldata=>alldata.login.includes(search)).map(e =><div><img src={e.avatar_url}></img><h4>{e.login}</h4></div>)}
           
        </div>
        <button onClick={()=>{handlepage(-1)}} >Prev. page</button>
        <button onClick={()=>{handlepage(1)}} >Next page</button>
         
       

        </>
    )
}