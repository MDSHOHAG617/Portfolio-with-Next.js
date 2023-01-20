import Image from "next/image";
import React from "react";
import banner from "../../public/images/banner.jpg";
import { Typewriter } from "react-simple-typewriter";
const Hoome = () => {
  return (
    <div className="" id="#home">
      <Image className="" src={banner}></Image>
    </div>
  );
};

export default Hoome;
