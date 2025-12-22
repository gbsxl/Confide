import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="w-full py-6 px-6 md:px-12 flex justify-center md:justify-start absolute top-0 left-0 z-50">
            <Link to="/" className="flex items-center gap-3 group">
                <img
                    src="/LogoConfidePreto.png"
                    alt="Confide Logo"
                    className="w-10 h-10 rounded-full object-cover shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300"
                />
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500 tracking-tight">
                    Confide
                </span>
            </Link>
        </nav>
    );
};

export default Navbar;
