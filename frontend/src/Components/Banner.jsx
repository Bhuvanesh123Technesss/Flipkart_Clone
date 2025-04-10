import React from 'react'
import b1 from '../assets/banner/1.webp'
import b2 from '../assets/banner/2.webp'
import b3 from '../assets/banner/3.webp'
import b4 from '../assets/banner/4.webp'
import b5 from '../assets/banner/5.webp'

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Banner() {
    const BannerList = [b1, b2, b3, b4, b5];
    
  return (
    <div className='w-[100%] h-[30vh] pb-[35vh] px-[10px] bg-[#f1f2f4]'>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{delay: 2000}}
            loop={true}
            navigation={true}
            pagination={true}
           // onSwiper={(swiper) => console.log(swiper)}
            //onSlideChange={() => {console.log('slide change')}}
            >

            {
                BannerList.map((img) => {
                    return(
                    
                        <SwiperSlide>
                            {/*<div className='swipper-button-prev bg-amber-600'>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                            </svg>
                            </div>*/}
                                <div className='w-[100%] bg-white'>
                                    <img src={img} alt="banner" />
                                </div>
                            {/*<div className='swipper-button-next bg-amber-600'>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                            </svg>
                            </div>*/}
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
    </div>
  )
}
