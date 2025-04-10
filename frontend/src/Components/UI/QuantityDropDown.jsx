import React, { useState } from 'react'

import '../UI/QuantityDropDown.css'
import DropDownArrow from '../UI/DropDownArrow'

export default function QuantityDropDown({onQuantityChange}) {

  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const handleQuantitySelect = (event) => {
    const selectedQuantity = Number(event.target.innerText); // Get the selected quantity
    onQuantityChange(selectedQuantity); // Call the callback with the selected quantity
  };

  const toggleDropDown = () => {
    setIsDropDownOpen((prev) => !prev)
  }

  return (
    <div className=''>
    <div id='nav-quantity-dropdown'>
      <div className=''>
        <label htmlFor="touch" className='mt-2'>
        <div id='quantity-name-block'
        onClick={toggleDropDown}
        className='h-[7vh] w-[30vh] mr-3 flex bg-[#ff9f00] text-amber-50 hover:cursor-pointer group'>
          <h1 className='absolute mt-3 ml-15 font-bold'>QUANTITY+</h1>
        </div>
        </label>  
      </div>    
                   
      <input type="checkbox" id="touch"/> 

      <ul className="slide">
      {[...Array(10).keys()].map((num) => (
          <li key={num + 1} onClick={handleQuantitySelect}>
            <a>{num + 1}</a>
          </li>
        ))}
      </ul>

    </div> 
    </div>
  )
}
