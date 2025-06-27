import React, { useEffect, useState } from 'react'
import Cart from '../Components/Cart'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const CART = () => {
  const [cart, setCart] = useState([])
  const user = JSON.parse(localStorage.getItem("Users"));

  useEffect(() => {
    if (user !== null && user !== undefined) {
      setCart(user.cartList);
    }
  }, [])
     

  

  return (
    <>
      <Navbar />
      <div className='min-h-screen flex flex-col justify-center items-center'>
        {
          cart.length > 0
            ? <Cart cart={cart} user={user} />
            : <p>Your Cart is Empty</p>
        }  
       <Link to="/Checkout">
        <button className='bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer mb-10'>Checkout</button>
        </Link>
        </div>
      <Footer />
    </>
  )
}

export default CART

