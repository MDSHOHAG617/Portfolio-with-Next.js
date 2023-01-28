import React from "react";

const About = () => {
  return (
    <div className="" id="about">
      <div>
        <h1 className=" hidden lg:block lg:text-9xl font-bold text-center text-[#9AA1AE] opacity-5 lg:my-12 ml-32">
          ABOUT ME
        </h1>
        <div className="lg:absolute bottom-[-175px] left-1/2 my-8 ">
          <h2 className="text-White text-2xl lg:text-4xl font-bold text-center">
            Know Me More
          </h2>
          <hr className="bg-success border-none w-4/12 h-[3px] mx-auto mt-2"></hr>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-0 lg:ml-56 items-center">
          <div>
            <h1 className="lg:text-[27px] font-bold mb-4">
              I am <span className="text-success ">Md Shohag Mia,</span> a Web
              Developer
            </h1>
            <p className="text-md text-justify font-semibold">
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
              <br />
              <br /> Delivering work within time and budget which meets clients
              requirements is our moto. Lorem Ipsum has been the industries
              standard dummy text ever when an unknown printer took a galley.
            </p>
          </div>
          <div className=" lg:ml-12">
            <p className="text-lg font-semibold">
              <span className="font-bold text-white">Name:</span> Md Shohag Mia
            </p>
            <hr className="w-10/12 my-2 h-[1px] bg-[#696B67] border-none" />
            <p className="text-lg font-semibold">
              <span className="font-bold text-white">Email:</span>{" "}
              <span className="text-success">mdshohag.dev@gmail.com</span>
            </p>

            <hr className="w-10/12 my-2 h-[1px] bg-[#696B67] border-none" />
            <p className="font-semibold text-lg">
              <span className="font-bold text-white">Age:</span> 24
            </p>

            <hr className="w-10/12 my-2 h-[1px] bg-[#696B67] border-none" />
            <p className="font-semibold text-lg">
              <span className="font-bold text-white">From:</span> Tongi, Gazipur
            </p>
            <button className="btn btn-md btn-success text-white px-10 rounded-full  mt-3">
              Download Cv
            </button>
          </div>
        </div>
      </div>
      <div className=" lg:ml-36 px-12 lg:px-24 mt-8 lg:mt-20  grid grid-cols-2 lg:grid-cols-4 gap-4 items-center ">
        <div className="  items-center mx-auto">
          <div className="text-center">
            <h1 className=" text-3xl lg:text-5xl font-bold ">2+</h1>
            <p className="font-semibold mt-4">Years Experience</p>
          </div>
        </div>
        <div className="items-center mx-auto">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl font-bold">5+</h1>
            <p className="font-semibold mt-4">Happy Clients</p>
          </div>
        </div>
        <div className=" items-center mx-auto">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl font-bold">60+</h1>
            <p className="font-semibold mt-4">Projects Done</p>
          </div>
        </div>

        <div className=" items-center mx-auto">
          <div className="text-center">
            <h1 className="text-3xl lg:text-5xl font-bold">3+</h1>
            <p className="font-semibold mt-4">Get Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
