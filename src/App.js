import { Routes, Route } from 'react-router-dom';

import Header from './components/header';

import Home from './pages/Home';
import Collections from './pages/Collections';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/collection' element={ <Collections /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
