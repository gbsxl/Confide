import React from 'react';

const Input = ({ className, ...props }) => {
    return (
        <input
            className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all duration-300 ${className || ''}`}
            {...props}
        />
    );
};

export default Input;
