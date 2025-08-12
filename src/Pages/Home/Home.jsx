import React from 'react';
import Hero from './Hero/Hero';
import AboutMe from './AboutMe/AboutMe';

const Home = () => {
    return (
        <div className='text-white'>
            <section>
                <Hero></Hero>
            </section>
            <section>
                <AboutMe/>
            </section>
        </div>
    );
};

export default Home;