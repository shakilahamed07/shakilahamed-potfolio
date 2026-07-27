import React from "react";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineViewComfy } from "react-icons/md";
import myImg from "../../../assets/shakil.png";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useTypewriter } from "react-simple-typewriter";
import { easeInOut, motion } from "motion/react";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Full Stack Developer"],
    loop: 0,
  });

  return (
    <div
      id="home"
      className="md:flex space-y-10 md:space-y-0 gap-5 justify-between items-center max-w-[1350px] mx-auto min-h-[calc(100vh-73px)] sm:py-20 py-15 sm:px-10 px-5 text-white"
    >
      {/* text content */}
      <div className="lg:-mt-8 ">
        <motion.h1
        viewport={{ once: true }}
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          className="text-primary md:text-3xl text-[26px] font-extrabold md:leading-11"
        >
          Hello👋 <br /> I'm <span className="text-white">Shakil Ahmed</span>,{" "}
          <br />{" "}
          <span className="bg-linear-to-r from-primary to-[#81c41c] bg-clip-text text-transparent md:text-4xl text-[28px]">
            {text}
            <span className="text-2xl">_</span>{" "}
          </span>
        </motion.h1>
        <motion.p
          viewport={{ once: true }}     
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
          className="max-w-[600px] sm:text-md text-sm mb-5 sm:mt-4 mt-2"
        >
          I am crafting modern, high-performance web applications from frontend
          to backend, delivering seamless user experiences and scalable backend
          solutions.
        </motion.p>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.9 } }}
          className="flex gap-5 items-center mb-8 mt-6"
        >
          <motion.hr viewport={{ once: true }} initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6, delay: 0 } }} className="text-white w-20" />
          <motion.a viewport={{ once: true }} whileInView={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 0.5,
              repeat: 2,
              repeatDelay: 3,
              ease: "easeOut",
            }} href="https://github.com/shakilahamed07" target="blank">
            <FaGithub size={20} className="hover:scale-150 transition-all" />
          </motion.a>
          <motion.a viewport={{ once: true }} whileInView={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 0.6,
              repeat: 2,
              repeatDelay: 3,
              ease: "easeOut",
            }} href="https://www.linkedin.com/in/shakilahmed-me/" target="blank">
            <FaLinkedin size={20} className="hover:scale-150 transition-all" />
          </motion.a>
          <motion.a viewport={{ once: true }} whileInView={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 0.7,
              repeat: 2,
              repeatDelay: 3,
              ease: "easeOut",
            }} href="https://www.facebook.com/shakilahmed.io/" target="blank">
            <FaFacebook size={20} className="hover:scale-150 transition-all" />
          </motion.a>
          <motion.a viewport={{ once: true }} whileInView={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 0.8,
              repeat: 2,
              repeatDelay: 3,
              ease: "easeOut",
            }} href="https://x.com/shakilahamed07" target="blank">
            <AiFillTwitterCircle
              size={22}
              className="hover:scale-150 transition-all"
            />
          </motion.a>
          <motion.hr viewport={{ once: true }} initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.5 } }} className="text-white w-20" />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className="space-x-5"
        >
          <a
            href="https://drive.google.com/file/d/1u3WYPeEfzF_OvAPgwLqvTfoD-M1nJReX/view?usp=drive_link"
            target="blank"
            className="btn btn-primary bg-primary px-5 font-bold text-white border-none rounded-xl shadow-2xl shadow-primary hover:scale-95 transition-all"
          >
            <FaDownload />
            Resume
          </a>
          <a
            href="#projects"
            className="btn btn-outline border border-primary text-white btn-primary bg-secondary rounded-xl shadow-sm hover:shadow-md  shadow-primary hover:scale-95 transition-all"
          >
            <MdOutlineViewComfy />
            Viw Project
          </a>
        </motion.div>
      </div>

      {/* img */}
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        className=""
      >
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: easeInOut }}
          className="max-w-100 mx-auto bg-primary rounded-full shadow-2xl shadow-primary"
        >
          <img className="rounded-full pt-10" src={myImg} alt="" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
