import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-50'>
                <Navbar/>
            </header>
            <main className="min-h-[calc(100vh-88px)] bg-secondary">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default MainLayout;
