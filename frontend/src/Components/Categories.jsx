import React from 'react'
import CategoryItem from './UI/CategoryItem'
import c1 from '../assets/Category/1.webp'
import c2 from '../assets/Category/2.webp'
import c3 from '../assets/Category/3.webp'
import c4 from '../assets/Category/4.webp'
import c5 from '../assets/Category/5.webp'
import c6 from '../assets/Category/6.webp'
import c7 from '../assets/Category/7.webp'
import c8 from '../assets/Category/8.jpg'
import c9 from '../assets/Category/9.webp'

export default function Categories() {

  let categoryList = [
    {
        id : 1,
        name : "Kilos",
        img : c1
    },
    { 
        id : 2,
        name : "Accesories",
        img : c2
    },
    { 
        id : 3,
        name : "Fashion",
        img : c3
    },
    { 
        id : 4,
        name : "Mobiles",
        img : c4
    },
    { 
        id : 5,
        name : "Furnitures",
        img : c5
    },
    { 
        id : 6,
        name : "Appliances",
        img : c6
    },
    { 
        id : 7,
        name : "Flight Booking",
        img : c7
    },
    { 
        id : 8,
        name : "Toys",
        img : c8
    },
    { 
        id : 9,
        name : "Two Wheeler",
        img : c9
    },
]

  return (
    <div className='w-[100%] h-[20vh] p-[10px] bg-[#f1f2f4]'>
        <div className='w-[100%] h-[100%] bg-white flex'>
          {
            categoryList.map((obj) => {
              return(
                <CategoryItem key={obj.id} name={obj.name} img={obj.img}/>
              )
            })
          }
          {/*<CategoryItem name={"Kilos"} img={c1}/>*/}
        </div>
    </div>
  )
}
