import React from 'react'
import book from '../../public/book lover.jpg'
import {ReactTyped} from 'react-typed'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl mx-auto container md:px-20 px-4 flex flex-col md:flex-row  my-24 md:gap-12'>
                <div className='md:order-1 order-2 w-full md:w-1/2 md:mt-32 mt-12'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Hello, welcomes here to learn something <span className='text-red-500'>
                            <ReactTyped className='text-red-500'
                                strings={["new everyday!!!"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            /></span>
                       </h1>
                        <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit voluptates rerum repudiandae explicabo obcaecati modi magnam. Atque, sed nostrum! Harum similique cumque, blanditiis magni quisquam accusamus molestias dolore! Earum, esse.</p>
                    </div>
                    <Link to="/signup">
                    <button className="btn bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer mt-6">Get Started</button>
                    </Link>
                </div>
                <div className=' order-1 w-full md:w-1/2 '>
                    <img src={book}  className='rounded-3xl w-82 h-82 ' alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner
