import React, {useContext} from 'react'
import Card from './Card'
import { Context } from './Context'


export default function SortCardHighToLowSideDish() {
    const productData = useContext(Context);
    let sideDish = productData.productInfo.filter((item)=>{
        return item.category == "Side Dish"
      })
      sideDish.sort((a, b)=>{
        if(a.price > b.price){
            return -1
        }else if(a.price < b.price){
            return 1
        }else{
            return 0
        }
       })
  return (
    <div style={{width: "80%", display: "flex", flexWrap: "wrap", justifyContent:"space-around", paddingBottom: 20}}>
    {sideDish.map((item)=>{
       return <Card key={item.id} image={item.image} name={item.name} price={productData.valuta == "$" ? item.price : item.price * 3} id={item.id} changeCardStatus={()=>{productData.changeCardInfo(item.id)}} cardStatus={item.status} />
       })
     }
    </div>
  
  )
}
