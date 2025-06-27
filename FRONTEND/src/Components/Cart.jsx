import React, { useEffect, useState } from 'react'
import "./Cart.css"
import axios from 'axios'

const Cart = ({ cart, user }) => {

  const [price, setPrice] = useState(0)
  const [amount, setAmount] = useState(0)


  const handleamount = (val, bookId) => {

    axios.put("http://localhost:4001/user/handleItemCount", { bookId, val, _id: user._id })
      .then(res => {
        if (res.data.status) {
          localStorage.setItem("Users", JSON.stringify(res.data.user))
          location.reload()
        } else {
          window.alert("Something went wrong!!!")
          console.log(res.data)
        }
      })
      .catch(err => {
        window.alert("Network connection error !!!")
        console.error(err)
      })
  }

  const handlePrice = () => {
    cart.map(item => {
      setPrice(i => i += (item.price * item.totalItem))
    })
  }


  useEffect(() => {
    handlePrice();
  }, []);

  const removeFromCart = (bookId) => {
    axios.post("http://localhost:4001/user/removeFromCart", { email: user.email, bookId })
      .then(res => {
        if (res.data) {
          localStorage.setItem("Users", JSON.stringify(res.data.user))
          location.reload();
        } else window.alert("Soemthing went wrong")
      })
      .catch(err => console.error(`Couldn't remove from the cart --> ${err}`))
  }


  return (
    <div className="cart">
      {
        cart?.map((item) => (
          <div className="cart-box" key={item.bookId}>
            <div className="cart-img">
              <img src={item.image} />
              <p>{item.name}</p>
            </div>
            <div>
              <button onClick={() => handleamount(1, item.bookId)}>+</button>
              <button>{item.totalItem}</button>
              <button onClick={() => {
                if (item.totalItem === 1) {
                  window.alert("Can't decrease")
                  return;
                } else {
                  handleamount(-1, item.bookId)
                }
              }}>-</button>
            </div>
            <span>${item.price * item.totalItem}</span>
            <button onClick={() => removeFromCart(item.bookId)}>Remove</button>
          </div>
        ))
      }
      <div className="total">
        <span>Total Price of Cart</span>
        <span>$-{price}</span>
      </div>

    </div>
  )
}

export default Cart
