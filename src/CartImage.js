import React from 'react'
import cartImage from './images/pre-order.png'
export default function CartImage() {
  return (
    <div style={{width: 80, height: 80, position: "relative"}}>
     <img src={cartImage} alt="cart image" style={{width: "70%"}} />
    <div style={{width: 30, height: 30, position:"absolute", backgroundColor: "black",color:"white", borderRadius: "50%", top: 0, right: 0, display: "flex", justifyContent: "center", alignItems: "center"}}>0</div>
    </div>
  )
}
