import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./home.css"
import { useParams } from 'react-router-dom';

const Details = () => {
  const [data, setData]=useState([]);
  const [loading, setLoading]=useState(true);
  const params=useParams();
  useEffect(()=>{
    const {id}=params
    axios({
      url:`http://localhost:8080/products/${id}`,
      method:"GET"
    }).then(res=>{
      setData(res.data);
      setLoading(false);
    })
    .catch(err=>{
      setLoading(false);
    })
    
  },[params.id])
  
  return (
    <div>
      {loading && <div>...loading</div> }
      <div className='main' key={data?.id}>{data.title}
      <img className='logo' src={data?.image} alt="logo" />
      </div>
    </div>
  )
}

export default Details


