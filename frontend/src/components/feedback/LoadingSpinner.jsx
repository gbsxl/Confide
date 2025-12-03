import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ className }) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-4 ${className || ''}`}>
            <div className="relative">
                <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full animate-pulse" />
                <Loader2 className="w-12 h-12 text-amber-400 animate-spin relative z-10" />
            </div>
        </div>
    );
};

export default LoadingSpinner;
