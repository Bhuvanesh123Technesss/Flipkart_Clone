import React from 'react'
import logo from '../assets/icons/logo.png'
import search from '../assets/icons/search.png'
import user from '../assets/icons/user.png'
import DropDownArrow from './UI/DropDownArrow'
import { Link } from 'react-router-dom'
import CartLogo from './CartLogo'

export default function Navbar({cartItems}) {
  return (
    <div className='w-[100%] h-[12vh] flex'>
        <div className='w-[25vh] h-[10vh] mr-10 mt-2 flex items-center justify-center'>
            <Link to={"/"}>
            <img src={logo} className='h-[50%]' alt="logo" />
            </Link>
        </div>
        <div className='w-[50%] h-[100%] flex items-center justify-center'>
            <div className='w-[100%] h-[40px] bg-[#f0f5ff] rounded-sm flex'>
                <div className='w-[50px] h-[100%] flex items-center justify-center'>
                    <img src={search} className='h-[20px] opacity-65' alt="" />
                </div>
                <input className='w-[100%] outline-0' 
                type="text"
                placeholder='Search for Products, Brands and More' />
            </div>
        </div>
        <div className='w-[25%] h-[100%] flex gap-2 items-center px-[20px] hover:cursor-pointer'>
            <div className='px-[10px] h-[40px] border-2 border-white hover:rounded-sm flex items-center gap-2 hover:border-2 hover:border-gray-200 hover:bg-gray-100 group'>
                <img src={user} className='h-[20px]' alt="user" />
                <h1 className='text-[1.1rem]'>Account</h1>
                <DropDownArrow /> 
            </div>
            <CartLogo cartItems={cartItems} />
        </div>
    </div>
  )
}