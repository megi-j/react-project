import React, {useContext} from 'react'
import Card2 from "./Card2"
import bin from "./images/bin.png"
import {useState} from 'react'
import {Context} from './Context'

let data = require("./data.json")
//ამ კომპონენტში ვხატავ კალათის გვერდს, სადაც მაქვს მთლიანი აითემების რაოდენობა და მთლიანი ფასი იმ ქარდების რომლებიც მოთავსდნენ კალათაში, და ასევე ვხატავ იმ ქარდებს რომლების სტატუსიც არის added
export default function Cart() {
  const[status, setStatus] = useState("remove")

  const productData = useContext(Context);

  function clear(){
    data.map((item)=>{
      if(item.status == "Added"){
        return item.status = "Add to cart"
      }  
    })
    productData.cartNumberReset()
    productData.mtlianiFasisCvlileba()
  }
  return (
    <section style={{width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#f8ffe5"}}>
      <div style={{width: "100%",height: 40, display: "flex", justifyContent: "space-around", alignItems: "center", marginTop: 30}}>
        <h3>Total Items:{productData.totalItemsInCart}</h3>
        <h3>Total Price:{productData.mtlianiFasi}{productData.valuta}</h3>
        <h3>Clear Cart 
          <img onClick={clear} style={{cursor:"pointer"}} src={bin} alt="bin"/>
        </h3>
      </div>
        <div style={{width: "80%", display: "flex", flexWrap: "wrap", justifyContent:"space-around", paddingBottom: 20}}>
          {productData.productInfo.map((item)=>{
            if(item.status == "Added"){
              return <Card2 key={item.id} image={item.image} name={item.name} price={productData.valuta == "$" ? item.price : item.price * 3} id={item.id} cardStatus = {status} changeCardStatus={()=>productData.cardisWashla(item.id)} raodenobisGazrda={()=>{productData.raodenobisGazrda(item.id)}} raodenobisShemcireba={()=>{productData.raodenobisShemcireba(item.id)}} 
              totalPrice={productData.valuta == "$" ? item.price * item.quantity : item.price * 3 * item.quantity} 
              raodenoba={item.quantity} /> 
            }
          })}
        </div>
    </section> 
  )
}
