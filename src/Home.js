import React from 'react'
import Slider from './Slider.js'
import Cards from './Cards.js'
export default function Home() {
  return (
    <>
    <section style={{width: '100%', backgroundColor: "#fad26d", display: "flex", justifyContent: "center", flexDirection: "column", alignContent:"center", alignItems: "center"}}>
       <h1>Home</h1>
       <Slider />
    </section>
       <Cards />
    
    </>
    
    
  )
}
