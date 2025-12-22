import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useConfession } from '../context/ConfessionContext';
import { processExam, generateMockResponse } from '../services/api';
import LoadingSpinner from '../components/feedback/LoadingSpinner';
import VerseCarousel from '../components/feedback/VerseCarousel';
import { RefreshCw, Home } from 'lucide-react';

const MAX_PROCESSING_TIME = 30000; // 30 seconds max

const Loading = () => {
    const navigate = useNavigate();
    const { lastConfessionDays, sins, setExamResponse, mode, completeConfession } = useConfession();
    const [error, setError] = useState(null);
    const [isRetrying, setIsRetrying] = useState(false);

    const hasFetched = useRef(false);

    const submitExam = async () => {
        if (!lastConfessionDays) {
            navigate('/');
            return;
        }

        const request = {
            lastConfessionDays,
            sins,
        };

        try {
            let result;

            if (mode === 'offline') {
                // Offline Mode: Simulate 5 seconds processing (reduced from 7)
                await new Promise(resolve => setTimeout(resolve, 5000));
                const mockData = generateMockResponse(request);
                result = { success: true, data: mockData };
            } else {
                // AI Mode: Call API with timeout safeguard
                const timeoutPromise = new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('timeout')), MAX_PROCESSING_TIME)
                );

                // Enforce minimum 3 seconds loading time for better UX
                const [apiResult] = await Promise.race([
                    Promise.all([
                        processExam(request),
                        new Promise(resolve => setTimeout(resolve, 3000))
                    ]),
                    timeoutPromise.then(() => { throw new Error('timeout'); })
                ]);
                result = apiResult;
            }

            // Validate the response before navigating
            if ((result.success || result.isFallback) && result.data) {
                // Validate that essential data exists
                const { exam, confessionTalk, actOfContrition } = result.data;

                if (!exam || !confessionTalk || !actOfContrition) {
                    throw new Error('Dados da confissão incompletos');
                }

                setExamResponse(result.data);

                // Small delay to ensure state is set before navigation
                await new Promise(resolve => setTimeout(resolve, 100));

                // Mark session as successfully completed (clears localStorage)
                completeConfession();

                navigate('/ficha');
            } else if (result.error) {
                // Handle specific API error
                let msg = result.error.message;
                if (result.error.validationErrors && result.error.validationErrors.length > 0) {
                    msg += "\n" + result.error.validationErrors.map(e => `- ${e.field}: ${e.message}`).join("\n");
                }
                setError(msg);
            } else {
                throw new Error('Resposta inválida do servidor');
            }
        } catch (err) {
            console.error('Exam processing error:', err);

            if (err.message === 'timeout') {
                setError('O processamento demorou muito. Tente novamente.');
            } else {
                setError(err.message || 'Ocorreu um erro inesperado ao processar sua confissão.');
            }
        }
    };

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;
        submitExam();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleRetry = () => {
        setError(null);
        setIsRetrying(true);
        hasFetched.current = false;
        submitExam().finally(() => setIsRetrying(false));
    };

    const handleGoHome = () => {
        // Don't clear exam data - it's preserved in localStorage for recovery
        navigate('/');
    };

    // Error state UI
    if (error) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
                <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl">⚠️</span>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-2">
                        Erro no Processamento
                    </h2>
                    <p className="text-white/60 mb-2">
                        {error}
                    </p>
                    <p className="text-white/40 text-sm mb-6">
                        Não se preocupe, seus dados foram salvos. Você pode tentar novamente.
                    </p>

                    <div className="space-y-3">
                        <button
                            onClick={handleRetry}
                            disabled={isRetrying}
                            className="w-full flex items-center justify-center gap-2 bg-amber-500 text-black font-bold py-3 px-4 rounded-lg hover:bg-amber-400 transition-colors disabled:opacity-50"
                        >
                            <RefreshCw size={18} className={isRetrying ? 'animate-spin' : ''} />
                            {isRetrying ? 'Processando...' : 'Tentar Novamente'}
                        </button>

                        <button
                            onClick={handleGoHome}
                            className="w-full flex items-center justify-center gap-2 bg-white/10 text-white py-3 px-4 rounded-lg hover:bg-white/20 transition-colors"
                        >
                            <Home size={18} />
                            Voltar ao Início
                        </button>
                    </div>
                </div>
            </div>
        );
    }

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
