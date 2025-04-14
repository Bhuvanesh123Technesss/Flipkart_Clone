import React, { useEffect,useState } from 'react'
import { Link,useParams } from 'react-router-dom'

import p1 from '../assets/Products/1.webp'
import p2 from '../assets/Products/2.webp'
import p3 from '../assets/Products/3.webp'
import p4 from '../assets/Products/4.webp'
import p5 from '../assets/Products/5.webp'
import p6 from '../assets/Products/6.webp'
import p7 from '../assets/Products/7.webp'
import p8 from '../assets/Products/8.webp'
import p9 from '../assets/Products/9.webp'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Products() {

    let productList = [
        {
            id:"67fc9c250f4693e0f7895cfb",
            name : "Samsung Galaxy A16",
            price : "35,000",
            img : p1
        },
        {
            id:"67fc9c800f4693e0f7895cfd",
            name : "POCO C16",
            price : "10,999",
            img : p2
        },
        {
            id:"67fc9cc30f4693e0f7895cfe",
            name : "Motorola Edge 50 Fusion",
            price :"29,999" ,
            img : p3
        },
        {
            id:4,
            name : "iQOO Neo9 Pro 5G",
            price : "31,998",
            img : p4
        },
        {
            id:5,
            name : "Tecno POP %G",
            price : "11,999",
            img : p5
        },
        {
            id:6,
            name : "realme NARZO N16",
            price : "8,498",
            img : p6
        },
        {
            id:7,
            name : "Redmi A4 5G",
            price : "8,999",
            img : p7
        },
        {
            id:8,
            name : "Motorola G45 5G",
            price : "11,697",
            img : p8
        },
        {
            id:9,
            name : "iQOO Z9s 5G",
            price : "21,999",
            img : p9
        },
    
    ]

  return (
    <div className='w-[100%] h-50vh p-[10px] px-[10px] bg-[#f1f2f4]'>
        <div className='w-[100%] pb-[30px] bg-white flex-col'>
            <h1 className='font-serif text-2xl p-[10px]'>Best Deal on Smartphones</h1>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={7}
                navigation
                pagination={{
                    enabled: false,
                }}
                //onSwiper={(swiper) => console.log(swiper)}
                /*onSlideChange={(swiper) => {
                    setCurrentIndex(swiper.activeIndex);
                    console.log(currentIndex);
                }}*/
                >
                
            <div className="w-[100%] h-[30vh] flex gap-[7vh] ">
            {
                productList.map((obj) => {
                    return(
                        <SwiperSlide key={obj.id}>
                        <div className="mt-2">
                            <Link to={`product/${obj.id}`}>
                            <img src={obj.img || "image"} className='h-[20vh] w-[15vh] p-[5px] hover:cursor-pointer transition duration-300 hover:scale-110' alt="" />
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
