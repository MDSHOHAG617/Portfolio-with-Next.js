import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/images/logo.JPG";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="sticky top-0">
      <div className="navbar bg-[#4C4B51] pr-8 lg:px-12 py-4 block lg:hidden">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden ">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-[#15AA97] text-white "
            >
              <li>
                <Link className="text-md  font-semibold" href="/">
                  Home
                </Link>
              </li>
              <li tabIndex={0}>
                <Link className="text-md  font-semibold " href="/about">
                  About
                </Link>
              </li>

              <li>
                <Link className="text-md  font-semibold " href="/resume">
                  Resume
                </Link>
              </li>
              <li>
                {" "}
                <Link className="text-md  font-semibold" href="/myWork">
                  My Work
                </Link>
              </li>
              <li>
                {" "}
                <Link className="text-md  font-semibold " href="/achievements">
                  Achievements{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link className="text-md  font-semibold" href="/contact">
                  Contact{" "}
                </Link>
              </li>
            </ul>
          </div>

          <p className="text-md font-semibold lg:text-xl block lg:hidden">
            Md's Portfolio
          </p>
          <Image
            className="w-10 lg:w-12 rounded-full mx-auto lg:ml-4 block lg:hidden"
            src={logo}
            alt="Picture of the author"
          />
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="text-lg  font-semibold" href="/">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link className="text-lg  font-semibold mx-2" href="/about">
                About
              </Link>
            </li>

            <li>
              <Link className="text-lg  font-semibold mx-2" href="/resume">
                Resume
              </Link>
            </li>
            <li>
              {" "}
              <Link className="text-lg  font-semibold" href="/myWork">
                My Work
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className="text-lg  font-semibold mx-2"
                href="/achievements"
              >
                Achievements{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link className="text-lg  font-semibold" href="/contact">
                Contact{" "}
              </Link>
            </li>
          </ul>
        </div> */}
        <div className="navbar-end ">
          <Link
            className=" hover:text-[#15aa97] block lg:hidden"
            href="https://github.com/MDSHOHAG617"
          >
            <FaGithub className="text-2xl lg:text-4xl" />
          </Link>
          <Link
            className="mx-2 hover:text-[#15aa97] block lg:hidden"
            href="https://www.linkedin.com/in/md-shohag007/"
          >
            <FaLinkedin className="text-2xl lg:text-4xl" />
          </Link>
          <Link
            className="mr-2 hover:text-[#15aa97] block lg:hidden"
            href="https://www.facebook.com/profile.php?id=100004130176262"
          >
            <FaFacebook className=" text-2xl lg:text-4xl" />
          </Link>
          <Link
            className="hover:text-[#15aa97] block lg:hidden"
            href="https://twitter.com/cr007_jb"
          >
            <FaTwitterSquare className=" text-2xl lg:text-4xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
