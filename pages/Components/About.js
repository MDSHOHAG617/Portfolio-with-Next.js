import React from "react";

const About = () => {
  return (
    <div className="  justify-center" id="about">
      <h1 className=" hidden lg:block lg:text-9xl font-bold text-center text-[#9AA1AE] opacity-5 lg:my-12 ml-32">
        ABOUT ME
      </h1>
      <div className="lg:absolute bottom-[-175px] left-1/2 my-8 lg:my-">
        <h2 className="text-White text-4xl font-bold">Know Me More</h2>
        <hr className="bg-success border-none w-4/12 h-[3px] mx-auto mt-2"></hr>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-56 items-center">
        <div>
          <h1 className="text-[27px] font-bold mb-4">
            I'm <span className="text-success ">Md Shohag Mia,</span> a Web
            Developer
          </h1>
          <p className="text-md text-justify font-semibold">
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
            <br />
            <br /> Delivering work within time and budget which meets client’s
            requirements is our moto. Lorem Ipsum has been the industry's
            standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>
        <div className="ml-12">
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
  );
};

export default About;
