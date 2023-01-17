import Image from "next/image";
import React from "react";
import profile from "../../public/images/profile3.png";
import { Typewriter } from "react-simple-typewriter";

const Hoome = () => {
  return (
    <div className="" id="#home">
      <div className=" hero-content flex-col lg:flex-row-reverse ">
        {" "}
        <div className="">
          <Image
            className="w-64 lg:w-100 "
            src={profile}
            alt="Picture of the author"
          />
        </div>
        <div className="w-96">
          {" "}
          <h1 className="text-2xl lg:text-5xl font-bold font-serif">
            Hello! I’m Md Shohag
          </h1>
          <span
            style={{ color: "slateblue", fontWeight: "bold", fontSize: "20px" }}
          >
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["A MERN stack web developer", "Sleep", "Code", "Repeat!"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
          <p className="py-6 text-justify">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hoome;
