import Image from "next/image";
import React from "react";
import banner from "../../public/images/banner.jpg";
import { Typewriter } from "react-simple-typewriter";
const Hoome = () => {
  return (
    <div className=" flex  justify-center  lg:mt-44 lg:ml-60" id="#home">
      <Image
        className="fixed lg:w-full lg:h-screen lg:top-0 opacity-95 items-center opacity-90"
        src={banner}
      ></Image>

      <h1 className=" z-50  mt-24 lg:mt-0  text-white text-sm lg:text-3xl font-semibold  ">
        Hello! I’m Md Shohag
      </h1>
      <div className="z-50 lg:absolute text-left fixed mt-28 lg:mt-16  ">
        <span
          className="text-xl lg:text-[50px]"
          style={{
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "px",
            marginTop: "15px",
          }}
        >
          <Typewriter
            words={[
              "A MERN stack developer",
              "A Front end developer",
              "A React.Js Developer",
              "A JavaScript Developer",
            ]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
      <button className="btn btn-xs lg:btn-md btn-outline  absolute mt-32 lg:mt-32 bg-transparent-400 border-green-400 text-green-400 hover:bg-green-400 hover:text-white lg:px-10 rounded-full hover:border-green-400 ">
        Hire me{" "}
      </button>
    </div>
  );
};

export default Hoome;
