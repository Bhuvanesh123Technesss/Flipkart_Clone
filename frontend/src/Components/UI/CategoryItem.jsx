import React from 'react'
import DropDownArrow from './DropDownArrow'

export default function CategoryItem({name, img}) {
  return (
    <div className='w-[150px] h-[100%] flex items-center justify-center flex-col group hover:cursor-pointer'>
        <img src={img} className='h-[70px] w-[70px]' alt="item-image" />
        <div className='flex items-center justify-center'>
          <h1 className='text-[1.0rem] font-medium p-[5px]'>{name}</h1>
          <DropDownArrow />
        </div>
    </div>
  )
}
