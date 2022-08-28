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

function App() {
  return (
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
      

    </div>
  );
}

export default App;
