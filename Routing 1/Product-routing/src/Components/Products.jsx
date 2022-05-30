import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./home.css"
import { Link } from 'react-router-dom';

const Products = () => {
  const [data, setData]=useState([]);
  const [loading, setLoading]=useState(true);
  useEffect(()=>{
    axios({
      url:"http://localhost:8080/products",
      method:"GET"
    }).then(res=>{
      setData(res.data);
      setLoading(false);
    })
    .catch(err=>{
      setLoading(false);
    })
    
  },[])
  
  return (
    <div>
      {loading && <div>...loading</div> }
      {data.map((item)=>(
      <div className='main' key={item.id}>{item.title}
      <img className='logo' src={item.image} alt="logo" />
      <Link to={`/products/${item.id}`}>details</Link>
      </div>
      ))}
      Product
    </div>
  )
}

export default Products
