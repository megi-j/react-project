import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {Context} from './Context'
//ეს კომპონენტი მიხატავს 1 ცალ ქარდს, რომლის მონაცემებიც პროპსად აქვს მშობლისგან გადმოწოდებული
export default function Card(props) {
    let navigate = useNavigate()
    const productData = useContext(Context); 
    
  return (
    <div style={{width: 250, height: 330, backgroundColor: "#ef476f", marginTop: 30, borderRadius: 20, display:"flex", flexDirection: "column", justifyContent: "space-between", position:"relative"}}>
        <img style={{width: "100%", height:200, borderTopLeftRadius: 20,borderTopRightRadius: 20}} src={props.image} alt="product image" />
        <button className={`btn-${props.id}`} onClick={()=>{props.changeCardStatus()}}
           style={{position: "absolute", top: 10, right: 5, border: "none", backgroundColor: "#ffc43d", borderRadius: 20, height: 30, cursor: "pointer"}}>{props.cardStatus}</button>
        <h1 style={{textAlign: "center", fontWeight: "bold"}}>{props.name}</h1>
        <div style={{height: 30, display:"flex", justifyContent: "space-around", marginBottom: 20, alignItems: "center"}}>
            <p>Price: {props.price}{productData.valuta}</p>
            <button style={{height: "100%", width: 60, border: "none", backgroundColor: "#ffc43d", borderRadius: 20, cursor: "pointer"}} onClick={()=>{navigate(`/${props.id}`)}}>detail</button>
        </div>
    </div>
  )
}
