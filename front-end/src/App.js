//    All imports
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { Routes, Route } from 'react-router-dom';
import Product from './components/Product';

//    Main App Function Component
function App() {
  return (
    <>
    {/*         Navbar Component      */}
      <Navbar />

      {/*         All Routes      */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path={'/product/:id'} element={<Product />} />
        <Route path={'/products/product/:id'} element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
