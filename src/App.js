import './Reset.css'
import './App.css';
import Header from './Header';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
      

    </div>
  );
}

export default App;
