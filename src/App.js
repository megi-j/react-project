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
  const[info, setInfo]=useState(data)
  const[currency, setCurrency]=useState("$")
  const[cartNumber, setCartNumber]=useState(0)
  const[totalItems, setTotalItems]=useState(0)
  const[quantity, setQuantity]=useState(1)
  const[totalPrice, setTotalPrice] = useState(0)

function encreaseCartNumber(){
  setCartNumber(cartNumber+1)
}
function decreaseCartNumber(){
  setCartNumber(cartNumber-1)
}
function resetCartNumber(){
  setCartNumber(0)
}
function encreaseTotalItems(){
  setTotalItems(cartNumber+quantity)
}
function encreaseQuantity(cardId){
//   let findClickedCard = info.find((elem)=>{  
//     return elem.id == cardId
       
// })  

  let p = document.querySelector(`.quant-${cardId}`)
  p.innerHTML = `quantity: ${quantity+1}`
  
}
function decreaseQuantity(cardId){
  let p = document.querySelector(`.quant-${cardId}`)
  if(quantity > 1){
    p.innerHTML = `quantity: ${quantity-1}`
  }else{
    p.innerHTML = `quantity: ${1}`
  }
}
let arrayOfTotalPrice = []
let x = 0;

function changeTotalPrice(){
  info.map((item)=>{
    if(item.status == "Added"){
      return arrayOfTotalPrice.push(item.price)
    } 
    
  })
  for(let i = 0; i < arrayOfTotalPrice.length; i++){
    x+=arrayOfTotalPrice[i]
  }
  setTotalPrice(x)
  console.log(totalPrice)
}
 function goToDollarCurrency(){
  setCurrency("$")
 }
  
  function goToLariCurrency(){
    setCurrency("₾")
  }
  function goToDollar(){
    info.map((item)=>console.log(item))
    }

  function goToLari(){
    setInfo(...info, info.map((item)=>item.price*=3))
    
  }

  function change(cardId){
    let addedStatusCards = info.find((elem)=>{  
         return elem.id == cardId
            
    })  
    addedStatusCards.status = "Added"
    document.querySelector(`.btn-${cardId}`).setAttribute('disabled', '')
    setInfo(info)
    encreaseCartNumber()
    encreaseTotalItems()
    changeTotalPrice()
  }
  return (
    <Context.Provider value={{productInfo: info, changeCardInfo: (e)=>change(e), valuta: currency, changeToDollarCurrency: ()=>goToDollarCurrency(), changeToLariCurrency: ()=>goToLariCurrency(), changeToDollar: ()=>goToDollar(), changeToLari: ()=>goToLari(), cartisRicxvi: cartNumber, cartisRicxvisGazrda: ()=>encreaseCartNumber(), cartisRicxvisShemcireba: ()=>decreaseCartNumber(), cartNumberReset: ()=>resetCartNumber(), totalItemsInCart: totalItems, totalItemsGazrda: ()=>encreaseTotalItems(), raodenoba: quantity, raodenobisGazrda: (e)=> encreaseQuantity(e), raodenobisShemcireba: (e)=>decreaseQuantity(e), mtlianiFasi: totalPrice, mtlianiFasisCvlileba: ()=>changeTotalPrice()}}>
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
