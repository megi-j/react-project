import React from 'react'
import Card from './Card'
let data = require("./data.json")
//ეს ფუნქცია მაძლევს მასივს რომელშიც არის რანდომად აღებული იმდენ ქარდი რამდენიც მე გადავეცი
function getRandomCards(arr, num){
    const randomCards = [...arr].sort(()=>0.5-Math.random())
    return randomCards.slice(0, num)
}

let arrayOfRandomCards = getRandomCards(data, 4)
//ეს კომპონენტი მიხატავს ქარდებს იმდენს რამდენიც წინა ფუნქციაში ვუთხარი,რადგან იმ მასივზე ჩამოივლის
export default function Cards() {
    // let random = data[Math.floor(Math.random() * data.length)]
  return (
    <section style={{width: "100%", backgroundColor: "#7f6698", display: "flex", justifyContent: "center", alignContent:"center", flexWrap: "wrap", flexDirection: "column"}}>
        <h1>The most popular</h1>
        <div style={{width: "80%", display: "flex", flexWrap: "wrap", justifyContent:"space-around", paddingBottom: 20}}>
        {arrayOfRandomCards.map((item,index)=>{
            return(
                <Card key={index} image={item.image} name={item.name} price={item.price} id={item.id} />
            )
        })}
        </div>
    </section>
     
   
  )
}
