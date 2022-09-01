import React, {useContext} from 'react'
import { Context } from './Context'

export default function Currency() {
    const productData = useContext(Context); 

  return (
    <div>
        <button style={{border: "none", width: 30, height: 30, borderRadius: 20, backgroundColor: "#f8ffe5",cursor: "pointer"}} onClick={()=>{productData.changeToDollarCurrency(); productData.changeToDollar()}}>$</button>
        <button style={{border: "none", width: 30, height: 30, borderRadius: 20, backgroundColor: "#f8ffe5", cursor: "pointer", marginLeft: 15}} onClick={()=>{productData.changeToLariCurrency(); productData.changeToLari()}}>₾</button>
        
    </div>
  )
}
