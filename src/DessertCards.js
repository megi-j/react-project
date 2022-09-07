import React, { useContext } from 'react'
import Card from './Card'
import { Context } from './Context'


//ეს კომპონენტი ფილტრავს ქარდებს და მხოლოდ დესერტები გამოაქვს 
export default function DessertCards() {
  const productData = useContext(Context);
    let desserts = productData.productInfo.filter((item)=>{
      return item.category == "Dessert"
      })  
  return (
    <div style={{width: "80%", display: "flex", flexWrap: "wrap", justifyContent:"space-around", paddingBottom: 20}}>
      {desserts.map((item)=>{
        return <Card key={item.id} image={item.image} name={item.name} price={productData.valuta == "$" ? item.price : item.price * 3} id={item.id} changeCardStatus={()=>{productData.changeCardInfo(item.id)}} cardStatus={item.status} />
        })
      }
    </div>
  )
}
