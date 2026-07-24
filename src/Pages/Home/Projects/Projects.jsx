"use client";
import React from "react";
import { useLoaderData } from "react-router";
import ProjectCard from "./ProjectCard";
import { motion } from "motion/react";

const Projects = () => {
  const projects = useLoaderData();

  return (
    <div id="projects" className="pt-20 px-4 max-w-[1350px] mx-auto text-white">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8, delay: 0.3 } }}
        data-aos="zoom-out"
        className="text-3xl font-medium mb-4 text-center"
      >
        Featured Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.9, delay: 0.3 } }}
        className="mb-6 max-w-105 mx-auto text-center text-gray-300 text-sm sm:text-[16px]"
      >
        A showcase of my recent work, featuring modern web applications built
        with cutting- edge technologies
      </motion.p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => {
          return (
            <motion.span
              initial={{ opacity: 0, y: 300 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0,
                  duration: project.id == 1 ? 0.7 : project.id == 2 ? 0.8 : 0.9,
                },
              }}
            >
              <ProjectCard key={project.id} project={project} />
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
