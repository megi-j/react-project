import React from 'react'
import Navigation from './Navigation'
import {Outlet} from 'react-router-dom'
import CartImage from './CartImage'
export default function Header() {
  return (
    <>
    <header style={{width: "100%", display: "flex", backgroundColor:"#3bceac", padding: 30, justifyContent: "space-between", alignItems: "center"}}>
      <Navigation />
      <CartImage />
    </header>
    <Outlet />
    </>
  )
}
