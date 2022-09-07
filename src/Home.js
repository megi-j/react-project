import React from 'react'
import Slider from './Slider.js'
import Cards from './Cards.js'

export default function Home() {
  return (
    <>
    <section style={{width: '100%', display: "flex", justifyContent: "center", flexDirection: "column",     alignContent:"center", alignItems: "center",backgroundColor: "#f8ffe5"}}>
      <Slider />
    </section>
      <Cards />
    </>
    
    
  )
}
