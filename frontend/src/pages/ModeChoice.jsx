import { useNavigate } from 'react-router-dom';
import { Sparkles, WifiOff, Clock } from 'lucide-react';
import { useConfession } from '../context/ConfessionContext';
import Navbar from '../components/layout/Navbar';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ModeChoice = () => {
    const navigate = useNavigate();
    const { setMode } = useConfession();

    const handleChoice = (mode) => {
        // AI mode is disabled for now
        if (mode === 'ai') return;
        setMode(mode);
        navigate('/dias-confissao');
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
            <Navbar />

            <div className="max-w-5xl w-full space-y-12 relative z-10 mt-20">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">Como deseja se confessar?</h2>
                    <p className="text-white/60 text-lg">Escolha como você quer ser guiado no seu exame de consciência</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Offline Mode - Now First and Recommended */}
                    <Card className="group hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full ring-2 ring-amber-500/30" onClick={() => handleChoice('offline')}>
                        <div className="flex-1 space-y-6 text-center flex flex-col items-center">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                <span className="bg-amber-500 text-black text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                    Recomendado
                                </span>
                            </div>
                            <div className="w-20 h-20 rounded-full bg-amber-500/20 group-hover:bg-amber-500/30 flex items-center justify-center transition-colors">
                                <WifiOff size={40} className="text-amber-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Modo Offline</h3>
                                <p className="text-white/60">Exame rápido e privado, processado inteiramente no seu dispositivo.</p>
                            </div>
                            <ul className="text-sm text-white/50 space-y-2 text-left w-full px-4">
                                <li className="flex items-center gap-2">
                                    <span className="text-amber-500">✓</span> Funciona sem internet
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-amber-500">✓</span> Privacidade total (dados locais)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-amber-500">✓</span> Resultado instantâneo
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8">
                            <Button variant="primary" className="w-full">Começar Exame</Button>
                        </div>
                    </Card>

                    {/* AI Mode - Disabled with "Em Breve" badge */}
                    <Card className="relative flex flex-col h-full opacity-60 cursor-not-allowed">
                        {/* Coming Soon Badge */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                            <span className="bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                                <Clock size={12} />
                                Em Breve
                            </span>
                        </div>
                        <div className="flex-1 space-y-6 text-center flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                                <Sparkles size={40} className="text-white/40" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white/60 mb-2">Modo com IA</h3>
                                <p className="text-white/40">Recomendações totalmente personalizadas e análise profunda dos seus pecados.</p>
                            </div>
                            <ul className="text-sm text-white/30 space-y-2 text-left w-full px-4">
                                <li className="flex items-center gap-2">
                                    <span className="text-white/30">✓</span> Feedback personalizado
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-white/30">✓</span> Conselhos espirituais adaptados
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-white/30">✓</span> Análise de gravidade contextual
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8">
                            <Button variant="secondary" className="w-full opacity-50 cursor-not-allowed" disabled>
                                Em Breve
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ModeChoice;
