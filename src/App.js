import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Collections from './pages/Collections';
import Contact from './pages/Contact';
import About from './pages/About';

import Header from './components/Header';
import Footer from './components/Footer';
import Shoes from './components/Shoes';
import Clothes from './components/Clothes';
import Jewelries from './components/Jewelries';
import Cart from './components/Cart/Cart';

function App() {

  const [showCart, setShowCart] = useState(true);

  const toogleCart = () => {
    setShowCart(!showCart)
  }

  return (
    <div className="App bg-gray-100">
      <Header toogleCart={toogleCart} />
      <Cart toogleCart={toogleCart} showCart={showCart} />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/collection' element={<Collections />} />
        <Route path='/collection/clothing' element={<Clothes length={10} />} />
        <Route path='/collection/shoes' element={<Shoes length={10} />} />
        <Route path='/collection/jewelries' element={<Jewelries length={10} />} />

        <Route path='/contact' element={<Contact />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
