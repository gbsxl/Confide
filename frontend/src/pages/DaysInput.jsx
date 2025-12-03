import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useConfession } from '../context/ConfessionContext';
import Navbar from '../components/layout/Navbar';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const DaysInput = () => {
    const navigate = useNavigate();
    const { setLastConfessionDays } = useConfession();
    const [days, setDays] = useState('');
    const [message, setMessage] = useState('');

    const handleContinue = () => {
        const daysNum = parseInt(days);
        if (!daysNum || daysNum <= 0) return;

        setLastConfessionDays(daysNum);

        // Show contextual message
        let msg = '';
        if (daysNum <= 30) msg = "Que alegria sua fidelidade ao sacramento! 🙏";
        else if (daysNum <= 180) msg = "Deus te aguarda de braços abertos. ❤️";
        else if (daysNum <= 365) msg = "O Pai misericordioso celebra seu retorno. 🕊️";
        else msg = "O céu está em festa pelo filho que hoje se confessará! 🎉";

        setMessage(msg);

        setTimeout(() => {
            navigate('/escolher-exame');
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-black to-black pointer-events-none" />

            <Navbar />

            <div className="w-full max-w-md relative z-10">
                <AnimatePresence mode="wait">
                    {!message ? (
                        <motion.div
                            key="input"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="space-y-8 text-center"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Há quantos dias você não se confessa?
                            </h2>

                            <div className="space-y-4">
                                <Input
                                    type="number"
                                    min="1"
                                    placeholder="Ex: 30"
                                    value={days}
                                    onChange={(e) => setDays(e.target.value)}
                                    className="text-center text-4xl py-6 font-bold tracking-widest"
                                    autoFocus
                                />
                                <p className="text-white/40 text-sm">Digite um valor aproximado</p>
                            </div>

                            <Button
                                size="lg"
                                className="w-full text-lg"
                                onClick={handleContinue}
                                disabled={!days || parseInt(days) <= 0}
                            >
                                Continuar
                            </Button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="message"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="text-center space-y-6"
                        >
                            <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/20 flex items-center justify-center">
                                <span className="text-4xl">✝️</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-medium text-amber-400 leading-relaxed">
                                {message}
                            </h3>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default DaysInput;
