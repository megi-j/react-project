import './Reset.css'
import './App.css';
import Header from './Header';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';
import Cart from './Cart';
import CardDetail from './CardDetail';
import Footer from './Footer';
import {Context} from './Context'
import { useState } from 'react';

let data = require("./data.json")
let count = 0

function App() {
  const[info, setInfo]=useState(data)  //ამ სტეიტში ინახება მთლიანი მონაცემები
  const[currency, setCurrency]=useState("$") //ამ სტეიტში ინახება ვალუტა რომელიც ჰედერში ხატია,ხან დოლარი ხან ლარი
  const[cartNumber, setCartNumber]=useState(0) //აქ არის კალათაზე დახატული ციფრი, რომელიც იცვლება იმის მიხედვით თუ რამდენი პროდუქტი იქნება არჩეული
  const[totalItems, setTotalItems]=useState(0) //აქ ინახება კალათაში გადასვლისას მთლიანი პროდუქტების ჯამი, არამარტო კატეგორიების მიხედვით არამედ რაოდენობების ჯამიც
  const[quantity, setQuantity]=useState(1) //აქ ვინახავ რაოდენობას თითოეული ქარდის
  const[totalPrice, setTotalPrice] = useState(0) //აქ ვინახავ მთლიან ფასს ყველა ქარდის რომელიც კალათის თავშია
  const[disabled, setIsDisabled] = useState(true) 
  const[isClicked, setIsClicked] = useState(false)
 
  //ფუნქციები

  function encreaseCartNumber(){
    setCartNumber(cartNumber+1)
  }  //მიზრდის კალათის რიცხვს
  function decreaseCartNumber(){
    setCartNumber(cartNumber-1)
  }  //მიმცირებს კალათის რიცხვს
  function resetCartNumber(){
    setCartNumber(0)
    setTotalItems(0)
  } //მინულებს როგორც კალათის რიცხვს ასევე მთლიანი აითემების რიცხვს
  function encreaseTotalItems(){
    setTotalItems(totalItems + 1)
  } //მიზრდის კალათაში მთლიანი აითემების რიცხვს
  function decreaseTotalItems(quant){
    setTotalItems(totalItems - quant)
  } //მიმცირებს კალათაში მთლიანი აითემების რიცხვს იმდენით რა რაოდენობასაც გადავცემთ
  function encreaseQuantity(cardId){
    let findClickedCard = info.find((elem)=>{  
      return elem.id == cardId     
    })  
    findClickedCard.quantity += 1
    if(isClicked == true){
      setIsClicked(false)
    }else{
      setIsClicked(true)
    }
    encreaseTotalItems()
    changeTotalPrice()
  } //ვპოულობთ რომელ ქარდის + ღილაკზე მოხდა კლიკი და იმ ქარდის რაოდენობას ვზრდით 1 ით,ასევე ვიძახებ მთლიანი აითემების გზარდის ფუნქციას და მთლიანი ფასის ცვლილების ფუნქციას, რომელიც თითოეულ ქარდზეა
  function decreaseQuantity(cardId){
    let findClickedCard = info.find((elem)=>{  
      return elem.id == cardId     
    })  
    if(findClickedCard.quantity > 1){
      findClickedCard.quantity -= 1
      decreaseTotalItems(1)
    }
    if(isClicked == true){
      setIsClicked(false)
    }else{
      setIsClicked(true)
    }   
  } //ვპოულობთ რომელ ქარდის - ღილაკზე მოხდა კლიკი და იმ ქარდის რაოდენობას ვამცირებთ 1 ით,ასევე ვიძახებ მთლიანი აითემების შემცირების ფუნქციას 

  let arrayOfTotalPrice = []
  let sumOfPrices = 0;

  function changeTotalPrice(){
    info.map((item)=>{
      if(item.status == "Added"){
        return arrayOfTotalPrice.push(item.price)
      } 
    })
    for(let i = 0; i < arrayOfTotalPrice.length; i++){
      sumOfPrices+=arrayOfTotalPrice[i]
    }
    setTotalPrice(sumOfPrices)   
  } //ამ ფუნქციით ვცვლი კალათაში რო თავში მთლიანი ფასია მაგის მნიშვნელობას,ცარიელ მასივში ვყრი ყველა აითემის ფასს რომლის სტატუსია added, და შემდეგ ვაჯამებ და ეს ჯამი ხდება მთლიანი ფასის მნიშვნელობა
  function changeCurrency(){
    if(currency == "$"){
      setCurrency("₾")
    }else{
      setCurrency("$")
    }
  } //აქ ვცვლი ვალუტის მნიშვნელობას, თუ დოლარი ხატია უნდა გახდეს ლარი და პირიქით, ამ ფუნქციას გამოვიძახებ ვალუტის ნიშანზე კლიკის დროს
  function change(cardId){
    let addedStatusCards = info.find((elem)=>{  
      return elem.id == cardId          
    })  
    addedStatusCards.status = "Added"
    addedStatusCards.quantity = quantity
    document.querySelector(`.btn-${cardId}`).setAttribute('disabled', '')
    setInfo(info)
    encreaseCartNumber()
    encreaseTotalItems()
    changeTotalPrice()  
  }//ყველაზე მნიშვნელოვანი ფუნქციაა,რომელიც დაკლიკულ ქარდს უცვლის სტატუსს,ასევე დაკლიკული ქარდის ობიექტში ამატებს ახალ ფროფერტის quantity-ს და სტატუსის აღმნიშვნელ ღილაკს ხდის არააქტიურს, ასევე ვზრდით კალათის რიცხვს,მთლიანი აიტემების რიცხვს და კალათაში არსებული მთლიანი ფასიც იცვლება
  
  return (
    //აქ არის კონტექსტი რომელსაც ვატან სტეიტიდან ამოღებულ ინფოს და ასევე ზემოთ განსაზღვრულ ფუნქციებს
    <Context.Provider value={{
      productInfo: info, 
      changeCardInfo: (e)=>change(e), 
      valuta: currency, 
      valutisCvlileba: ()=>changeCurrency(),
      cartisRicxvi: cartNumber,
      cartisRicxvisGazrda: ()=>encreaseCartNumber(),  
      cartisRicxvisShemcireba: ()=>decreaseCartNumber(), 
      cartNumberReset: ()=>resetCartNumber(),
      totalItemsInCart: totalItems, 
      totalItemsGazrda: ()=>encreaseTotalItems(), 
      totalItemsShemcireba: (e)=>decreaseTotalItems(e),
      raodenoba: quantity, 
      raodenobisGazrda: (e)=> encreaseQuantity(e),
      raodenobisShemcireba: (e)=>decreaseQuantity(e), 
      mtlianiFasi: totalPrice,
      mtlianiFasisCvlileba: ()=>changeTotalPrice(),
      gamochena: disabled,
      daklikulia: isClicked
     
    }}> 
      <div className='container'>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/:productId" element={<CardDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
