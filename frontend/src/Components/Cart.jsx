import React, { useEffect, useState } from 'react'
import QuantityDropDown from './UI/QuantityDropDown'
import { MdVerified } from "react-icons/md";
import RemoveItem from './UI/RemoveItem';
import Lottie from 'lottie-react';
import emptyCartAnimation from '../assets/empty-cart.json';
import GoBackButton from './UI/GoBackButton';
import { Link } from 'react-router-dom';
import QuantityControl from './UI/QuantityControl';
import secuity from '../assets/icons/security.png'
import { toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';

export default function Cart({cartItems, setCartItems}) {

  const [discount, setDiscount] = useState(25);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [exaggeratedPrice, setExaggeratedPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [platformFee, setPlatformFee] = useState(3);
  const [complete,setComplete] = useState(false);
  const [isPlaceOrderClicked, setIsPlaceOrderClicked] = useState(false); 

  
  useEffect(() => {
    const actualPrice = Number(cartItems.reduce((acc, item)=>{
     return acc + parseFloat(item.product.price.replace(/,/g, '')) * item.qty
  }, 0)).toFixed(2);

    const newDiscountedPrice = ((actualPrice * discount)/100).toFixed(2);
    setDiscountedPrice(newDiscountedPrice);

    const newExaggeratedPrice = (Number(newDiscountedPrice) + Number(actualPrice)).toFixed(2);
    setExaggeratedPrice(newExaggeratedPrice);

    const newPrice = Number(actualPrice) + platformFee; 
    setPrice(newPrice);

  },[cartItems, discount])

  function removeItem(item){

    const confirmation = window.confirm("Are you sure to remove this item from cart?")

    if(confirmation) {
      const updatedItems = cartItems.filter((eachItem) => {
        if(eachItem.product._id !== item.product._id){
            return true;
        }
      })
      toast.success("Item(s) removed!")
      setCartItems(updatedItems);
    }
      
};

    const formatIndianNumber = (num) => {
      const number = parseFloat(num);
      const str = number.toFixed(2); // Ensure two decimal places
      const [integerPart, decimalPart] = str.split('.');

      // Add commas in the Indian numbering system
      const lastThree = integerPart.slice(-3);
      const otherNumbers = integerPart.slice(0, -3);
      const formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + lastThree;

      return decimalPart ? `${formatted}.${decimalPart}` : formatted;
    };


    const placeOrderHandler = async () => {

      setIsPlaceOrderClicked(true);
      const stripePromise = loadStripe("pk_test_51RBETBCOlpvHtWbhwtvjoOb7ung3xd3Q9P9dWF59rcb5yUsMBJmfuZZJeaPHxqmg73DWkxQ7YKMtmsttqoVZTJWg00I4AgmUHZ"); // Replace with your Stripe publishable key

       // Remove commas from price value
       const updatedCartItems = cartItems.map(item => {
        return {
        ...item,
        product: {
            ...item.product,
            price: item.product.price.replace(/,/g, '')
        }
        }
    });

        fetch(`${import.meta.env.VITE_URL}/order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedCartItems)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Assuming the server returns JSON
        })
        .then(() => {
            setCartItems([]);
            //setComplete(true);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            toast.error("There was an error placing your order. Please try again.");
        });

      toast.info("Redirecting to payment...",{
        autoClose:1000,
      });

      const stripe = await stripePromise;
      const response = await fetch(`${import.meta.env.VITE_STRIPE_URL}/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems: updatedCartItems }),
      });

      const session = await response.json();
      stripe.redirectToCheckout({ sessionId: session.id }); // OR just use window.location = session.url;

      if (result.error) {
        toast.error(result.error.message);
    }
  };

  return (
    <div className='h-[200vh] w-full absolute top-20 bg-gray-200'>
        <div id='cart-parent-tag-to-hide' className={`mx-20 my-5 w-[175vh] bg-gray-200 flex gap-4
          ${cartItems.length === 0 ? 'opacity-0 w-0 h-0 overflow-hidden' : ''}
          `}>
            <div className='w-[60%] ml-5'>
              <div className='w-full h-[10vh] bg-white font-serif flex items-center text-[#636059] text-3xl'>
                <h1 className='ml-5'>
                  YOUR CART: {cartItems.length} ITEM(s)
                </h1>
              </div>
              <div id='order-details-part' className='w-full h-[130vh] mt-4 bg-white'>
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <div key={index} className='flex'>
                      <div className='py-10 px-10'>
                        <img className='w-[20vh] h-[20vh] ml-4' src={item.product.images[0].image} alt="img" />
                        <div className='mt-2 ml-10'>
                        <QuantityControl item={item} cartItems={cartItems} setCartItems={setCartItems}/>
                        </div>
                      </div>
                      <div className='mt-10 w-[55vh] h-[20vh] bg-white'>
                        <h1 className='text-2xl font-medium'>{item.product.name}</h1>
                        <div className='flex mt-2'>
                          <p className='text-[0.8rem] mt-1 font-bold text-gray-400'>SELLER: {item.product.Seller}</p>
                          <div className='flex top-2 ml-2'>
                            <div className='top-1.5 font-semibold text-blue-500 italic'>
                              Assured
                            </div>
                            <div className='ml-0.8'>
                              <MdVerified />
                            </div>
                          </div>
                        </div>
                        <div className='flex mt-1'>
                          <p className='line-through mt-2 text-gray-400'>₹45,000</p>
                          <h1 className='text-3xl ml-3 font-bold'>₹{item.product.price}</h1>
                          <h1 className='text-[1.2rem] ml-2 mt-1.5 font-medium text-[#4a9952] whitespace-nowrap'>25% Off</h1>
                          <p className='text-1xl ml-2 mt-[10px] font-medium text-[#4a9952] whitespace-nowrap'>3+ offers available</p>
                        </div>
                      </div>
                      <div className='ml-5 mt-10 w-[20vh] h-[20vh] flex items-center'>
                        <RemoveItem onClick={() => removeItem(item)}/>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className=''></div>
                )}
              </div>
            <div className='w-[100%] h-[15vh] relative mt-1 bg-white'>
                  <div className='stciky top-0 ml-[60vh]'>
                      <button onClick={placeOrderHandler} className='hover:cursor-pointer w-[40vh] h-[10vh] bg-[#fb641b] text-white m-4 font-medium'>
                        PLACE ORDER
                      </button>
                  </div>
              </div>
            </div>
            <div id='price-details-part' className='w-[40%] h-[49vh] bg-white sticky top-4'>
                <h1 className='ml-5 mt-4 font-medium text-gray-400'>PRICE DETAILS</h1>
                <hr className='my-4 border-t border-gray-300' />

                <div className='ml-5 flex justify-between mb-4'>
                <span className='font-normal text-[1.2rem]'>Price ({cartItems.length} item{cartItems.length === 1 ? '' : 's'}, {cartItems.reduce((acc, item)=> acc + item.qty, 0)} qty):</span>
                <span className='mr-6 text-[1.2rem] font-normal'>
                ₹{formatIndianNumber(exaggeratedPrice)}/-
                </span>
                </div>
                <div className='ml-5 flex justify-between mb-4'>
                <span className='font-normal text-[1.2rem]'>Discount</span>
                <span className='mr-6 text-[1.2rem] text-emerald-500 font-normal'>-₹{formatIndianNumber(discountedPrice)}/-</span> {/* Replace with dynamic value */}
                </div>
                <div className='ml-5 flex justify-between mb-4'>
                <span className='font-normal text-[1.2rem]'>Platform fee:</span>
                <span className='mr-6 text-[1.2rem] font-normal'>₹3/-</span> {/* Replace with dynamic value */}
                </div>
                <div className='ml-5 flex justify-between mb-4'>
                <span className='font-normal text-[1.2rem]'>Delivery Charges:</span>
                <div className='flex'>
                <span className='mr-6 text-[1.2rem] font-light line-through text-gray-500'>₹499/-</span>
                <span className='mr-6 text-[1.2rem] font-medium text-emerald-400'>FREE</span>
                </div>
                </div>
                <hr className='my-6 border-t border-gray-300' />
                <div className='ml-5 flex justify-between mb-4'>
                <span className='font-bold text-[2.0rem] '>Total Amount:</span>
                <span className='mr-6 mt-2 text-[1.5rem] font-bold'>₹{formatIndianNumber(price)}</span> {/* Replace with dynamic value */}
                </div>
                <hr className='my-6 border-t border-gray-300' />
                <div className='ml-5 flex gap-2'>
                  <div className='w-[5vh] h-[5vh] mt-1 opacity-50'>
                    <img src={secuity} alt="img" />
                  </div>
                  <div className='text-[#8e8e8f] ml-2'>
                    Safe and Secure Payments.Easy returns.100% Authentic products.
                  </div>
                </div>
            </div>
            
        </div>     
        <div id='empty-cart-tag-to-visible' className={`ml-70 px-10 w-[120vh] h-[50vh] bg-white text-4xl text-cyan-800 fixed font-mono 
        ${cartItems.length === 0 && !isPlaceOrderClicked ? 'block' : 'hidden'}
        `}>
          <h1 className='ml-[20vh]'>
            Looks like your cart is empty
          </h1>
          <div className='flex'>
            <Lottie animationData={emptyCartAnimation} loop={true} style={{ width: '300px', height: '300px', marginLeft: '20vh', }} />
            <div className='ml-10 mt-30'>
              <Link to={"/"}>
              <GoBackButton />
              </Link>
            </div>
          </div>
        </div>     
    </div>
  )
}
