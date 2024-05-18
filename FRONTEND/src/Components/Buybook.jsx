import React from 'react'
const Buybook = () => {
  return (
    <>
     <div className='min-h-screen flex justify-center items-center gap-4 font-bold' >
     <div > 
        <div className='border border-blue-500 md:w-[500px] w-[300px] p-10 rounded-md'>
         <p >Name:</p>
          <input type="text"  placeholder='Enter your Name' className='border outline-none p-2 rounded-md md:w-full w-[200px]'/>
          <p >Email:</p>
          <input type="text"  placeholder='Enter your Name' className='border  outline-none p-2 rounded-md md:w-full w-[200px]'/>
          <p >Message:</p>
          <textarea  cols="30" rows="10" placeholder='Enter your Message' className='border   outline-none p-2 rounded-md md:w-full w-[200px]'></textarea>
          
        <button className='bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer' >Submit</button>
        
         </div>
         
        </div>
      
     </div>
    </>
  )
}

export default Buybook
