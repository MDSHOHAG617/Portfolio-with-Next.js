import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/images/logo.JPG";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="navbar pr-8 lg:px-12 py-4">
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
                <Link className="text-md  font-semibold" href="/">
                  Home
                </Link>
              </li>
              <li tabIndex={0}>
                <Link className="text-md  font-semibold " href="/about">
                  About Me
                </Link>
              </li>

              <li>
                <Link className="text-md  font-semibold" href="/whatIDo">
                  what I Do
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
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="text-md  font-semibold" href="/">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link className="text-md  font-semibold mx-4" href="/about">
                About Me
              </Link>
            </li>

            <li>
              <Link className="text-md  font-semibold" href="/whatIDo">
                what I Do
              </Link>
            </li>
            <li>
              <Link className="text-md  font-semibold mx-4" href="/resume">
                Resume
              </Link>
            </li>
            <li>
              {" "}
              <Link className="text-md font-semibold" href="/myWork">
                My Work
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className="text-md  font-semibold mx-4"
                href="/achievements"
              >
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
        <div className="navbar-end">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
