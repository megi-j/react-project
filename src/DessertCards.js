import React from 'react'
import Card from './Card'
import {useState} from 'react'
let data = require("./data.json")
export default function DessertCards() {
  const[status, setStatus] = useState("Add to cart")

 
    let desserts = data.filter((item)=>{
        return item.category == "Dessert"
      })
      
      function changeStatus(cardId){
        let addedStatusCards = desserts.find((elem)=>{  
             return elem.id == cardId
                
        })  
        addedStatusCards.status = "Added" 
        console.log(addedStatusCards.status)
      }
  return (
    <div style={{width: "80%", display: "flex", flexWrap: "wrap", justifyContent:"space-around", paddingBottom: 20}}>
    {desserts.map((item)=>{
       return <Card key={item.id} image={item.image} name={item.name} price={item.price} id={item.id} status={status} statusChange={()=>changeStatus(item.id)} />
       })
     }
</div>
  )
}
