import React from 'react';
import { FaArrowRight, FaEye } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { Link } from 'react-router';

const ProjectCard = ({project}) => {
    return (
        <div className='p-4 rounded-2xl bg-[#33333368] group hover:scale-100 transition-all mt-3 shadow-sm shadow-[#202020]'>
            <div className="">
                <img className='rounded-xl group-hover:scale-103 transition-all w-full sm:h-45 md:h-55 lg:h-45 xl:h-60' src={project.projectImage} alt="" />
            </div>
            <h1 className='text-xl font-bold my-4'>{project.projectName}</h1>
            <p className='mb-5'>{project.description.slice(0, 90)}..</p>
            <div className="flex justify-between">
                <a href={project.liveLink} target='blank' className='hover:scale-105 transition-all py-2 flex items-center gap-2 text-blue-400 cursor-pointer focus:text-blue-600'>Live Demo <FaArrowUpRightFromSquare/></a>
                <Link to={`/projectDetails/${project.id}`} className='bg-primary px-3 rounded-lg flex items-center gap-2 hover:scale-97 transition-all'>Details <FaArrowRight /></Link>
            </div>
        </div>
    );
};

export default ProjectCard;