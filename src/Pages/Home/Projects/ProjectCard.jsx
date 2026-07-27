import React from "react";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router";
import { motion } from "motion/react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div className="p-4 rounded-2xl bg-[#33333368] transition-all shadow-sm shadow-[#202020] flex flex-col justify-between h-full hover:scale-103">
      <div>
        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, delay: 0.2 },
          }}
          viewport={{ once: true }}
        >
          <img
            className="rounded-xl group-hover:scale-103 transition-all w-full object-cover sm:h-45 md:h-55 lg:h-45 xl:h-60"
            src={project.projectImage}
            alt=""
          />
        </motion.div>
        {/* Project Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, delay: 0.2 },
          }}
          viewport={{ once: true }}
          className="text-xl font-bold my-4 line-clamp-2"
        >
          {project.projectName}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, delay: 0.2 },
          }}
          viewport={{ once: true }}
          className="text-gray-300 line-clamp-3 mb-4"
        >
          {project.description.slice(0, 90)}..
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.7, delay: 0.2 },
        }}
        viewport={{ once: true }}
        className="flex justify-between items-center pt-2 mt-auto"
      >
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="hover:scale-105 transition-all py-2 flex items-center gap-2 text-blue-400 cursor-pointer focus:text-blue-600"
        >
          Live Demo <FaArrowUpRightFromSquare />
        </a>
        <Link
          to={`/projectDetails/${project.id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-primary px-3 py-2 rounded-lg flex items-center gap-2 hover:scale-97 transition-all text-white"
        >
          Details <FaArrowRight />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
