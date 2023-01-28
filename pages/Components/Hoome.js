import Image from "next/image";
import React from "react";
import banner from "../../public/images/banner7.jpg";
import author from "../../public/images/profile3.png";

import { Typewriter } from "react-simple-typewriter";
import Footer from "./SideNav";
const Hoome = () => {
  return (
    <div id="#home">
      <div
        style={{
          backgroundImage: `url(${banner.src})`,
          width: "100%",
          height: "100vh ",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=""
      >
        <div className="text-white text-center items-center lg:p-52 lg:ml-32 py-32">
          <p className="text-2xl font-semibold mb-4">Hi, I am Md Shohag</p>

          <span
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "40px",
              margin: "10px",
            }}
          >
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "A Frontend Developer",
                "A MERN stack Developer",
                "A React.js Developer",
                "A Next.js Developer",
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </span>

          <p className="text-xl  mt-4 mx-12">
            Student Of Computer Science And Information Technology at
            Shanto-Mariam University Of Creative Technology
          </p>
          <button className="btn btn-md btn-success hover:text-white text-success bg-transparent px-10 rounded-full hover: mt-8">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hoome;
