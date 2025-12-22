import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-neutral'>
            <footer className="md:flex justify-center items-center gap-10 max-w-[1350px] mx-auto bg-neutral text-white p-8 space-y-5 md:space-y-0">
                <aside className="text-center">

                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <hr  className="w-4 hidden md:block rotate-90"/>
                <nav className="flex gap-4 justify-center">
                    <a href="https://github.com/shakilahamed07" target="blank"><FaGithub size={20} className="hover:scale-150 transition-all" /></a>
                    <a href="https://www.linkedin.com/in/shakilahmed-me/" target="blank" ><FaLinkedin size={20} className="hover:scale-150 transition-all" /></a>
                    <a href="https://www.facebook.com/shakilahmed.io/" target="blank"><FaFacebook size={20} className="hover:scale-150 transition-all" /></a>
                    <a href="https://x.com/shakilahamed07" target="blank"><AiFillTwitterCircle size={22} className="hover:scale-150 transition-all" /></a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;