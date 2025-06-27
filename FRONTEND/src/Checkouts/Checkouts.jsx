import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Checkout from '../Components/Checkout'

const Checkouts = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <Checkout />
      </div>
      <Footer />
    </>
  )
}

export default Checkouts
