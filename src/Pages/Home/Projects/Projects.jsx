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
      viewport={{ once: true }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3 } }}
        className="text-3xl font-medium mb-4 text-center"
      >
        Featured Projects
      </motion.h2>
      <motion.p
      viewport={{ once: true }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.9, delay: 0.3 } }}
        className="mb-6 max-w-105 mx-auto text-center text-gray-300 text-sm sm:text-[16px]"
      >
        A showcase of my recent work, featuring modern web applications built
        with cutting- edge technologies
      </motion.p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => {
          return (
              <ProjectCard key={project.id} project={project} />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
