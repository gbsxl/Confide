import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import FollowUpPanel from './FollowUpPanel';

const QuestionCard = ({ question, onAnswer }) => {
    const [showFollowUp, setShowFollowUp] = useState(false);
    const [details, setDetails] = useState('');
    const [frequency, setFrequency] = useState(question.followUp?.type === 'checkboxes' ? [] : '');

    // Reset state when question changes
    useEffect(() => {
        setShowFollowUp(false);
        setDetails('');
        setFrequency(question.followUp?.type === 'checkboxes' ? [] : '');
    }, [question.id]);

    const handleYes = () => {
        setShowFollowUp(true);
    };

    const handleNo = () => {
        onAnswer({ answered: true, hasSin: false });
    };

    const handleSubmit = () => {
        // Format frequency if array (checkboxes)
        const formattedFrequency = Array.isArray(frequency) ? frequency.join(', ') : frequency;

        const sin = {
            name: question.sinName || question.followUp?.sinName || question.text,
            questionId: question.id,
            category: question.category,
            subcategory: question.subcategory,
            frequency: formattedFrequency || undefined,
            description: details || undefined,
        };

        onAnswer({ answered: true, hasSin: true, sin });
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-3xl mx-auto"
            >
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-12 text-center leading-tight">
                    {question.text}
                </h2>

                {!showFollowUp ? (
                    <div className="flex gap-6 justify-center">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={handleYes}
                            className="min-w-[140px] text-lg"
                        >
                            Sim
                        </Button>
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={handleNo}
                            className="min-w-[140px] text-lg"
                        >
                            Não
                        </Button>
                    </div>
                ) : (
                    <FollowUpPanel
                        question={question}
                        frequency={frequency}
                        setFrequency={setFrequency}
                        details={details}
                        setDetails={setDetails}
                        onSave={handleSubmit}
                    />
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export default QuestionCard;
