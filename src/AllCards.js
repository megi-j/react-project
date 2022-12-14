import React, { useContext } from 'react'
import Card from './Card'
import { Context } from './Context'

let data = require("./data.json")
//ამ კომპონენტში მიხატავს ყველა ქარდს
export default function AllCards() {
 
  const productData = useContext(Context);
  return (
    <div style={{width: "80%", display: "flex", flexWrap: "wrap", justifyContent:"space-around", paddingBottom: 20}}>
    {productData.productInfo.map((item)=>{
        return <Card key={item.id} image={item.image} name={item.name} price={productData.valuta == "$" ? item.price : item.price * 3} id={item.id} changeCardStatus={()=>{productData.changeCardInfo(item.id)}} cardStatus={item.status} />  
        })
    }    
   </div>
  )     
}
