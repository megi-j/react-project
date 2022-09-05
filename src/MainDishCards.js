import React, {useContext} from 'react'
import Card from './Card'
import { Context } from './Context'

let data = require("./data.json")
export default function MainDishCards() {
  const productData = useContext(Context);
    let mainDish = productData.productInfo.filter((item)=>{
        return item.category == "Main Dish"
      })

      
  return (
    <div style={{width: "80%", display: "flex", flexWrap: "wrap", justifyContent:"space-around", paddingBottom: 20}}>
    {mainDish.map((item)=>{
       return <Card key={item.id} image={item.image} name={item.name} price={productData.valuta == "$" ? item.price : item.price * 3} id={item.id} changeCardStatus={()=>{productData.changeCardInfo(item.id)}} cardStatus={item.status} />
       })
     }
</div>
  )
}
