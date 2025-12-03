import React, { createContext, useContext, useState } from 'react';

const ConfessionContext = createContext();

export const useConfession = () => {
    const context = useContext(ConfessionContext);
    if (!context) {
        throw new Error('useConfession must be used within ConfessionProvider');
    }
    return context;
};

export const ConfessionProvider = ({ children }) => {
    const [lastConfessionDays, setLastConfessionDays] = useState(null);
    const [mode, setMode] = useState(null); // 'ai' | 'offline'
    const [examType, setExamType] = useState(null); // 'short' | 'long'
    const [sins, setSins] = useState([]);
    const [examResponse, setExamResponse] = useState(null);

    const addSin = (sin) => {
        setSins(prev => {
            // Remove existing sin for this question if it exists (upsert)
            const filtered = prev.filter(s => s.questionId !== sin.questionId);
            return [...filtered, sin];
        });
    };

    const removeSin = (questionId) => {
        setSins(prev => prev.filter(s => s.questionId !== questionId));
    };

    const resetConfession = () => {
        setLastConfessionDays(null);
        setMode(null);
        setExamType(null);
        setSins([]);
        setExamResponse(null);
    };

    const value = {
        lastConfessionDays,
        setLastConfessionDays,
        mode,
        setMode,
        examType,
        setExamType,
        sins,
        addSin,
        removeSin,
        setSins,
        examResponse,
        setExamResponse,
        resetConfession,
    };

    return (
        <ConfessionContext.Provider value={value}>
            {children}
        </ConfessionContext.Provider>
    );
};
