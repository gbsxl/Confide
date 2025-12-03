import React from 'react';

// Utility for merging classes (simple version since we didn't install clsx/tailwind-merge explicitly but usually good to have)
// Wait, I didn't install clsx or tailwind-merge. I should probably implement a simple `cn` utility or install them.
// The prompt's Button.jsx used `import { cn } from '../utils/cn';`
// I haven't created `src/utils/cn.js` yet. I should do that or inline it.
// I'll create `src/utils/cn.js` as it's best practice.

// For now, I will implement Button without external `cn` or create `cn` in this step.
// I'll create `src/utils/cn.js` first in the next step or inline it here.
// I'll inline a simple version here to avoid extra file for now, or better, create the utils folder.
// Let's create `src/utils/cn.js` first.

// Actually, I'll just use template literals and manual merging for now to save steps, 
// or better, I'll add `clsx` and `tailwind-merge` to dependencies? No, user didn't ask for them.
// I'll implement a simple `cn` function in `src/utils/cn.js` because the prompt code used it.

// Wait, I'll create `src/utils/cn.js` in the next turn.
// For this file, I will assume `../utils/cn` exists.

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    disabled,
    ...props
}) => {
    const baseStyles = 'rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2';

    const variants = {
        primary: 'bg-gradient-to-r from-amber-400 to-yellow-600 text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95',
        secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:scale-105 active:scale-95',
        ghost: 'text-white/70 hover:text-white hover:bg-white/5',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    // Simple class merging
    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`;

    return (
        <button
            className={combinedClasses}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
