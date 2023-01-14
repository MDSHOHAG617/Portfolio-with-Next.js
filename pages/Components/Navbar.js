import Link from "next/link";
import React from "react";
import logo from "../../public/images/logo.jpg";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="navbar px-4 lg:px-8">
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
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/others">Others</Link>
              </li>
            </ul>
          </div>
          <a className="  lg:text-xl mr-3">Md's Portfolio</a>
          <Image
            className="w-8 lg:w-10 rounded-full "
            src={logo}
            alt="Picture of the author"
            // width="100px"
            // height="100px"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/project">Projects</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/others">Others</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Get started</a> */}
          <Link className="mr-3" href="https://github.com/MDSHOHAG617">
            <FaGithub className="text-2xl lg:text-3xl" />
          </Link>
          <Link className="" href="https://www.linkedin.com/in/md-shohag007/">
            <FaLinkedin className="text-2xl lg:text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
