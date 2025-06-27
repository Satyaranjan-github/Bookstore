import React from "react";
import openbook from "../../public/openbook.jpg";
import friend from "../../public/friend.png";
import mission from "../../public/mission.jpg";
import value from "../../public/values.png";
import p1 from "../../public/p1.png";
import p2 from "../../public/p2.png";
import p3 from "../../public/p3.png";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

const About = () => {
  return (
    // className='max-w-screen-2xl mx-auto container md:px-20 px-4 flex flex-col md:flex-row  my-24 md:gap-12'
    <>
      <div>
        <div className="max-w-screen-2xl mx-auto container md:px-20 px-4 flex flex-col md:flex-row  my-24 md:gap-12">
          <div className="md:order-1 order-2 w-full md:w-1/2 md:mt-32 mt-12">
            <div className="text-5xl font-bold">
              <h1 className=" font-bold">
                About{" "}
                <span className="text-red-500">
                  <ReactTyped
                    className="text-red-500"
                    strings={["Us !!!"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </span>
              </h1>
            </div>
            <p className="text-xl mt-6 text-justify">
              At Book Haven, we believe in the magic of books. Our mission is to
              create a community where readers and writers come together to
              celebrate stories that inspire, educate, and entertain. Whether
              you're an avid reader or just discovering the joy of books, we're
              here to help you find your next great read.
            </p>
          </div>
          <div className="hover:scale-105 duration-200 order-1 w-full md:w-1/2 ">
            <img src={openbook} className="rounded-full w-82 h-82 " alt="" />
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto container md:px-20 px-4 flex flex-col md:flex-row  my-24 md:gap-12">
          <div className="hover:scale-105 duration-200 order-1 w-full md:w-1/2 ">
            <img src={friend} className="rounded-full w-82 h-82 " alt="" />
          </div>
          <div className="md:order-1 order-2 w-full md:w-1/2 md:mt-32 mt-12">
            <div className="text-5xl font-bold">
              <h1 className=" font-bold">
                Our{" "}
                <span className="text-red-500">
                  <ReactTyped
                    className="text-red-500"
                    strings={["Story ..."]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </span>
              </h1>
            </div>
            <p className="text-xl mt-6 text-justify">
              Book Haven was founded in 2015 by a group of friends with a shared
              passion for literature. Frustrated by the limited selection at
              local bookstores and the impersonal nature of online shopping, we
              set out to build a place where book lovers could feel at home.
              Starting from a small storefront, we have grown into a beloved
              local institution and a bustling online shop, offering a carefully
              curated selection of books across all genres.
            </p>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto container md:px-20 px-4 flex flex-col md:flex-row  my-24 md:gap-12">
          <div className="md:order-1 order-2 w-full md:w-1/2 md:mt-32 mt-12">
            <div className="text-5xl font-bold">
              <h1 className=" font-bold">
                Our Mission{" "}
                <span className="text-red-500">
                  <ReactTyped
                    className="text-red-500"
                    strings={["and Our Vision!!!"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </span>
              </h1>
            </div>
            <div className="text-xl mt-6 text-justify">
              <p>
                <span className="text-red-500">Mission:</span>To inspire a love
                of reading by providing a diverse selection of books and a
                welcoming space for book lovers to connect. <br /> <br />
              </p>
              <p>
                <span className="text-red-500">Vision:</span>To be a leading
                bookstore that champions diverse voices, fosters community, and
                promotes lifelong learning.
              </p>
            </div>
          </div>
          <div className="hover:scale-105 duration-200 order-1 w-full md:w-1/2 ">
            <img src={mission} className="rounded-full w-82 h-82 " alt="" />
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto container md:px-20 px-4 flex flex-col md:flex-row  my-24 md:gap-12 md:mt-32 mt-12">
          <div className="hover:scale-105 duration-200 order-1 w-full md:w-1/2 h-1/2 ">
            <img src={value} className="rounded-full w-82 h-82 " alt="" />
          </div>
          <div className="md:order-1 order-2 w-full md:w-1/2 md:mt-32 mt-12">
            <div className="text-5xl font-bold">
              <h1 className=" font-bold">
                Our
                <span className="text-red-500">
                  <ReactTyped
                    className="text-red-500"
                    strings={["Values..."]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </span>
              </h1>
            </div>
            <div className="text-xl mt-6 text-justify">
              <p>
                <span className="text-red-500">Customer-Centric:</span>We put
                our customers at the heart of everything we do, ensuring a
                personalized and delightful shopping experience.
                <br /> <br />
              </p>
              <p>
                <span className="text-red-500">Community-Oriented: </span>We
                support our local community through events, author readings, and
                partnerships with local schools and organizations. <br /> <br />
              </p>
              <p>
                <span className="text-red-500">Diverse and Inclusive:</span>We
                celebrate diverse voices and strive to offer a wide range of
                books that reflect the experiences and stories of all people.
                <br /> <br />
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto container md:px-20 px-4 flex flex-col md:flex-row  my-24 md:gap-12 md:mt-32 mt-12">
          <div className="md:order-1 order-2 w-full  md:mt-32 mt-12">
            <div className="text-5xl font-bold">
              <h1 className=" font-bold">
                Meet The 
                <span className="text-red-500">
                  <ReactTyped
                    className="text-red-500"
                    strings={["Team..."]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </span>
              </h1>
            </div>
            <p className="text-xl mt-6  text-justify">
              Our dedicated team is passionate about books and committed to
              providing excellent service.
            </p>
            <div className="mt-6 flex items-center gap-4 space-x-9 justify-center">
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200">
  <figure ><img src={p1} /></figure>
  <div className="card-body">
    <h2 className="card-title">Sarah Thompson, Founder & CEO: </h2>
    <p> With a background in literature and a lifelong love of books, Sarah leads Book Haven with a vision for community and connection.</p>
    <div className="card-actions justify-end">
      <Link to="/contact">
      <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer">Contact</button>
      </Link>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200">
  <figure ><img src={p2} /></figure>
  <div className="card-body">
    <h2 className="card-title">James Allen, Head of Customer Experience:</h2>
    <p>James ensures that every customer interaction is positive, overseeing our customer service and outreach programs.</p>
    <div className="card-actions justify-end">
      <Link to="/contact">
      <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer">Contact</button>
      </Link>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200">
  <figure><img src={p3} /></figure>
  <div className="card-body">
    <h2 className="card-title">Emily Ramirez, Senior Buyer:</h2>
    <p> Emily curates our book selection, working tirelessly to bring in both bestsellers and hidden gems.</p>
    <div className="card-actions justify-end">
      <Link to="/contact">
      <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer">Contact</button>
      </Link>
    </div>
  </div>
</div>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
