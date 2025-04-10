import React from 'react'
import { Link,  } from 'react-router-dom'
import GoBackButton from '../Components/UI/GoBackButton'

import accept from '../assets/icons/accept.png'


export default function SuccessPage() {

  return (
    <div className='w-full h-[100vh] bg-gray-200'>
      <div className='flex '>
      <div className='items-center ml-[25%] mt-[15%] w-[100vh] h-[45vh] bg-white text-black font-bold'>
      <img className='ml-[35vh] mt-2 w-[20vh] h-[20vh] bottom-1' src={accept} alt="img" />
      <h1 className='ml-[22vh] whitespace-nowrap text-4xl'>Payment Successful! </h1>
      <p className='whitespace-nowrap ml-[15vh]'>Thank you for your purchase. Your order has been confirmed.</p>
        <br />
        <div className='ml-[35vh]'>
          <Link to={"/"}>
          <GoBackButton />
          </Link>
        </div>
      </div>
      </div>
    </div>  
  )
}
