import React from 'react'
import { Link } from 'react-router-dom'
import GoBackButton from '../Components/UI/GoBackButton'

import wrong from '../assets/icons/wrong.png'

export default function CancelPage() {
  return (
    <div className='w-full h-[100vh] bg-gray-200'>
      <div className='flex '>
      <div className='items-center ml-[25%] mt-[15%] w-[100vh] h-[45vh] bg-white text-black font-bold'>
      <img className='ml-[35vh] mt-2 w-[20vh] h-[20vh] bottom-1' src={wrong} alt="img" />
      <h1 className='ml-[25vh] whitespace-nowrap text-4xl'>Payment Canceled </h1>
      <p className='whitespace-nowrap ml-[27vh]'>Servers are busy. Try again sometime. </p>
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

/*
<h1>Payment Canceled</h1>
<p>Your payment has been canceled. If this was a mistake, you can try again.</p>
<p>If you have any questions, feel free to contact our support team.</p>
*/