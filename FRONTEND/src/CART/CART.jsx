import React, { useState } from 'react'
import Cart from '../Components/Cart'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const CART = () => {
    const [cart, setCart] = useState([])
  return (
    <>
    <Navbar />
       <div className='min-h-screen'>
        <Cart cart={cart} setCart={setCart} />
        </div>
    <Footer />
    </>
  )
}

export default CART

