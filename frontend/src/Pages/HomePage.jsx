import React, {useState, useEffect, useRef} from 'react'
import Navbar from '../Components/Navbar';
import Categories from '../Components/Categories';
import Banner from '../Components/Banner';
import Products from '../Components/Products';
import Offers from '../Components/Offers';
import Footer from '../Components/Footer';

export default function HomePage({cartItems}) {

  const [product, setProduct] = useState([]);
  const productIDRef = useRef(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_URL + "/products");
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        const result = await response.json();
        
        setProduct(result.products);
        //console.log(result);
        if (result.products.length > 0) {
          productIDRef.current = result.products[0]._id; // Store the productID in the ref
        }
      } catch (error) {
        console.log("Error in fetch:", error);
      }
    };
    fetchProduct();
  },[]);


  return (
    <div>
        <Navbar cartItems={cartItems}/>
        <Categories />
        <Banner />
        <Products productID={productIDRef.current}/> 
        <Offers productID={productIDRef.current}/>
        <Footer />
    </div>
  );
}
