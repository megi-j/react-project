import React, {useContext} from 'react'
import { Context } from './Context';


//აქ ვხატავ, პროპსების და კონტექსტის დახმარებით, იმ ქარდებს რომლების კალათაში მოთავსდება
export default function Card2(props) {
    const productData = useContext(Context); 
  return (
    <div style={{width: 300, height: 350, backgroundColor: "#ef476f", marginTop: 30, borderRadius: 20,    display:"flex", flexDirection: "column", justifyContent: "space-between", position:"relative"}}>
        <img style={{width: "100%", height:200, borderTopLeftRadius: 20,borderTopRightRadius: 20}} src={props.image} alt="product image" />
        <button className={`btn-${props.id}`} onClick={()=>{props.changeCardStatus()}}
          style={{position: "absolute", top: 10, right: 5, border: "none", backgroundColor: "#ffc43d", borderRadius: 20, height: 30, cursor: "pointer"}}>{props.cardStatus}
        </button>
        <h1 style={{textAlign: "center", fontWeight: "bold"}}>{props.name}</h1>
        <div style={{width: "100%", display: "flex", justifyContent: "space-around"}}>
            <p>Price:{props.price}{productData.valuta} </p>
            <p>Total Price: {props.totalPrice}{productData.valuta} </p>
        </div>
        <div style={{width: "100%", display: "flex", justifyContent: "space-around",marginBottom: 10}}>
            <button style={{border: "none", borderRadius: 10, backgroundColor: "#f8ffe5", width: 30, height: 30, cursor: "pointer", fontWeight: "bold"}} onClick={()=>{props.raodenobisGazrda()}}>+</button>
            <p className={`quant-${props.id}`}>quantity: {props.raodenoba}</p>
            <button className={`minus-${props.id}`} style={{border: "none", borderRadius: 10, backgroundColor: "#f8ffe5", width: 30, height: 30, cursor: "pointer", fontWeight: "bold"}} onClick={()=>props.raodenobisShemcireba()}>-</button>
        </div>
    </div>
  )
}
