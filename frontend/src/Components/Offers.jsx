import React from 'react'
import { Link } from 'react-router-dom';

import p10 from '../assets/Products/10.jpg'
import p11 from '../assets/Products/11.webp'
import p12 from '../assets/Products/12.webp'
import p13 from '../assets/Products/13.jpg'
import p14 from '../assets/Products/14.webp'
import p15 from '../assets/Products/15.jpg'
import p16 from '../assets/Products/16.webp'
import p17 from '../assets/Products/17.webp'
import p18 from '../assets/Products/18.webp'

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Offers() {

    let OfferList = [
        {
            id:1,
            name : "Medium Tote Bag",
            price : "399",
            img : p10
        }, 
        {
            id:2,
            name : "Godrej 7 Kg ",
            price : "9,999",
            img : p11
        }, 
        {
            id:3,
            name : "Godrej 1 Ton AC",
            price : "28,990",
            img : p12
        }, 
        {
            id:4,
            name : "DOCTOR EXTRA SOFT",
            price : "398",
            img : p13
        }, 
        {
            id:5,
            name : "Sonata Watch",
            price : "749",
            img : p14
        }, 
        {
            id:6,
            name : "Fastrack Limitless Fs2 Pro",
            price : "3,800",
            img : p15
        }, 
        {
            id:7,
            name : "Presto Naphthalene Balls",
            price : "380",
            img : p16
        }, 
        {
            id:8,
            name : "Solimo 12-Inch Clock",
            price : "599",
            img : p17
        }, 
        {
            id:9,
            name : "FUNTEREST Wall Decor",
            price : "699",
            img : p18
        }, 
       
        
    ]

  return (
    <div className='w-[100%] h-[50vh] p-[10px] px-[10px] bg-[#f1f2f4]'>
        <div className='w-[100%] pb-[30px] bg-white flex-col'>
           <h1 className='font-serif text-2xl p-[10px]'>Offers For You!</h1>
           <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={7}
            navigation
            pagination={{ 
                clickable: true,
                enabled: false,
            }}
            //onSwiper={(swiper) => console.log(swiper)}
            //onSlideChange={() => console.log('slide change')}
            >
           <div className="w-[100%] h-[30vh] flex gap-[7vh] ">
            {
                OfferList.map((obj) => {
                    return(
                        <SwiperSlide>
                        <div className="mt-2">
                            <Link to={`product/${obj.id}`}>
                            <img src={obj.img || ""} className='h-[20vh] w-[120px] p-[5px] hover:cursor-pointer transition duration-300 hover:scale-110' alt="" />
                            </Link>
                            <h1 className='font-serif whitespace-nowrap'>{obj.name || "prod-title"}</h1>
                            <h1 className='font-bold whitespace-nowrap'>From "₹{obj.price || "prod-title"}"</h1>
                        </div>
                        </SwiperSlide>
                    )
                })
            }
            </div>
            </Swiper>
        </div>
    </div>
  )
}
