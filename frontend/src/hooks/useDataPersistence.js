/**
 * Data persistence hook for exam session
 * Saves exam progress to localStorage to prevent data loss
 */

const STORAGE_KEY = 'confide_exam_session';

/**
 * Save exam session data to localStorage
 */
export const saveExamSession = (data) => {
    try {
        const sessionData = {
            ...data,
            savedAt: Date.now(),
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionData));
    } catch (error) {
        console.error('Failed to save exam session:', error);
    }
};

/**
 * Load exam session data from localStorage
 * Returns null if no data exists or if data is older than 24 hours
 */
export const loadExamSession = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) return null;

        const data = JSON.parse(stored);

        // Check if data is older than 24 hours
        const maxAge = 24 * 60 * 60 * 1000; // 24 hours in ms
        if (Date.now() - data.savedAt > maxAge) {
            clearExamSession();
            return null;
        }

        return data;
    } catch (error) {
        console.error('Failed to load exam session:', error);
        return null;
    }
};

/**
 * Clear exam session data from localStorage
 */
export const clearExamSession = () => {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Failed to clear exam session:', error);
    }
};

/**
 * Check if there's a recoverable session
 */
export const hasRecoverableSession = () => {
    const session = loadExamSession();
    return session !== null && session.sins && session.sins.length > 0;
};
