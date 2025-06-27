import React, { useEffect } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { ReactTyped } from 'react-typed'
// import {  } from 'mongoose'


const Course = () => {
  const [book, setBook] = useState([]);
  const [filter, setFilter] = useState('');





  // GET THE USER DATA FROM THE LOCAL STORAGE
  const user = JSON.parse(localStorage.getItem("Users"));

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book")
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  }, [])


//  const r= book.filter((item) => 
//      item.name.includes('History Book') ||
//      item.name.includes('Story Book'))
//       console.log(r);


  const addToCart = (book) => {
    axios.post("http://localhost:4001/user/addToCart", { email: user.email, book })
      .then((res) => {
        if (res.data) {
          localStorage.setItem("Users", JSON.stringify(res.data.user))
          window.alert("Item added to the cart")
        } else window.alert("something went wrong")
      })
      .catch(err => console.error(`Item couldn't be added to cart --> ${err}`))
  }

  return (
    <>

      <div className='max-w-screen-2xl mx-auto container md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center' >
          <h1 className='text-3xl  md:text-4xl'>
            We're delighted to <span className='text-red-500'>
              <ReactTyped className='text-red-500'
                strings={["have you here!:)"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              /></span></h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel natus maiores molestiae placeat. Tenetur esse odit saepe perspiciatis sapiente vitae voluptates ea, deleniti in tempore labore, alias fuga quos laboriosam.</p>
          <Link to='/'>
            <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer">Back</button>
          </Link>
          <div className="hidden md:block">
              <label className="px-3 py-2 border rounded-md flex items-center gap-2">
                <input
                  type="text"
                  className="grow outline-none"
                  placeholder="Search Course in Uppercase"
                  autoComplete="off" 
                  onChange={(e)=>setFilter(e.target.value)}             
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4'>
        {
          book.filter((item) =>
            item.name.includes(filter)
          )
            .map((item) => (
              <Cards key={item.bookId} item={item} addToCart={addToCart} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
