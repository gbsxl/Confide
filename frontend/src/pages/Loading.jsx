import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConfession } from '../context/ConfessionContext';
import { processExam, generateMockResponse } from '../services/api';
import LoadingSpinner from '../components/feedback/LoadingSpinner';
import VerseCarousel from '../components/feedback/VerseCarousel';

const Loading = () => {
    const navigate = useNavigate();
    const { lastConfessionDays, sins, setExamResponse, mode } = useConfession();

    useEffect(() => {
        const submitExam = async () => {
            if (!lastConfessionDays) {
                navigate('/');
                return;
            }

            const request = {
                lastConfessionDays,
                sins,
            };

            let result;

            if (mode === 'offline') {
                // Offline Mode: Simulate 7 seconds processing
                await new Promise(resolve => setTimeout(resolve, 7000));
                const mockData = generateMockResponse(request);
                result = { success: true, data: mockData };
            } else {
                // AI Mode: Call API with fallback
                // Enforce minimum 3 seconds loading time for better UX
                const [apiResult] = await Promise.all([
                    processExam(request),
                    new Promise(resolve => setTimeout(resolve, 3000))
                ]);
                result = apiResult;
            }

            if (result.success || (result.data && result.isFallback)) {
                setExamResponse(result.data);
                navigate('/ficha');
            } else if (result.error) {
                // Handle specific API error
                let msg = result.error.message;
                if (result.error.validationErrors && result.error.validationErrors.length > 0) {
                    msg += "\nDetails:\n" + result.error.validationErrors.map(e => `- ${e.field}: ${e.message}`).join("\n");
                }
                alert(`Falha no processamento:\n${msg}`);
                navigate('/'); // Return to home or maybe back to exam? Home is safer for now.
            } else {
                // Handle catastrophic failure
                alert("Ocorreu um erro inesperado ao processar sua confissão. Tente novamente.");
                navigate('/');
            }
        };

        submitExam();
    }, [lastConfessionDays, sins, navigate, setExamResponse, mode]);

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-black to-black pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center space-y-12 max-w-2xl w-full">
                <LoadingSpinner />

                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-white">Preparando sua confissão...</h2>
                    <p className="text-white/50">Examinando sua consciência à luz da fé</p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <VerseCarousel />
            </div>
        </div>
    );
};

export default Loading;
