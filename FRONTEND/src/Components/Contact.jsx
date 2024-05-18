import React from "react";
import "../Components/Contact.css";
import { ReactTyped } from "react-typed";

const Contact = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto container md:px-20 px-4   my-24 md:gap-12">
        <div className="contact md:w-full inset-0 opacity-50 ">
          <h1>
            <ReactTyped
              className="text-red-700 font-bold "
              strings={["Contact Us ..."]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </h1>
        </div>
        <br />
        <br />
        <h1 className="text-2xl font-bold text-black text-center ">
          Let's Start a conversation
        </h1>
        <div className="mt-6 flex items-center gap-4 space-x-9 justify-center flex md:flex-row flex-col">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Meet Us</h2>
              <p>Phone: <a href="#" className="text-blue-500 hover:text-blue-700 underline hover:no-underline">+(123) 456-7890</a></p>
              <p>Address: 123 Book Street, Literature City, State, ZIP</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl md:order-2 order-2">
            <div className="card-body">
              <h2 className="card-title">Pitch Us</h2>
              <p>hello,<br /> <br /></p>
              <p>my name is: <input type="text" placeholder="Enter your name" /> and my e-mail address is <input type="email" placeholder="Enter your email"/>and i would like to discuss about your book <input type="text" placeholder="Enter book name"/> .</p>
            </div>
            <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer my-3 mx-auto" onClick={() => alert("Thank you for contacting us!")}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
