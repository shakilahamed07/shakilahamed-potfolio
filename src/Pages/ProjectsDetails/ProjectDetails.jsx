import React from "react";
import {
  FaArrowLeft,
  FaCode,
  FaGithub,
  FaLayerGroup,
  FaRegStar,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
import { IoIosCode } from "react-icons/io";
import { Link, useLoaderData, useParams } from "react-router";

const ProjectDetails = () => {
  const project = useLoaderData();
  const { id } = useParams();

  const {
    features,
    githubLink,
    liveLink,
    description,
    mainTechStack,
    projectImage,
    projectName,
  } = project.find((p) => p.id == id);

  return (
    <div className="text-white py-10 px-5 max-w-[1350px] mx-auto">
      <Link
        to={`/`}
        className="bg-[#383838cb] shadow-2xl shadow-primary px-3 py-2 pr-4 rounded-lg flex items-center gap-2 hover:scale-97 transition-all w-fit "
      >
        <FaArrowLeft />
        Home
      </Link>
      <div className="text-white md:flex gap-10 min-h-[calc(100vh-120px)] mt-10 space-y-8 lg:space-y-0">
        {/* left side */}
        <div className="flex-1">
          <h1 className="sm:text-4xl text-3xl font-bold ">{projectName}</h1>
          <div className="bg-primary h-1 rounded-4xl shadow-2xl shadow-primary w-30 my-5"></div>
          <p className="max-w-[500px]">{description}</p>
          <div className="rounded-xl space-y-6 mt-8">
            {/* Stats Row */}
            <div className="flex gap-2 md:gap-4">
              <div className="flex items-center gap-3 bg-[#242424]  rounded-lg p-2 md:p-4">
                <FaCode size={27} className="text-primary text-xl" />
                <div>
                  <p className="text-xl font-bold">{mainTechStack.length}</p>
                  <span className="text-xs md:text-sm text-gray-400">
                    Total Technology
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#242424]  rounded-lg p-2 md:p-4 sm:min-w-[200px] pr-12">
                <FaLayerGroup className="text-primary text-xl" />
                <div>
                  <p className="text-xl font-bold">{features.length}</p>
                  <span className="text-xs md:text-sm text-gray-400">Key Features</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <a
                href={liveLink}
                target="blank"
                className="btn hover:scale-102 transition-all py-2 flex items-center gap-2 text-blue-400 cursor-pointer focus:text-blue-600 w-fit border border-blue-400 shadow px-2 rounded-lg bg-[#242424]"
              >
                Live link <FaArrowUpRightFromSquare />
              </a>
              <a
                href={githubLink}
                className="rounded-lg hover:scale-103 bg-primary text-white border-none shadow-2xl shadow-primary transition btn"
              >
                GitHub <FaGithub size={17} />
              </a>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FaCode size={27} className="text-primary text-xl" />{" "}
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {mainTechStack.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 px-3 py-1 border border-primary rounded-lg text-sm"
                  >
                    <GrTechnology />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex-1">
          <div className="mb-8">
            <img className="rounded-xl" src={projectImage} alt="" />
          </div>
          <h3 className="text-2xl font-medium my-2 flex items-center gap-2">
            <FaRegStar size={20} className="text-yellow-300" />
            Kay Features
          </h3>
          <div className="pl-4 mt-3 space-y-3">
            {features.map((feature, i) => {
              return (
                <p key={i} className="flex items-center gap-1">
                  {" "}
                  <GoDotFill size={12} className="text-primary" />
                  {feature}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
