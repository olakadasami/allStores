import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Collections from './pages/Collections';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';

import Shoes from './components/Shoes';
import Clothes from './components/Clothes';
import Jewelries from './components/Jewelries';

function App() {
  return (
    <div className="App bg-gray-100">
      <Header />

      <Routes>

        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />

        <Route path='/collection' element={ <Collections /> } />
          <Route path='/collection/clothing' element={ <Clothes /> } />
          <Route path='/collection/shoes' element={ <Shoes /> } />
          <Route path='/collection/jewelries' element={ <Jewelries /> } />

        <Route path='/contact' element={ <Contact /> } />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
