import Link from "next/link";
import React from "react";
import logo from "../../public/images/logo.jpg";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div className="">
      <div className="hidden lg:block  fixed h-screen bg-[#111418] text-white p-16 z-20 topNav">
        <Image
          className=" lg:w-36 rounded-full mx-auto"
          src={logo}
          alt="Picture of the author"
        />
        <p className="  lg:text-xl font-bold text-center mt-2 mb-16">
          <span className={styles.red}>Md Shohag Mia</span>
        </p>
        <p className="text-center text-lg font-semibold">
          <Link
            className={router.asPath == "/#navbar" ? styles.active : ""}
            href="#navbar"
          >
            Home
          </Link>
        </p>

        {/* <a
          href="#navbar"
          className={router.asPath == "/#navbar" ? styles.active : ""}
        >
          home
        </a> */}

        <p className="text-center my-4">
          <Link className="text-lg font-semibold" href="#about">
            About Me
          </Link>
        </p>
        <p className="text-center ">
          <Link className="text-lg font-semibold" href="#projects">
            Projects
          </Link>
        </p>
        <p className="text-center my-4">
          <Link className="text-lg font-semibold" href="#blogs">
            Blogs
          </Link>
        </p>
        <p className="text-center ">
          <Link className="text-lg font-semibold " href="#others">
            Others
          </Link>
        </p>
        <div className="social grid grid-cols-4 mt-20">
          <Link className="mr-3" href="https://github.com/MDSHOHAG617">
            <FaGithub className="text-2xl lg:text-3xl" />
          </Link>
          <Link className="" href="https://www.linkedin.com/in/md-shohag007/">
            <FaLinkedin className="text-2xl lg:text-3xl" />
          </Link>
        </div>
      </div>
      <div className="navbar " id="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="#home">Home</Link>
              </li>

              <li>
                <Link href="#about">About</Link>
              </li>
              <li>
                <Link href="#projects">Projects</Link>
              </li>
              <li>
                <Link href="#blogs">Blogs</Link>
              </li>
              <li>
                <Link href="#others">Others</Link>
              </li>
            </ul>
          </div>
          <a className=" block lg:hidden lg:text-2xl font-bold mr-3 font-serif ">
            Md's Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
