import React, { useState } from 'react';
import QuantityDropDown from './QuantityDropDown';
import {toast} from 'react-toastify';
import '../UI/QuantityAndAddToCart.css'
import { Link } from 'react-router-dom';

const QuantityAndAddToCart = ({cartItems, setCartItems, product}) => {

  const [qty, setQty] = useState(1)
  const [animate, setAnimate] = useState(false)

  const handleQuantityChange = (quantity) => {
    setQty(quantity) // Update quantity based on dropdown selection
    setAnimate(true); // Trigger animation
    setTimeout(() => setAnimate(false), 300); // Remove animation class after 300ms
  };

  const handleAddToCart = () => {

    const itemExist = cartItems.find((item) => item.product._id == product._id)

    if(!itemExist && qty > 0) {
      const newItem = {product, qty}
      setCartItems((preValues) => [...preValues, newItem])
      toast.success("New Cart Item(s) Added!");
      console.log('QTY',qty)
    }
    else if(qty === 0) {
      toast.warning("Please select your quantity")
    }
    else {
      toast.warning("Item(s) already added!")
    }
    console.log('CART',cartItems)
  };

  return (
    <div id='quantity-and-add-to-cart' className='ml-30 flex'>
      <QuantityDropDown onQuantityChange={handleQuantityChange} className='mr-2'/>
      <Link to={"/cart"}>
      <div id='add-to-cart' className='flex w-[35vh] h-[7vh] bg-[#ff9f00] hover:shadow-lg transition-shadow duration-300'>
        <li className='flex items-center ml-9'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px]' viewBox="0 0 576 512">
                  <path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
            </svg>
        <button
          onClick={handleAddToCart}
          className={`text-white font-bold py-2 ml-1 rounded hover:cursor-pointer whitespace-nowrap ${animate ? 'animate' : ''}`} >
          ADD {qty} ITEMS TO CART
        </button>
        </li>
      </div>
      </Link>
    </div>
  );
};

export default QuantityAndAddToCart;