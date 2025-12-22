import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { saveExamSession, loadExamSession, clearExamSession } from '../hooks/useDataPersistence';

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
    const [hasRecoveryData, setHasRecoveryData] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load saved session on mount
    useEffect(() => {
        const savedSession = loadExamSession();
        if (savedSession) {
            setLastConfessionDays(savedSession.lastConfessionDays || null);
            setMode(savedSession.mode || null);
            setExamType(savedSession.examType || null);
            setSins(savedSession.sins || []);
            setHasRecoveryData(savedSession.sins && savedSession.sins.length > 0);
        }
        setIsInitialized(true);
    }, []);

    // Auto-save session whenever relevant data changes (after initialization)
    useEffect(() => {
        if (!isInitialized) return;

        // Don't save if everything is empty
        if (!lastConfessionDays && !mode && !examType && sins.length === 0) {
            return;
        }

        saveExamSession({
            lastConfessionDays,
            mode,
            examType,
            sins,
        });
    }, [lastConfessionDays, mode, examType, sins, isInitialized]);

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

    const resetConfession = useCallback(() => {
        setLastConfessionDays(null);
        setMode(null);
        setExamType(null);
        setSins([]);
        setExamResponse(null);
        setHasRecoveryData(false);
        clearExamSession();
    }, []);

    // Clear session data only after successful completion
    const completeConfession = useCallback(() => {
        clearExamSession();
        setHasRecoveryData(false);
    }, []);

    // Recover previous session (called explicitly by user)
    const recoverSession = useCallback(() => {
        const savedSession = loadExamSession();
        if (savedSession) {
            setLastConfessionDays(savedSession.lastConfessionDays || null);
            setMode(savedSession.mode || null);
            setExamType(savedSession.examType || null);
            setSins(savedSession.sins || []);
        }
        setHasRecoveryData(false);
    }, []);

    // Dismiss recovery without loading data
    const dismissRecovery = useCallback(() => {
        setHasRecoveryData(false);
        clearExamSession();
    }, []);

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
        // New persistence-related
        hasRecoveryData,
        recoverSession,
        dismissRecovery,
        completeConfession,
        isInitialized,
    };

    return (
        <ConfessionContext.Provider value={value}>
            {children}
        </ConfessionContext.Provider>
    );
};

