import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, BookOpen } from 'lucide-react';
import { useConfession } from '../context/ConfessionContext';
import Navbar from '../components/layout/Navbar';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ExamChoice = () => {
    const navigate = useNavigate();
    const { setExamType } = useConfession();

    const handleChoice = (type) => {
        setExamType(type);
        navigate(`/exame/${type}`);
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
            <Navbar />

            <div className="max-w-5xl w-full space-y-12 relative z-10 mt-20">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Escolha seu Exame</h2>
                    <p className="text-white/60 text-lg">Selecione a profundidade do seu exame de consciência</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Short Exam */}
                    <Card className="group hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full" onClick={() => handleChoice('short')}>
                        <div className="flex-1 space-y-6 text-center flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 flex items-center justify-center transition-colors">
                                <Zap size={40} className="text-amber-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Exame Curto</h3>
                                <p className="text-white/60">15 perguntas essenciais sobre os Mandamentos e Pecados Capitais</p>
                            </div>
                            <div className="bg-white/5 rounded-full px-4 py-1 text-sm text-white/50">
                                ⏱️ 10-15 minutos
                            </div>
                        </div>
                        <div className="mt-8">
                            <Button variant="primary" className="w-full">Escolher Exame Curto</Button>
                        </div>
                    </Card>

                    {/* Long Exam */}
                    <Card className="group hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full" onClick={() => handleChoice('long')}>
                        <div className="flex-1 space-y-6 text-center flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 flex items-center justify-center transition-colors">
                                <BookOpen size={40} className="text-amber-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Exame Longo</h3>
                                <p className="text-white/60">50 perguntas detalhadas cobrindo todas as áreas da consciência</p>
                            </div>
                            <div className="bg-white/5 rounded-full px-4 py-1 text-sm text-white/50">
                                ⏱️ 30-40 minutos
                            </div>
                        </div>
                        <div className="mt-8">
                            <Button variant="secondary" className="w-full group-hover:bg-white/20">Escolher Exame Longo</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ExamChoice;
