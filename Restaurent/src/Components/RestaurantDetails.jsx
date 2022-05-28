import React from 'react'
import "./Res.css"

const RestaurantDetails = ({name,paymentMethods,rating,votes,reviews,image}) => {
  return (
    <div className='main'>
      <div className='detail'>
        <p >Name:{name}</p>
        <p>Rating:{rating}</p>
        <p>Votes:{votes}</p>
        <p>Review:{reviews}</p>

      </div>
      <div>
        <img className='logo' src={image} alt="logo" />
      </div>
      

      
    </div>
  )
}

export default RestaurantDetails
