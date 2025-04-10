import React from 'react'

export default function DropDownArrow() {
  return (
    <div className='w-[10px] h-[5px] flex'>
        <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 8'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1'/></svg>" 
        alt="drop-down" 
        className='transition-transform duration-300 group-hover:rotate-180' 
        />
    </div>
  )
}
