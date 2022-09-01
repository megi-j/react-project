import React, {useContext} from 'react'
import Card from "./Card"
import bin from "./images/bin.png"
import {useState} from 'react'
import {Context} from './Context'
let data = require("./data.json")

export default function Cart() {
  const[status, setStatus] = useState("remove")

  const productData = useContext(Context);

  function removeCard(cardId){
    let remove = data.find((elem)=>{
       return elem.id == cardId
       
    })
    remove.status = "Add to cart"
    productData.cartisRicxvisShemcireba()
  }
  function clear(){
    data.map((item)=>{
      if(item.status == "Added"){
        item.status = "Add to cart"
      }
    })
  }
  return (
    <section style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <div style={{width: "100%",height: 40, display: "flex", justifyContent: "space-around", alignItems: "center", marginTop: 30}}>
        <h3>Total Items:</h3>
        <h3>Total Price:</h3>
        <h3>Clear Cart 
          <img onClick={clear} style={{cursor:"pointer"}} src={bin} alt="bin"/>
        </h3>
      </div>
        <div style={{width: "80%", display: "flex", flexWrap: "wrap", justifyContent:"space-around", paddingBottom: 20}}>
          {data.map((item)=>{
            if(item.status == "Added"){
              return <Card key={item.id} image={item.image} name={item.name} price={item.price} id={item.id} cardStatus = {status} changeCardStatus={()=>removeCard(item.id)} />
            
            }
         })}
        </div>

    </section>
    
   
  
  )
}
