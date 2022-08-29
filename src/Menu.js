import React, { useState } from 'react'
import Card from './Card'
import MainDishCards from './MainDishCards'
import SideDishCards from './SideDishCards'
import DessertCards from './DessertCards'
import DrinksCards from './DrinksCards'
import AllCards from './AllCards'
let data = require("./data.json")

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
    
    <section style={{width: "100%", backgroundColor: "#7f6698", display: "flex", justifyContent: "center", alignContent:"center", flexWrap: "wrap", flexDirection: "column", alignItems: "center"}}>
      <select name="" id="" style={{width: 100}} value={value} onChange={(e)=>setValue(e.target.value)}>
        <option value="all">all</option>
        <option value="Main Dish">Main Dish</option>
        <option value="Side Dish">Side Dish</option>
        <option value="Dessert">Dessert</option>
        <option value="Drinks">Drinks</option>
      </select>
      {randerCards()}
        {/* {data.map((item)=>{
          return <Card key={item.id} image={item.image} name={item.name} price={item.price} id={item.id} />
        })
          
      }  */}
       
      
    </section>
  )
    
}
