import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards'
import axios from 'axios'

import { useEffect, useState } from 'react'

const FreeBook = () => {
  const [book, setBook] = useState([]);

  // GET THE USER DATA FROM THE LOCAL STORAGE
  const user = JSON.parse(localStorage.getItem("Users"));


  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book")
        const data = res.data.filter((item) => item.category === "free")
        setBook(data)

      } catch (error) {
        console.log(error)
      }
    }
    getBook()
  }, [])

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

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className='max-w-screen-2xl mx-auto container md:px-20 px-4'>
        <div> <h1 className='font-semibold text-xl py-2'>Free Offered Courses</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur vitae esse tempora recusandae quidem perferendis obcaecati maiores eos aliquam accusantium sapiente, qui sequi possimus neque corrupti vero ipsam sit totam.</p>
        </div>

        <div>
          <div className="slider-container">
            <Slider {...settings}>
              {
                book.map((item) => (
                  <Cards key={item.bookId} item={item} addToCart={addToCart} />
                ))
              }
            </Slider>
          </div>
        </div>

      </div>
    </>
  )
}

export default FreeBook
