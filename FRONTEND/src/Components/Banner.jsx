import React from 'react'
import book from '../../public/book lover.jpg'
import {ReactTyped} from 'react-typed'

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
                        <label className="input input-bordered  flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text"  placeholder="Email" />
                        </label>
                    </div>
                    <button className="btn bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer mt-6">Get Started</button>
                </div>
                <div className=' dark:bg-slate-900 dark:text-white order-1 w-full md:w-1/2 '>
                    <img src={book}  className='rounded-3xl w-82 h-82 ' alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner
