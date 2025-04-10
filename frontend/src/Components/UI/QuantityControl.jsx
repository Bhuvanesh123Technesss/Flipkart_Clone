import React, { useState } from 'react';

import '../UI/QuantityControl.css'

const QuantityControl = ({item, cartItems, setCartItems}) => {

    const [plusClicked, setPlusClicked] = useState(false);
    const [minusClicked, setMinusClicked] = useState(false);
    const [clickedItemId, setClickedItemId] = useState(null);

  const handleDecrease = (item) => {
    if(item.qty > 1){
      const updatedItems = cartItems.map((eachItem) => {
          if(eachItem.product._id == item.product._id){
              setMinusClicked(true);
              setClickedItemId(item.product._id);
              eachItem.qty--;
              setTimeout(() => {
                  setClickedItemId(null);
                  setMinusClicked(false);
              },200);            
          }
          return eachItem;
        })
        setCartItems(updatedItems);
   }
  };

  const handleIncrease = (item) => {
    if(item.product.stock == item.qty){
      return;
  }
  const updatedItems = cartItems.map((eachItem) => {
        if(eachItem.product._id == item.product._id){
            setPlusClicked(true);
            setClickedItemId(item.product._id);
            eachItem.qty++;
            setTimeout(() => {
                setClickedItemId(null);
                setPlusClicked(false);
            },200);            
        }
        return eachItem;
      })
      setCartItems(updatedItems);
  };

  return (
        <div key={item.product._id} className="flex items-center number-control">
            <div
                className={`number-left cursor-pointer flex items-center justify-center bg-gray-800 text-white border border-black w-8 h-8 transition duration-300 hover:bg-gray-600
                    ${minusClicked && clickedItemId === item.product._id ? 'minusClicked' : ''}`}
                onClick={() => handleDecrease(item)} // Corrected function call
            >
                -
            </div>
            <input
                type="number"
                name="number"
                className="number-quantity border-t border-b border-black w-12 text-center"
                value={item.qty} // Display the quantity of the specific item
                readOnly
            />
            <div
                className={`number-right cursor-pointer flex items-center justify-center bg-gray-800 text-white border border-black w-8 h-8 transition duration-300 hover:bg-gray-600
                    ${plusClicked && clickedItemId === item.product._id ? 'plusClicked' : ''}`}
                onClick={() => handleIncrease(item)} // Corrected function call
            >
                +
            </div>
        </div>
    )
};

export default QuantityControl;