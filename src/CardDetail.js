import React from 'react'
import { useParams } from 'react-router-dom'

let data = require("./data.json")

export default function CardDetail() {
    let {productId} = useParams()

    let cardDetailInfo = data.find((product)=>{
        return product.id === productId
    })
    console.log(cardDetailInfo)

  return (
    <div>CardDetail</div>
  )
}
