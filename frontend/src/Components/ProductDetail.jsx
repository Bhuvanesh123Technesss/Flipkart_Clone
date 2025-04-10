import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import thunder from '../assets/icons/thunder.png'

import pd1 from '../assets/ProductDetailImages/1.webp'
import pd2 from '../assets/ProductDetailImages/2.webp'
import pd3 from '../assets/ProductDetailImages/3.webp'
import pd4 from '../assets/ProductDetailImages/4.webp'
import pd5 from '../assets/ProductDetailImages/5.webp'
import pd6 from '../assets/ProductDetailImages/6.webp'
import pd7 from '../assets/ProductDetailImages/7.webp'

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ImageMagnifier from './UI/ImageMagnifier'
import FestiveSeasonButton from './UI/FestiveSeasonButton'
import Like from './UI/Like'

import { Rating } from 'primereact/rating';
import { MdVerified } from "react-icons/md";
import TagBankOffer from './UI/TagBankOffer'
import BankOfferList from './UI/BankOfferList'
import SpecificationsList from './UI/SpecificationsList'
import QuantityAndAddToCart from './UI/QuantityAndAddToCart'
import { classNames } from 'primereact/utils'

export default function ProductDetail({cartItems, setCartItems, product}) {

  let productDetailList = [
    {
        id : 1,
        img : pd1
    },
    {
        id : 2,
        img : pd2
    },
    {
        id : 3,
        img : pd3
    },
    {
        id : 4,
        img : pd2
    },
    {
        id : 5,
        img : pd1
    },
    {
        id : 6,
        img : pd6
    },
    {
        id : 7,
        img : pd7
    },
    {
        id : 8,
        img : pd4
    },
    {
        id : 9,
        img : pd2
    },
    {
        id : 10,
        img : pd1
    }
]


    const [selectedImage, setSelectedImage] = useState(productDetailList[0].img)
    const [hoveredImageId, setHoveredImageId] = useState(null)
    const [isReadMoreSpecificationClicked, setIsReadMoreSpecificationClicked] = useState(false);

    const handleOnClick = (img) => {
      setSelectedImage(img)
    }


    const handleBuyNow = () => {
      const existingItemIndex = cartItems.findIndex(item => item.product._id == product._id)

      if(!existingItemIndex) {
        const updatedCartItems = cartItems.map((item, index) => {
          if (index === existingItemIndex) {
              return {
                  ...item,
                  qty: item.qty + 1 // Increase quantity by 1
              };
          }
          return item;
      });
      setCartItems(updatedCartItems);
      } else {
          // If the product is not in the cart, add it with qty 1
          const newItem = {
              product: {
                  ...product,
              },
              qty: 1 // Set initial quantity to 1
          };
          setCartItems([...cartItems, newItem]);
      }


      //console.log(cartItems)
    }
    
      //console.log(product)
      

  return (
    product &&
    <div className='w-[100%] h-[100%] px-[10vh] py-[10px] bg-[#f1f2f4] flex-col'>
      <div className={`w-[100%] ${isReadMoreSpecificationClicked ? 'h-[920vh]' : 'h-[220vh]'} /*height adjust*/ flex p-[10px] bg-white`}>

        <div className='w-[45%] h-[80vh] bg-[#f1f2f4]'>
          <div id='container-for-image' className=''>
            <div className='flex'>
              <div id='swiper-vertical' className='bg-white w-[100%] h-[80vh]'>
                <div className='w-[80%] h-[85%] ml-15 bg-white'>
                  {
                    (selectedImage) && (
                      <img id="existing-image" src={selectedImage} className='w-[100%] h-[100%]' alt="img" />
                    )
                  }
                  {/* <ImageMagnifier imageURL={productDetailList[8].img}/> */}
                </div>
                <div className='absolute top-60 mr-10'>
                    <FestiveSeasonButton />
                </div>
                <div className='absolute top-60 ml-120' >
                  {/* <Like /> */}
                </div>
                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={8}
                slidesPerView={7}
                //direction={'vertical'}
                navigation
                pagination={{ 
                  clickable: true,
                  enabled: false,
                 }}
                //onSwiper={(swiper) => console.log(swiper)}
                //onSlideChange={() => console.log('slide change')}
                >
                {
                  productDetailList.map((obj) => {
                    return(
                      <SwiperSlide>
                          <img src={obj.img} className={`w-[8vh] h-[8vh] mt-[2vh] mb-[2vh] bg-white ${hoveredImageId === obj.id ? 'outline-2 outline-blue-500' : ''}`} alt="img" 
                          onClick={() => {handleOnClick(obj.img)}}
                          onPointerMove={() => handleOnClick(obj.img)}
                          onPointerEnter={() => setHoveredImageId(obj.id)}
                          />
                        </SwiperSlide>
                    )
                  })
                }
                 </Swiper>
              </div>
            </div>
          </div>
          <div className='w-[100%] h-[13vh] relative -bottom-[0vh] bg-white'>
            <ul className='flex gap-2 pl-[10vh]'>
              <li className='w-[50%] h-[8vh] /*width adjust*/ mt-5 flex items-center justify-center bg-[#ff9f00] hover:cursor-pointer hover:shadow-lg transition-shadow duration-300'>
              <Link to={"/cart"} className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px] mr-1' viewBox="0 0 576 512">
                  <path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                </svg>
                <button onClick={handleBuyNow} className='font-stretch-50% font-bold text-amber-50 hover:cursor-pointer'>
                  ADD TO CART
                </button>
                </Link>
              </li>

              <li className='w-[50%] h-[8vh] /*width adjust*/ mt-5 flex items-center justify-center bg-[#fb641b] hover:cursor-pointer hover:shadow-lg transition-shadow duration-300'>
              <Link to={"/cart"} className='flex'>
                  <img src={thunder} className='w-[12px] h-[17px] mr-1' alt="" />
                  <button onClick={handleBuyNow} className='font-stretch-50% font-bold text-amber-50 hover:cursor-pointer'>
                    BUY NOW
                  </button>
              </Link>
                </li>
            </ul>
          </div>
        </div>

        <div id='wordings' className={`w-[55%] ${isReadMoreSpecificationClicked ? 'h-[920vh]' : 'h-[220vh]'} ml-[20px] bg-[#f9fbff]`}>
          <div className='w-full h-[100%]  bg-white'>
              <div id='prod-detail-container' className=''>
                <div id='prod-detail-title' className=''>
                  <h1 className='text-[1.5rem]'>
                    <span>
                      {product.synopsis}
                    </span>
                  </h1>
                </div>
                <div id='prod-detail-rating' className='ml-2 mt-5 flex'>
                  <div className="card flex justify-content-center ">
                    <Rating 
                    value={product.ratings} 
                    readOnly cancel={false} />
                  </div>
                  <div className='ml-2 font-bold text-gray-500 opacity-75 hover:cursor-pointer'>
                    825 ratings & 47 reviews
                  </div>
                  <div className='ml-2 top-1.5 flex hover:cursor-pointer'>
                  <div className='top-1.5 font-semibold text-blue-500 italic'>
                      Assured
                  </div>
                  <div className='ml-0.8'>
                    <MdVerified />
                  </div>
                  </div>
                </div>
                <div id='prod-detail-price' className='flex'>
                  <div className='font-bold text-[4.0rem]'>
                    ₹{product.price}
                  </div>
                  <div className='mt-8 ml-3 text-[1.5rem] font-stretch-condensed text-gray-500 opacity-75 line-through'>
                    ₹45,000
                  </div>
                  <div className='text-[#4a9952] mt-8 ml-2 text-[1.5rem] font-bold'>
                    25% off
                  </div>
                </div>
                <div id='prod-detail-avail-offer' className=''>
                  <div className='flex-col'>
                    <BankOfferList />
                  </div>
                </div>
              </div>
              <div id='Highlights' className="p-4">
                <h2 className="text-2xl font-bold mb-2">Highlights</h2>
                <ul className="list-disc pl-6">
                  {product.Highlights && product.Highlights.length > 0 &&
                    Object.entries(product.Highlights[0]).map(([key, value]) => (
                      key !== '_id' && <li key={key}>{value}</li>
                    ))
                  }
                </ul>
              </div>

              <div id='stock-status' className=''>
              <hr className='my-2 border-t border-gray-300' />
                <h1 className={`font-bold text-2xl flex justify-center p-[2vh] ${product.stock > 10 ? 'text-green-500' : 'text-gray-500'}`}>
                    {product.stock > 10 ? 'In Stock! Hurry up!' : 'Sorry, Out of Stock!'}
                    </h1>

                    {product.stock <= 10 && (
                        <p className='text-red-500 text-sm flex justify-center'>
                            Try again sometime.
                        </p>
                    )}
              <hr className='my-2 border-t border-gray-300' />
              </div>
               <QuantityAndAddToCart cartItems={cartItems} setCartItems={setCartItems} product={product}/>
              
              <div className='outline-1 w-full mt-5 outline-gray-200'>
                  <div className='w-[100%] h-[15vh] font-normal p-4 flex text-3xl items-center align-text-bottom'>
                    Specifications
                  </div>
              </div>
              <SpecificationsList product={product} setIsReadMoreSpecificationClicked={setIsReadMoreSpecificationClicked}/>
          </div>
        </div>
      </div>
    </div>
  )
}
