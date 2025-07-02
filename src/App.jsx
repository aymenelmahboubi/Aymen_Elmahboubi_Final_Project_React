import { useState } from 'react'
import { NavBar } from "./layouts/navBar";
import { HomePage } from "./pages/home/homePage";
import { About } from "./pages/about/About";
import { Footer } from "./layouts/footer";
import { Blog } from './pages/Blog/Blog';
import ProductDetail from './pages/product/ProductDetail';
import { CartProvider } from './context/CartContext';
import { Routes, Route } from 'react-router-dom';
import Shop from "./pages/shop/shop";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/about' element={<About />} />
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
