import React from 'react';
import { Check } from 'lucide-react';

const Checkbox = ({ label, checked, onChange, className }) => {
    return (
        <label className={`flex items-center gap-3 cursor-pointer group ${className || ''}`}>
            <div
                className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all duration-200
          ${checked
                        ? 'bg-amber-500 border-amber-500 text-black'
                        : 'bg-white/5 border-white/20 group-hover:border-amber-500/50'
                    }`}
            >
                {checked && <Check size={16} strokeWidth={3} />}
            </div>
            <input
                type="checkbox"
                className="hidden"
                checked={checked}
                onChange={onChange}
            />
            <span className="text-white/80 group-hover:text-white transition-colors select-none">
                {label}
            </span>
        </label>
    );
};

export default Checkbox;
