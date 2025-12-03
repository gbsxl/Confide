import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-12 px-6 text-center text-white/30 text-sm space-y-8">
            {/* Donation & Contact */}
            <div className="space-y-4">
                <div className="space-y-1">
                    <p className="text-amber-500/80 font-medium">Apoie este projeto católico gratuito</p>
                    <p className="text-white/40 text-xs">Sua ajuda mantém o servidor e o desenvolvimento ativos</p>
                    <p className="text-amber-400 font-mono text-sm pt-1 select-all">Pix: 61991399094</p>
                </div>

                <div className="inline-block bg-white/5 rounded-lg px-6 py-3 border border-white/10">
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Desenvolvedor</p>
                    <p className="text-white/80 font-medium">Gabriel Sousa</p>
                    <p className="text-amber-400 select-all">61 99139-9094</p>
                </div>
            </div>

            <div className="w-full h-px bg-white/5 max-w-xs mx-auto" />

            <div>
                <p className="mb-2">
                    Confide &copy; {new Date().getFullYear()} • Preparação Sacramental
                </p>
                <p className="max-w-md mx-auto text-xs text-white/20">
                    Este aplicativo não armazena nenhum dado. Todas as informações são processadas localmente e descartadas após o uso.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
