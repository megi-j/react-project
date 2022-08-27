import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navigation() {
  return (
    <>
    <nav style={{width: "50%"}}>
        <ul style={{display: "flex", width: '100%', justifyContent: "space-around"}}>
            <li>
                <NavLink to="/">Home</NavLink> 
            </li>
            <li>
                <NavLink to="/menu">Menu</NavLink> 
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink> 
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
        </ul>
    </nav>
    
    </>
  )
}
