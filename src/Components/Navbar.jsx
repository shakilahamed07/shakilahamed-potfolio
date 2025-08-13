import React from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router";
import logo from "../../public/ShakilAhmed.png";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a href="#home" className="mb-2 md:mb-0 font-medium hover:bg-[#2e2e2e] focus:text-primary">
          Home
        </a>
      </li>
      <li>
        <a href="#about-me" className="mb-2 md:mb-0 font-medium hover:bg-[#2e2e2e] focus:text-primary">
          About
        </a>
      </li>
      <li>
        <a href="#skills" to="/" className="mb-2 md:mb-0 font-medium hover:bg-[#2e2e2e] focus:text-primary">
         Skills
        </a>
      </li>
      <li>
        <a href="#projects" className="mb-2 md:mb-0 font-medium hover:bg-[#2e2e2e] focus:text-primary">
         Projects
        </a>
      </li>
      <li>
        <a href="#contactUs" className="mb-2 md:mb-0 font-medium hover:bg-[#2e2e2e] focus:text-primary">
          Contact Us
        </a>
      </li>
    </>
  );
  return (
    <div className="bg-linear-to-t from-[#1b1a1a] to-secondary shadow-2">
      <div className="navbar  text-white max-w-[1350px] mx-auto py-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="lg:hidden  text-white"
            >
              <IoMenu size={33} />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-1 -ml-3 w-[200px] min-h-[calc(100vh-0px)] shadow-2xl -mt-12 bg-linear-to-t from-[#1b1a1a] to-secondary text-white"
            >
              <img className="w-8 ml-3 mb-5 mt-2 " src={logo} alt="" />
              {links}
            </ul>
          </div>
          <img className="w-8 ml-3 hidden lg:block" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary bg-primary px-3 font-bold text-white border-none rounded-xl hover:bg-[#44a158] hover:scale-95 transition-all">
            <FaDownload />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
