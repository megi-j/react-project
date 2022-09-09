import React, { useState } from 'react'
import MainDishCards from './MainDishCards'
import SideDishCards from './SideDishCards'
import DessertCards from './DessertCards'
import DrinksCards from './DrinksCards'
import AllCards from './AllCards'
import SortCardLowToHigh from './SortCardLowToHigh'
import SortCardHighToLow from './SortCardHighToLow'
import SortCardLowToHighMainDish from './SortCardLowToHighMainDish'
import SortCardHighToLowMainDish from './SortCardHighToLowMainDish'
import SortCardLowToHighDrinks from './SortCardLowToHighDrinks'
import SortCardHighToLowDrinks from './SortCardHighToLowDrinks'
import SortCardLowToHighDessert from './SortCardLowToHighDessert'
import SortCardHighToLowDessert from './SortCardHighToLowDessert'
import SortCardLowToHighSideDish from './SortCardLowToHighSideDish'
import SortCardHighToLowSideDish from './SortCardHighToLowSideDish'
import SortCardLowToHighAll from './SortCardLowToHighAll'
import SortCardHighToLowAll from './SortCardHighToLowAll'
//ეს კომპონენტი მიბრუნებს სელექთს რომლის ველიუ იცვლება იმის მიხედვით თუ რომელი აირჩია იუზერმა და ასევე მიბრუნებს
//ფუნქციას რომელიც იმის მიხედვით არენდერებს კომპონენტს თუ რომელი ოფშენი აირჩია იუზერმა
export default function Menu() {
  const[value, setValue] = useState("all")
  const[value2, setValue2] = useState("sortByPrice")

//  function randerCards(){
//     if(value == "Main Dish"){
//       return <MainDishCards />
//      }else if(value == "Drinks"){
//       return <DrinksCards />
//      }else if(value == "Dessert"){
//       return <DessertCards />
//      }else if(value == "Side Dish"){
//       return <SideDishCards />
//      }else if(value == "all"){
//       return <AllCards />
//      }
   
//   }
  
 
function sortedCards(){  
  if(value2 == "lowToHigh" && value == "Main Dish"){ 
    return <SortCardLowToHighMainDish /> 
  }else if(value2 == "highToLow" && value == "Main Dish"){
    return <SortCardHighToLowMainDish />
  }else if(value2 == "lowToHigh" && value == "Drinks"){
    return <SortCardLowToHighDrinks />
  }else if(value2 == "highToLow" && value == "Drinks"){
    return <SortCardHighToLowDrinks />
  }else if(value2 == "lowToHigh" && value == "Dessert"){
    return <SortCardLowToHighDessert />
  }else if(value2 == "highToLow" && value == "Dessert"){
    return <SortCardHighToLowDessert />
  }else if(value2 == "lowToHigh" && value == "Side Dish"){
    return <SortCardLowToHighSideDish />
  }else if(value2 == "highToLow" && value == "Side Dish"){
    return <SortCardHighToLowSideDish />
  }else if(value2 == "lowToHigh" && value == "all"){
    return <SortCardLowToHighAll />
  }else if(value2 == "highToLow" && value == "all"){
    return <SortCardHighToLowAll />
  }else if(value == "Main Dish" && value2 == "sortByPrice"){
    return <MainDishCards />
  }else if(value == "Drinks" && value2 == "sortByPrice"){
    return <DrinksCards />
  }else if(value == "Dessert" && value2 == "sortByPrice"){
    return <DessertCards />
  }else if(value == "Side Dish" && value2 == "sortByPrice"){
    return <SideDishCards />
  }else if(value == "all" && value2 == "sortByPrice"){
    return <AllCards />
  }
    
 }
  return ( 
    <section style={{width: "100%", display: "flex", justifyContent: "center", alignContent:"center", flexWrap: "wrap", flexDirection: "column", alignItems: "center", backgroundColor: "#f8ffe5"}}>
      <div style={{width: "76%", display: "flex", justifyContent: "space-between"}}>
        <select name="" id="" style={{width: 150, height: 30, border: "none", marginTop: 20, backgroundColor: "#ffd23f", borderRadius: 10}} value={value} onChange={(e)=>setValue(e.target.value)}>
          <option value="all">all</option>
          <option value="Main Dish">Main Dish</option>
          <option value="Side Dish">Side Dish</option>
          <option value="Dessert">Dessert</option>
          <option value="Drinks">Drinks</option>
        </select>
        <select name="" id="" style={{width: 150, height: 30, border: "none", marginTop: 20, backgroundColor: "#ffd23f", borderRadius: 10}} value={value2} onChange={(e)=>setValue2(e.target.value)}>
          <option value="sortByPrice">sort by price</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>  
      {sortedCards()}
    </section>
  )    
}
