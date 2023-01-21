import Image from "next/image";
import React from "react";
import banner from "../../public/images/banner.jpg";
import author from "../../public/images/profile3.png";

import { Typewriter } from "react-simple-typewriter";
import Footer from "./Footer";
const Hoome = () => {
  return (
    <div id="#home">
      <div className=" grid grid-cols-1 lg:grid-cols-2 items-center  ">
        <div>
          <p className="text-3xl font-semibold">Hi, I'm Md Shohag</p>
          <span
            style={{ color: "white", fontWeight: "bold", fontSize: "40px" }}
          >
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "A MERN stack Developer",
                "A React.js Developer",
                "A Frontend Developer",
                ,
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </span>

          <p className="text-xl font-semibold text-left ">
            Student Of Computer Science And Information Technology at
            Shanto-Mariam University Of Creative Technology
          </p>
          <button className="hover:border-[#20C997]  px-10  text-center text-[#20C997] hover:border py-3 rounded-full hover:bg-[#20C997] hover:text-white transition delay-150 justify-center ">
            Hire Me
          </button>
        </div>
        <Image className="" src={author}></Image>
      </div>
      {/* <Image className="relative top-0 opacity-30" src={banner}></Image> */}
    </div>
  );
};

export default Hoome;
