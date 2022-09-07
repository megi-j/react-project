import React, {useContext} from 'react'
import { Context } from './Context'


//ეს არის ვალუტის აღმნიშვნელი ღილაკი, რომელზე კლიკის დროსაც იცვლება მეორე ვალუტით
export default function Currency() {
    const productData = useContext(Context); 
    
  return (
    <div>
      <button style={{border: "none", width: 30, height: 30, borderRadius: 20, backgroundColor: "#f8ffe5",cursor: "pointer"}} onClick={()=>{productData.valutisCvlileba(); productData.mtlianiFasisCvlileba()}}>{productData.valuta == "$" ? "₾" : "$"}</button>
    </div>
  )
}
