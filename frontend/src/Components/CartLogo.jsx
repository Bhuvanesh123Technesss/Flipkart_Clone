import React from 'react'

import cart from '../assets/icons/cart.png'
import Like from './UI/Like'
import { Link } from 'react-router-dom'

export default function CartLogo({cartItems}) {
  return (
    <Link to={"/cart"}>
        <div className='relative flex items-center gap-2'>
            <div className='px-[10px] h-[40px] rounded-sm flex items-center gap-2'>
                <img src={cart} className='h-[25px]' alt="cart" />
                <h1 className='text-[1.1rem]'>Cart</h1>
            </div>
            <div className='w-[20px] h-[20px] absolute -top-1 left-3.5 text-white border-1 bg-[#ff6161] rounded-full flex items-center justify-center'>
                {cartItems.length}
            </div>
        </div> 
    </Link>
  )
}
