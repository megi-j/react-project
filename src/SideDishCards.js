import React from 'react'
import Card from './Card'

let data = require("./data.json")
export default function SideDishCards() {
    let sideDish = data.filter((item)=>{
        return item.category == "Side Dish"
      })
      console.log(sideDish)
  return (
    <div style={{width: "80%", display: "flex", flexWrap: "wrap", justifyContent:"space-around", paddingBottom: 20}}>
    {sideDish.map((item)=>{
       return <Card key={item.id} image={item.image} name={item.name} price={item.price} id={item.id} />
       })
     }
</div>
  )
}
