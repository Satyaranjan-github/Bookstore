import React, { useEffect } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { ReactTyped } from 'react-typed'


const Course = () => {
  const [book, setBook] = useState([]);
  

  useEffect(() => {
    const getBook = async () => {
      try{
        const res=await axios.get("http://localhost:4001/book")
        console.log(res.data)
        setBook(res.data)
      }catch(error){
        console.log(error)
      }
    }
    getBook()
  },[])

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
        </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4'>
        {
          book.map((item) => (
            <Cards key={item.id} item={item} />
          ))
        }
      </div>
      </div>
    </>
  )
}

export default Course
