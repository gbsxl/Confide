import React from 'react';

const Card = ({ children, className, ...props }) => {
    return (
        <div
            className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl shadow-black/50 ${className || ''}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
