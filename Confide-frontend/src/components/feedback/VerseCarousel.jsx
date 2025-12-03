import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { verses } from '../../data/verses';

const VerseCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % verses.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-32 flex items-center justify-center max-w-2xl mx-auto px-4 text-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2"
                >
                    <p className="text-lg md:text-xl text-white/90 font-serif italic leading-relaxed">
                        "{verses[currentIndex].text}"
                    </p>
                    <p className="text-sm text-amber-500/80 font-medium">
                        — {verses[currentIndex].reference}
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default VerseCarousel;
