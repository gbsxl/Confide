import { Link } from 'react-router-dom';
import { Lock, Zap, Sword } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { SEO } from '../components/SEO';

const Landing = () => {
    return (
        <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
            <SEO
                title="Preparação para Confissão"
                description="Prepare-se para a confissão sacramental com o Confide. Exame de consciência guiado, ficha de confissão e recursos espirituais para sua vida de fé. Privado e Seguro."
                canonical="https://www.confide.website/"
            />
            {/* Background Glow */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

            <Navbar />

            <main className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-12 relative z-10">
                <div className="text-center max-w-4xl mx-auto space-y-8 mb-20">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-yellow-500 to-yellow-700 drop-shadow-2xl animate-fade-in-up">
                        Confide
                    </h1>
                    <p className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto font-light animate-fade-in-up delay-100">
                        Prepare sua confissão com clareza e confiança.
                        <br />
                        <span className="text-amber-400/80">Privado. Seguro. Sagrado.</span>
                    </p>

                    <div className="pt-8 animate-fade-in-up delay-200 flex justify-center">
                        <Link to="/escolher-modo">
                            <Button size="lg" className="text-xl px-12 py-5 shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)]">
                                Iniciar Preparação
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full animate-fade-in-up delay-300">
                    <Card className="flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                            <Lock size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">100% Privado</h3>
                        <p className="text-white/60">
                            Sem login, sem banco de dados. Seus pecados nunca saem do seu dispositivo.
                        </p>
                    </Card>

                    <Card className="flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                            <Sword size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Armas Espirituais</h3>
                        <p className="text-white/60">
                            Receba conselhos práticos e orações específicas para combater cada pecado.
                        </p>
                    </Card>

                    <Card className="flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">Totalmente Grátis</h3>
                        <p className="text-white/60">
                            Uma ferramenta a serviço da fé, sem custos ou anúncios.
                        </p>
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Landing;
