import React from 'react'



const Cards = ({ item, addToCart }) => {
 
  return (
    <>
    <div className='mt-4 my-3 p-3'>
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
  <figure><img src={item.image} /></figure>
  <div className="card-body">
    <h2 className="card-title">
    {item.name}
      <div className="rounded-lg bg-red-500 text-white text-xs px-2">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions  flex justify-between">
      <div className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer">${item.price}</div> 
      <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer" onClick={() => addToCart(item)}>Add To Cart</button>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards
