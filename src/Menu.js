import React, { useState } from 'react'
import Card from './Card'
import MainDishCards from './MainDishCards'
import SideDishCards from './SideDishCards'
import DessertCards from './DessertCards'
import DrinksCards from './DrinksCards'
import AllCards from './AllCards'

//ეს კომპონენტი მიბრუნებს სელექთს რომლის ველიუ იცვლება იმის მიხედვით თუ რომელი აირჩია იუზერმა და ასევე მიბრუნებს
//ფუნქციას რომელიც იმის მიხედვით არენდერებს კომპონენტს თუ რომელი ოფშენი აირჩია იუზერმა
export default function Menu() {
  const[value, setValue] = useState("all")
 
 function randerCards(){
  if(value == "Main Dish"){
    return <MainDishCards />
   }else if(value == "Drinks"){
    return <DrinksCards />
   }else if(value == "Dessert"){
    return <DessertCards />
   }else if(value == "Side Dish"){
    return <SideDishCards />
   }else if(value == "all"){
    return <AllCards />
   }
 }
  return ( 
    <section style={{width: "100%", display: "flex", justifyContent: "center", alignContent:"center", flexWrap: "wrap", flexDirection: "column", alignItems: "center", backgroundColor: "#f8ffe5"}}>
      <select name="" id="" style={{width: 150, height: 30, border: "none", marginTop: 20, backgroundColor: "#ffd23f", borderRadius: 10}} value={value} onChange={(e)=>setValue(e.target.value)}>
        <option value="all">all</option>
        <option value="Main Dish">Main Dish</option>
        <option value="Side Dish">Side Dish</option>
        <option value="Dessert">Dessert</option>
        <option value="Drinks">Drinks</option>
      </select>
      {randerCards()}
    </section>
  )
    
}
