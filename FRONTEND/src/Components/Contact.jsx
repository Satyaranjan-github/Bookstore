import React from "react";
import "../Components/Contact.css";
import { ReactTyped } from "react-typed";


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "49a7ad45-8ad1-43cc-a226-0323933286bc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto container md:px-20 px-4   my-24 md:gap-12">
        <br />
        <br />
        <h1 className="text-4xl font-bold text-black text-center ">
          Let's Start <span> 
          <ReactTyped
                    className="text-red-500"
                    strings={["Conversation..."]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                  </span>
                       </h1>
        <div className="mt-6 flex items-center gap-4 space-x-9 justify-center flex md:flex-row flex-col">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Meet Us</h2>
              <p>Mail Id. : <a href="#" className="text-blue-500 hover:text-blue-700 underline hover:no-underline">Contact@bookstore.com</a></p>
              <p>Phone: <a href="#" className="text-blue-500 hover:text-blue-700 underline hover:no-underline">+(123) 456-7890</a></p>
              <p>Address: 123 Book Street, Literature City, State, ZIP</p>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl md:order-2 order-2">
            <div className="card-body">
              <h2 className="card-title">Pitch Us</h2>
              <p>hello,<br /> <br /></p>
            <form onSubmit={onSubmit} >
              <label >My Name  is</label><input type="text" placeholder="Name" className="border border-black outline-none p-2 rounded-md w-full mb-3" required/>
              <label> my Email Id</label> <input type="mail" placeholder="Email" className="border border-black outline-none p-2 rounded-md w-full mb-3" required/>
              <label>I want to discuss about </label><textarea  rows="6" placeholder="Message" className="border border-black outline-none p-2 rounded-md w-full" required></textarea>
              <button type="submit" className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer my-3 mx-auto">Submit</button>
              <br />
              <span className="text-green-500 text-center mt-3 ">{result}</span>
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
