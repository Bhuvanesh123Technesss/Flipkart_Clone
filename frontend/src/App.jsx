import { useState } from 'react'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetailPage from './Pages/ProductDetailPage';
import CartPage from './Pages/CartPage';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessPage from './Pages/SuccessPage';
import CancelPage from './Pages/CancelPage';

function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <>
      <BrowserRouter>
      <div>
      <ToastContainer theme='dark' position="top-center" autoClose={3000} />
        <Routes>
          <Route path="/" element={<HomePage cartItems={cartItems}/>} />
          <Route path="/product/:id" element={<ProductDetailPage cartItems={cartItems} setCartItems={setCartItems}/>}/>
          <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems}/>}/>
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/cancel" element={<CancelPage />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
