import React, { useContext } from 'react'
import Card from './Card'
import { Context } from './Context'

let data = require("./data.json")

export default function AllCards() {
 
   const productData = useContext(Context);
//  console.log(productData)
  return (
    <div style={{width: "80%", display: "flex", flexWrap: "wrap", justifyContent:"space-around", paddingBottom: 20}}>
    {data.map((item)=>{
          return <Card key={item.id} image={item.image} name={item.name} price={item.price} id={item.id} changeCardStatus={()=>{productData.changeCardInfo(item.id)}} cardStatus={item.status} />  
        })
    }
          
      
   </div>
  )
     
}
