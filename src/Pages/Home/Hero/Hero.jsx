import React from "react";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineViewComfy } from "react-icons/md";
import myImg from '../../../assets/shakil.png'
import { AiFillTwitterCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <div id="home" className="md:flex space-y-10 md:space-y-0 gap-5 justify-between items-center max-w-[1350px] mx-auto min-h-[calc(100vh-73px)] sm:py-20 py-15 sm:px-10 px-5 text-white">
      {/* text content */}
      <div className="lg:-mt-8">
        <h1 className="text-primary md:text-3xl text-[26px] font-extrabold md:leading-11">
          Hello👋 <br /> I'm <span className="text-white">Shakil Ahmed</span>, <br />{" "}
          <span className="bg-linear-to-r from-primary to-[#81c41c] bg-clip-text text-transparent md:text-4xl text-[28px]">MERN Stack Developer</span>
        </h1>
        <p className="max-w-[600px] sm:text-md text-sm mb-5 sm:mt-4 mt-2">
          I am crafting modern, high-performance web applications from frontend
          to backend, delivering seamless user experiences and scalable backend
          solutions.
        </p>
        <div className="flex gap-5 items-center mb-8 mt-6">
            <hr  className="text-white w-20"/>
            <a href="https://github.com/shakilahamed07" target="blank"><FaGithub size={20} className="hover:scale-150 transition-all"/></a>
            <a href="https://www.linkedin.com/in/shakil-ahmed-745566379/" target="blank" ><FaLinkedin size={20} className="hover:scale-150 transition-all"/></a>
            <a href="https://www.facebook.com/AdnanShakilAyan/" target="blank"><FaFacebook size={20} className="hover:scale-150 transition-all"/></a>
            <a href="https://x.com/shakilahamed07" target="blank"><AiFillTwitterCircle size={22} className="hover:scale-150 transition-all"/></a>
            <hr  className="text-white w-20"/>
        </div>
        <div className="space-x-5">
        <button className="btn btn-primary bg-primary px-5 font-bold text-white border-none rounded-xl shadow-2xl shadow-primary hover:scale-95 transition-all">
            <FaDownload />
            Resume
          </button>
          <a href="#projects" className="btn btn-outline border border-primary text-white btn-primary bg-secondary rounded-xl shadow-sm hover:shadow-md  shadow-primary hover:scale-95 transition-all">
          <MdOutlineViewComfy />
            Viw Project
          </a>
        </div>
      </div>

      {/* img */}
      <div className="">
        <div className="max-w-[400px] mx-auto bg-primary rounded-full shadow-2xl shadow-primary">
            <img className="rounded-full pt-10" src={myImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
