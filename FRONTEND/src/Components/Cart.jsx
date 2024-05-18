import React, { useState } from 'react'
import "./Cart.css"

const Cart = ({ cart, setCart, price}) => {
 
  return (
    <div className="cart">
     {
      cart?.map((item)=>(
        <div className="cart-box" key={item.id}>
        <div className="cart-img">
          <img src={item.image}/>
          <p>{item.title}</p>
        </div>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
        <span>${item.price}</span>
        <button>Remove</button>
        </div>
      ))}
      <div className="total">
        <span>Total Price of Cart</span>
        <span>Rs-{price}</span>
      </div>
   
    </div>
  )
}

export default Cart
