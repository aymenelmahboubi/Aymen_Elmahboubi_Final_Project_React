import { useState } from 'react'
import { NavBar } from "./layouts/navBar";
import { HomePage } from "./pages/home/homePage";
import { Footer } from "./layouts/footer";

import { CartProvider } from './context/CartContext';
import { Routes, Route } from 'react-router-dom';
import Shop from "./pages/shop/shop";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
    <Routes>
          <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      
    </>
  )
}

export default App
