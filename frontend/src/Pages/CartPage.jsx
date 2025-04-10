import React from 'react'
import Navbar from '../Components/Navbar'
import Cart from '../Components/Cart'

export default function CartPage({cartItems, setCartItems}) {
  return (
    <div>
        <Navbar cartItems={cartItems}/>
        <Cart cartItems={cartItems} setCartItems={setCartItems}/>
    </div>
  )
}
