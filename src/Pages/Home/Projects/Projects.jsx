"use client";
import React from "react";
import { useLoaderData } from "react-router";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = useLoaderData();

  return (
    <div
      id="projects"
      className="pt-15 px-4 max-w-[1350px] mx-auto text-white"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">
        <span className="text-primary">My</span> Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-5">
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
