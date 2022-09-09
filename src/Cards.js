import React, {useContext} from 'react'
import Card from './Card'
import { Context } from './Context'

let data = require("./data.json")
//ეს ფუნქცია მაძლევს მასივს რომელშიც არის რანდომად აღებული იმდენ ქარდი რამდენიც მე გადავეცი
function getRandomCards(arr, num){
    const randomCards = [...arr].sort(()=>0.5-Math.random())
    return randomCards.slice(0, num)
}

let arrayOfRandomCards = getRandomCards(data, 4)
//ეს კომპონენტი მიხატავს home page-ზე ქარდებს იმდენს, რამდენიც წინა ფუნქციაში ვუთხარი,რადგან იმ მასივზე ჩამოივლის
export default function Cards() {
    const productData = useContext(Context);
    // let random = data[Math.floor(Math.random() * data.length)]
    return (
        <section style={{width: "100%", display: "flex", justifyContent: "center", alignContent:"center", flexWrap: "wrap", flexDirection: "column", backgroundColor: "#f8ffe5"}}>
            <h1 style={{fontSize: 30, fontWeight: "bold",color: "#1b9aaa",marginTop: 20}}>The most popular</h1>
            <div style={{width: "80%", display: "flex", flexWrap: "wrap", justifyContent:"space-around", paddingBottom: 20}}>
            {arrayOfRandomCards.map((item)=>{
                return(
                    <Card key={item.id} image={item.image} name={item.name} price={productData.valuta == "$" ? item.price : item.price * 3} id={item.id} changeCardStatus={()=>{productData.changeCardInfo(item.id)}} cardStatus={item.status} />
                )
            })}
            </div>
        </section> 
    )
}
