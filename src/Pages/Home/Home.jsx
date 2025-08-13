import React from 'react';
import Hero from './Hero/Hero';
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='text-white'>
            <section>
                <Hero></Hero>
            </section>
            <section>
                <AboutMe/>
            </section>
            <section>
                <Skills/>
            </section>
            <section>
                <Projects/>
            </section>
            <section>
                <ContactUs/>
            </section>
        </div>
    );
};

export default Home;