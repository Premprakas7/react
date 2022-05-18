
import React, { useState } from 'react'
import "./contact.css"

export const ContactCard = (props) => {

  const [isActive , setIsActive]=useState(false);
    const{name,email,id,phone, pic}=props
  return (
    <div>
    <div onClick={()=>setIsActive(!isActive)} className='container'>
      <div>{name}</div>
      <div>{email}</div>
      <div><img className='icon' src={pic} alt="icon" /></div>
      {isActive &&  <div>{phone}</div>}      
    </div>
    </div>
  )
}

