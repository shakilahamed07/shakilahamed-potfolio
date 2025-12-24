"use client";
import React from "react";
import { useLoaderData } from "react-router";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = useLoaderData();

  return (
    <div
      id="projects"
      className="pt-20 px-4 max-w-[1350px] mx-auto text-white"
    >
      <h2 data-aos="zoom-out" className="text-3xl font-medium mb-6 text-center">
        My Recent Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            projects.map(project=> {
                return(
                    <ProjectCard key={project.id} project={project}/>
                )
            })
        }
      </div>
    </div>
  );
};

export default Projects;
