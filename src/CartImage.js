import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import cartImage from './images/pre-order.png'
import { Context } from './Context';

export default function CartImage() {
  const productData = useContext(Context); 
  return (
    <div style={{width: 80, height: 80, position: "relative"}}>
    <NavLink to='/cart'>
      <img src={cartImage} alt="cart image" style={{width: "70%"}} />
    </NavLink>
    <div style={{width: 30, height: 30, position:"absolute",color:"white", borderRadius: "50%", top: 0, right: 0, display: "flex", justifyContent: "center", alignItems: "center", color: "#f8ffe5"}}>{productData.cartisRicxvi}</div>
    </div>
  )
}
