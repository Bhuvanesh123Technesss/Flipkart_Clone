import React from 'react'

import tag from '../../assets/icons/tag.png'

export default function TagBankOffer({wordings}) {
  return (
    <div className='flex'>
        <div className='w-[15px] h-[15px] mt-1'>
            <img src={tag} alt="tag" />
        </div>
        <div className='ml-2 font-medium whitespace-nowrap'>
            Bank Offer
        </div >
        <div className='flex'>
            <p className='mt-0.5 ml-1 text-[0.9rem] '>
                {wordings}
            </p>
            <div className='text-blue-500 ml-1 hover:cursor-pointer font-bold'>
                T&C
            </div>
        </div>
    </div>
  )
}
