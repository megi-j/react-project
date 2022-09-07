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
  }) //აქ ვპოულობ რომელი ქარდის detail ღილაკზეც მოხდა კლიკი
  return (
    //აქ ვხატავ დეტალურ ინფოს იმ ქარდისას, რომლის detail ღილაკზეც მოხდა კლიკი
    <div style={{width: "100%", height: "70vh", display: "flex", justifyContent: "space-around"}}>
      <img src={cardDetailInfo.image} alt="" style={{width: "50%", borderRadius: 10}} />
      <div style={{display: "flex", flexDirection: "column",justifyContent: "space-around", alignItem: "center", alignContent: "space-between", paddingLeft: 20, backgroundColor: "#f8ffe5"}}>
        <h1 style={{fontWeight: "bold"}}>{cardDetailInfo.name}</h1>
        <p>{cardDetailInfo.description}</p>
        <h4>Price: {productData.valuta == "$" ? cardDetailInfo.price : cardDetailInfo.price * 3}{productData.valuta}</h4>
        <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
          <button style={{width: "30%", height: 40, border: "none", backgroundColor: "#06d6a0", borderRadius: 10, cursor: "pointer"}} onClick={()=>navigate('/menu')}>go to menu</button>
          <button className={`btn-${cardDetailInfo.id}`} onClick={()=>{productData.changeCardInfo(cardDetailInfo.id)}} style={{width: "30%", height: 40, border: "none", backgroundColor: "#06d6a0", borderRadius: 10, cursor: "pointer"}}>{cardDetailInfo.status}</button>
        </div>
        
      </div>  
    </div>
  )
}
