import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'
import ProductDetail from '../Components/ProductDetail'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer'



export default function ProductDetailPage({cartItems, setCartItems}) {

    const [product, setProduct] = useState([])
    const {id} = useParams()

    useEffect(() => {
      const fetchProduct = async () => {
        try{
          const response = await fetch(`${import.meta.env.VITE_URL}/product/${id}`)
          //console.log("ID:",id);
          if(!response.ok){
            throw new Error("Network response not ok")
          }
          const result = await response.json();
          setProduct(result.product);
        }catch(error){
          console.log("Error in fetch:",error)
          console.log("Product", product)
        }
      };
      fetchProduct();
    },[id]);

  return (
    <div>
        <Navbar cartItems={cartItems} />
        <Categories />
        <ProductDetail cartItems={cartItems} setCartItems={setCartItems} product={product}/>
        <Footer />
    </div>
  )
}
