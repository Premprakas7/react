import { Box, color,GridItem,Grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Navbar } from './AllRoute'
import axios from 'axios'
import "./product.css"
import { Select } from '@chakra-ui/react'


const Product = () => {
const [loading, setLoading]=useState(true);
const [data, setData]=useState([]);

    useEffect(()=>{
        axios({
          url:'http://localhost:8080/product',
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
    <Navbar/>
  <div>
  <Select  placeholder='Price Sort'>
  <option value='High'>High to Low</option>
  <option value='Low'>Low to High</option>
</Select>
<Box>Filter 
  <button>Mens</button>
  <button>Womens</button>
</Box>

    
  </div>
    {loading && <div>...loading</div>}
              
                {data.map((item)=>(
                <div className='container' key={item.id}>
                <img className='logo' src={item.image} alt="logo" />
                <div>
                <p className='name'>Title:{item.title}</p>
                  <p className='name'>Price:{item.price}</p>
                  <p className='name'>Cat:{item.category}</p>
                </div>
                </div>
                ))}
            


    </div>
  )
}

export default Product
