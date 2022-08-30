import React from 'react'
import Card from './Card'
import {useState} from 'react'

let data = require("./data.json")
export default function SideDishCards() {
  const[status, setStatus] = useState("Add to cart")

    let sideDish = data.filter((item)=>{
        return item.category == "Side Dish"
      })
      console.log(sideDish)

      function changeStatus(cardId){
        let addedStatusCards = sideDish.find((elem)=>{  
             return elem.id == cardId
                
        })  
        addedStatusCards.status = "Added" 
        console.log(addedStatusCards.status)
      }
  return (
    <div style={{width: "80%", display: "flex", flexWrap: "wrap", justifyContent:"space-around", paddingBottom: 20}}>
    {sideDish.map((item)=>{
       return <Card key={item.id} image={item.image} name={item.name} price={item.price} id={item.id} status={status} statusChange={()=>changeStatus(item.id)} />
       })
     }
</div>
  )
}
