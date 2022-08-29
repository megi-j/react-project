import React from 'react'
import { useParams } from 'react-router-dom'

let data = require("./data.json")

export default function CardDetail() {
    let {productId} = useParams()

    let cardDetailInfo = data.find((product)=>{
        return product.id == productId
    })
    

  return (
    <div>
      <img src={cardDetailInfo.image} alt="" style={{width: 200, height: 200}} />
      <h1>{cardDetailInfo.name}</h1>
      <p>{cardDetailInfo.description}</p>
      
    </div>
  )
}
