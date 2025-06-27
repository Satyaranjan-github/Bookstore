import React from "react";
import book from "../../public/book lover.jpg";

const Checkout = () => {
  return (
    <>
      <div className=" max-w-screen-2xl mx-auto container md:px-20 px-4 flex flex-col md:flex-row  my-24 md:gap-12">
        <form className="w-full md:w-1/2 md:mt-32 mt-12">
          <div className="flex flex-col gap-4 ">
            <h4 className="text-sm font-bold">
              <span className="text-red-500 text-xl">*</span>Enter Your Details
            </h4>
            <div className="flex flex-row gap-4 ">
              <input
                type="text"
                placeholder="Name"
                className="border border-black p-2 rounded-md  "
              />
              <input
                type="text"
                placeholder="Email"
                className="border border-black p-2 rounded-md  "
              />
            </div>
            <div className="flex flex-row gap-4 ">
              <input
                type="text"
                placeholder="Phone"
                className="border border-black p-2 rounded-md  "
              />
              <input
                type="text"
                placeholder="House No."
                className="border border-black p-2 rounded-md  "
              />
            </div>
            <div className="flex flex-row gap-4 ">
              <input
                type="text"
                placeholder="City"
                className="border border-black p-2 rounded-md  "
              />
              <input
                type="text"
                placeholder="Zip"
                className="border border-black p-2 rounded-md  "
              />
            </div>
            <div className="flex flex-row gap-4 ">
              <input
                type="text"
                placeholder="State"
                className="border border-black p-2 rounded-md  "
              />
              <input
                type="text"
                placeholder="Country"
                className="border border-black p-2 rounded-md  "
              />
            </div>
            <div className="flex flex-row gap-4 ">
              <input
                value="Shipping Fess:  $5"
                className="border border-black p-2 rounded-md "
                readOnly
              />
              <select className="border border-black p-2 rounded-md  ">
                <option>Payment </option>
                <option>Cash On Delivery</option>
              </select>
            </div>
            <div className="flex flex-row gap-4 ">
              <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer">
                Place Order
              </button>
            </div>
          </div>
        </form>
        <div className=" order-1 w-full md:w-1/2 ">
          <img src={book} className="rounded-3xl w-82 h-82 " alt="" />
        </div>
      </div>
    </>
  );
};

export default Checkout;
