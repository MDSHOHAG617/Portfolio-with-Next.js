import React from "react";
import { BiDesktop } from "react-icons/bi";

const WhatIDo = () => {
  return (
    <div className="lg:my-12 bg-[#212529]" id="whatIDo">
      <div className="">
        <h1 className=" hidden lg:block lg:text-9xl font-bold text-center text-[#9AA1AE] opacity-5 lg:my-12 lg:ml-32 lg:pt-8">
          SERVICES
        </h1>
        <div className="lg:absolute left-1/2 top-[1432px] mt-12 lg:mt-8 p-8 lg:p-0">
          <h2 className="text-White text-2xl lg:text-4xl font-bold text-center ">
            What I Do
          </h2>
          <hr className="bg-success border-none w-4/12 h-[3px] mx-auto mt-2"></hr>
        </div>
      </div>
      {/* Services */}
      <div className="lg:ml-32 grid grid-cols-1 px-8 lg:px-32 lg:grid-cols-2  text-justify gap-12 pb-12 ">
        <div className=" flex items-center ">
          <div className="p-4 bg-[#2A303C] text-success rounded-lg mr-4">
            {/* icons */}
            <BiDesktop className="text-3xl  " />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Web Design</h1>
            <p>
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
        </div>
        <div className="  flex items-center ">
          <div className="p-4 bg-[#2A303C] text-success rounded-lg mr-4">
            {/* icons */}
            <BiDesktop className="text-3xl  " />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Web Design</h1>
            <p>
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
        </div>
        <div className="  flex items-center ">
          <div className="p-4 bg-[#2A303C] text-success rounded-lg mr-4">
            {/* icons */}
            <BiDesktop className="text-3xl  " />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Web Design</h1>
            <p>
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
        </div>
        <div className=" flex items-center ">
          <div className="p-4 bg-[#2A303C] text-success rounded-lg mr-4">
            {/* icons */}
            <BiDesktop className="text-3xl  " />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Web Design</h1>
            <p>
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
