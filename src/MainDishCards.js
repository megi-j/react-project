import React from 'react'
import Card from './Card'
import {useState} from 'react'
let data = require("./data.json")
export default function MainDishCards() {
  const[status, setStatus] = useState("Add to cart")

    let mainDish = data.filter((item)=>{
        return item.category == "Main Dish"
      })
      console.log(mainDish)

      function changeStatus(cardId){
        let addedStatusCards = mainDish.find((elem)=>{  
             return elem.id == cardId
                
        })  
        addedStatusCards.status = "Added" 
        console.log(addedStatusCards.status)
      }
  return (
    <div style={{width: "80%", display: "flex", flexWrap: "wrap", justifyContent:"space-around", paddingBottom: 20}}>
    {mainDish.map((item)=>{
       return <Card key={item.id} image={item.image} name={item.name} price={item.price} id={item.id} status={status} statusChange={()=>changeStatus(item.id)} />
       })
     }
</div>
  )
}
