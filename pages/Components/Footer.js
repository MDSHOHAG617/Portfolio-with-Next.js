import Link from "next/link";
import React from "react";
import logo from "../../public/images/logo.jpg";
import { useRouter } from "next/router";
import styles from "../../styles/Navbar.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <div className="fixed left-0 top-0 hidden lg:block   h-screen bg-[#111418] text-white p-16 z-20 topNav">
        <Image
          className=" lg:w-36 rounded-full mx-auto "
          src={logo}
          alt="Picture of the author"
        />
        <p className="  lg:text-xl font-bold text-center mt-2 mb-16">
          <span className="">Md Shohag Mia</span>
        </p>
        <p className="text-center text-lg font-semibold">
          <Link className={router.asPath == "/" ? styles.active : ""} href="/">
            Home
          </Link>
        </p>

        <p className="text-center text-lg font-semibold my-4">
          <Link
            className={router.asPath == "/#about" ? styles.active : ""}
            href="/#about"
          >
            About Me
          </Link>
        </p>

        <p className="text-center text-lg font-semibold my-4">
          <Link
            className={router.asPath == "/#projects" ? styles.active : ""}
            href="/#projects"
          >
            Projects
          </Link>
        </p>

        <p className="text-center text-lg font-semibold my-4">
          <Link
            className={router.asPath == "/#blogs" ? styles.active : ""}
            href="/#blogs"
          >
            {" "}
            Blogs
          </Link>
        </p>

        <p className="text-center text-lg font-semibold my-4">
          <Link
            className={router.asPath == "/#others" ? styles.active : ""}
            href="/#others"
          >
            {" "}
            Others
          </Link>
        </p>

        <div className="social grid grid-cols-4 mt-20">
          <Link
            className="mr-3 hover:text-[#15aa97]"
            href="https://github.com/MDSHOHAG617"
          >
            <FaGithub className=" lg:text-2xl" />
          </Link>
          <Link
            className="hover:text-[#15aa97]"
            href="https://www.linkedin.com/in/md-shohag007/"
          >
            <FaLinkedin className=" lg:text-2xl" />
          </Link>
          <Link
            className="hover:text-[#15aa97]"
            href="https://www.facebook.com/profile.php?id=100004130176262"
          >
            <FaFacebook className=" lg:text-2xl" />
          </Link>
          <Link
            className="hover:text-[#15aa97]"
            href="https://twitter.com/cr007_jb"
          >
            <FaTwitterSquare className=" lg:text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
