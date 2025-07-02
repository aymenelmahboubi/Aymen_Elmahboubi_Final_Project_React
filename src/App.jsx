import { useState } from 'react'
import { NavBar } from "./layouts/navBar";
import { HomePage } from "./pages/home/homePage";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { Footer } from "./layouts/footer";
import { Blog } from './pages/Blog/Blog';
import ProductDetail from './pages/product/ProductDetail';
import { CartProvider } from './context/CartContext';
import { Routes, Route } from 'react-router-dom';
import Shop from "./pages/shop/shop";
import CartModal from './context/CartModal';
import './App.css'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCartModal = () => setIsCartOpen(true);
  const closeCartModal = () => setIsCartOpen(false);

  return (
    <CartProvider>
      <NavBar openCartModal={openCartModal} />
      <CartModal isOpen={isCartOpen} onClose={closeCartModal} />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
      <Footer />
    </CartProvider>
  )
}

export default App
