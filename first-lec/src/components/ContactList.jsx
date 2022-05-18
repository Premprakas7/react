
import React, { useState } from 'react'
import { ContactCard } from './ContactCard'
import "./contact.css"

const initData=[
    {
        id:1,
        name:"Annethe Murphy",
        email:"sara.cruz@gmail.com",
        phone:"0987654321",
        pic:"https://images.pexels.com/photos/1107495/pexels-photo-1107495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:2,
        name:"Theresa Watson",
        email:"teresa@gmail.com",
        phone:"0987165341",
        pic:"https://images.pexels.com/photos/2282000/pexels-photo-2282000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

    },
    {
        id:3,
        name:"Cody Howard",
        email:"Cody@gmail.com",
        phone:"7165341098",
        pic:"https://images.pexels.com/photos/1436971/pexels-photo-1436971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
        id:4,
        name:"Max lane",
        email:"Maxi@gmail.com",
        phone:"12334567890",
        pic:"https://images.pexels.com/photos/4318392/pexels-photo-4318392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

    }
]

export const ContactList = () => {
    const [data, setData]=useState(initData)
  return (
    <div >
     { data.map(items=>
      <ContactCard 
      key={items.id}
      name={items.name}
       email={items.email} 
    phone={items.phone}
    pic={items.pic}
    />)
}
    </div>
  )
}

