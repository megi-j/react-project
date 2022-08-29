import React from 'react'
import Card from './Card'

let data = require("./data.json")

export default function AllCards() {
    console.log(data)
  return (
    <div style={{width: "80%", display: "flex", flexWrap: "wrap", justifyContent:"space-around", paddingBottom: 20}}>
       {data.map((item)=>{
          return <Card key={item.id} image={item.image} name={item.name} price={item.price} id={item.id} />
          })
        }
   </div>
  )
}
