import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useConfessionFlow } from '../hooks/useConfessionFlow';
import Navbar from '../components/layout/Navbar';
import ProgressBar from '../components/ui/ProgressBar';
import SectionHeader from '../components/exam/SectionHeader';
import QuestionCard from '../components/exam/QuestionCard';
import Button from '../components/ui/Button';

const ExamSession = () => {
    const {
        currentQuestion,
        currentIndex,
        totalQuestions,
        progress,
        currentSection,
        sectionIndex,
        sectionTotal,
        handleAnswer,
        handlePrevious,
    } = useConfessionFlow();

    if (!currentQuestion) return null;

    return (
        <div className="min-h-screen bg-black flex flex-col relative">
            {/* Progress Bar Fixed Top */}
            <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 pt-safe">
                <div className="max-w-5xl mx-auto px-6 py-4 space-y-2">
                    <div className="flex justify-between text-xs text-white/50 uppercase tracking-wider">
                        <span>Progresso do Exame</span>
                        <span>{progress}%</span>
                    </div>
                    <ProgressBar progress={progress} />
                </div>
            </div>

            <Navbar />

            <main className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-24 relative z-10 max-w-5xl mx-auto w-full">

                {/* Section Header */}
                <SectionHeader
                    section={currentSection}
                    questionIndex={sectionIndex}
                    sectionTotal={sectionTotal}
                />

                {/* Question Card */}
                <QuestionCard
                    question={currentQuestion}
                    onAnswer={handleAnswer}
                />

            </main>

            {/* Navigation Controls (Bottom) */}
            <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-40 pointer-events-none">
                <div className="max-w-5xl mx-auto flex justify-between pointer-events-auto">
                    <Button
                        variant="ghost"
                        onClick={handlePrevious}
                        className="flex items-center gap-2 text-white/50 hover:text-white"
                    >
                        <ArrowLeft size={20} />
                        Voltar
                    </Button>

                    {/* Forward button is usually handled by answering, but we could have a skip or next if needed. 
              For this flow, "Next" is triggered by answering "No" or "Save". 
              So we might not need a standalone Next button unless it's for skipping (which isn't in requirements).
              However, the prompt mentioned: "Botão 'Próxima →' (canto inferior direito, só habilitado após responder)"
              But in our design, answering automatically advances or shows the next button inside the card.
              Let's keep it simple and let the card handle the primary action.
          */}
                </div>
            </div>
        </div>
    );
};

export default ExamSession;
