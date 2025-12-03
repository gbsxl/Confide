import React from 'react';
import { Link } from 'react-router-dom';
import { Cross } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="w-full py-6 px-6 md:px-12 flex justify-center md:justify-start absolute top-0 left-0 z-50">
            <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300">
                    <Cross className="text-black w-6 h-6 rotate-45" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500 tracking-tight">
                    Confide
                </span>
            </Link>
        </nav>
    );
};

export default Navbar;
