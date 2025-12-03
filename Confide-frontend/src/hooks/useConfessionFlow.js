import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConfession } from '../context/ConfessionContext';
import { shortQuestions } from '../data/shortQuestions';
import { longQuestions } from '../data/longQuestions';

export const useConfessionFlow = () => {
    const navigate = useNavigate();
    const { examType, addSin, removeSin } = useConfession();
    const [currentIndex, setCurrentIndex] = useState(0);

    const questions = useMemo(() => {
        if (examType === 'short') return shortQuestions;
        if (examType === 'long') return longQuestions;
        return [];
    }, [examType]);

    useEffect(() => {
        if (!examType) {
            navigate('/escolher-exame');
        }
    }, [examType, navigate]);

    const currentQuestion = questions[currentIndex];

    const isLastQuestion = currentIndex === questions.length - 1;

    // Calculate Progress
    const progress = Math.round(((currentIndex + 1) / questions.length) * 100);

    // Calculate Section Info
    const currentSection = currentQuestion?.section;
    const sectionQuestions = questions.filter(q => q.section === currentSection);
    const sectionIndex = sectionQuestions.findIndex(q => q.id === currentQuestion?.id) + 1;
    const sectionTotal = sectionQuestions.length;

    const handleAnswer = (answerData) => {
        if (answerData.hasSin && answerData.sin) {
            addSin(answerData.sin);
        } else {
            // If answer is No, ensure we remove any previously added sin for this question
            // This handles the case where user goes back and changes Yes to No
            removeSin(currentQuestion.id);
        }

        if (isLastQuestion) {
            // Logic for last question is handled in the component usually (redirect to loading)
            // But we can provide a function to finish
            navigate('/processando');
        } else {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            navigate('/escolher-exame');
        }
    };

    return {
        currentQuestion,
        currentIndex,
        totalQuestions: questions.length,
        isLastQuestion,
        progress,
        currentSection,
        sectionIndex,
        sectionTotal,
        handleAnswer,
        handlePrevious,
    };
};
