import React, {useContext} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {Context} from './Context'

let data = require("./data.json")

export default function CardDetail() {
    let {productId} = useParams()
    let navigate = useNavigate()

    const productData = useContext(Context); 
    let cardDetailInfo = data.find((product)=>{
        return product.id == productId
    })
    

  return (
    <div style={{width: "100%", display: "flex", justifyContent: "space-around"}}>
      <img src={cardDetailInfo.image} alt="" style={{width: "50%", borderRadius: 10}} />
      <div style={{display: "flex", flexDirection: "column",justifyContent: "space-around", alignItem: "center", alignContent: "space-between", marginLeft: 20}}>
        <h1 style={{fontWeight: "bold"}}>{cardDetailInfo.name}</h1>
        <p>{cardDetailInfo.description}</p>
        <h4>Price: {cardDetailInfo.price}{productData.valuta}</h4>
        <button style={{width: "30%", height: 40, border: "none", backgroundColor: "#06d6a0", borderRadius: 10}} onClick={()=>navigate('/menu')}>go to menu</button>
      </div>
      
      
    </div>
  )
}
