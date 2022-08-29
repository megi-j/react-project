import React from 'react'
import Card from './Card'

let data = require("./data.json")
export default function MainDishCards() {
    let mainDish = data.filter((item)=>{
        return item.category == "Main Dish"
      })
      console.log(mainDish)
  return (
    <div style={{width: "80%", display: "flex", flexWrap: "wrap", justifyContent:"space-around", paddingBottom: 20}}>
    {mainDish.map((item)=>{
       return <Card key={item.id} image={item.image} name={item.name} price={item.price} id={item.id} />
       })
     }
</div>
  )
}
