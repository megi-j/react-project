import React from 'react'
import { useNavigate } from 'react-router-dom'
//ეს კომპონენტი მიხატავს 1 ცალ ქარდს, რომლის მონაცემებიც პროპსად აქვს მშობლისგან გადმოწოდებული
export default function Card(props) {
    let navigate = useNavigate()
  return (
    <div style={{width: 250, height: 300, backgroundColor: "#fb836b", marginTop: 30, borderRadius: 20, display:"flex", flexDirection: "column", justifyContent: "space-between"}}>
        <img style={{width: "100%", height:200, borderTopLeftRadius: 20,borderTopRightRadius: 20}} src={props.image} alt="" />
        <h1 style={{textAlign: "center"}}>{props.name}</h1>
        <div style={{display:"flex", justifyContent: "space-around"}}>
            <p>Price: {props.price}</p>
            <button onClick={()=>{navigate(`/${props.id}`)}}>detail</button>
        </div>
    </div>
  )
}
