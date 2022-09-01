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

function changeCartNumber(){
  setCartNumber(cartNumber+1)
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
    console.log(addedStatusCards)
    document.querySelector(`.btn-${cardId}`).setAttribute('disabled', '')
    setInfo(info)
    changeCartNumber()

  }
  return (
    <Context.Provider value={{productInfo: info, changeCardInfo: (e)=>change(e), valuta: currency, changeToDollarCurrency: ()=>goToDollarCurrency(), changeToLariCurrency: ()=>goToLariCurrency(), changeToDollar: ()=>goToDollar(), changeToLari: ()=>goToLari(), cartisRicxvi: cartNumber, cartisRicxvisShecvla: ()=>changeCartNumber()}}>
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
