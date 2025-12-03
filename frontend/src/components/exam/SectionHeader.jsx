import React from 'react';
import { Heart, BookOpen, Users, Scale, AlertTriangle, HelpCircle, Shield } from 'lucide-react';

const SectionHeader = ({ section, questionIndex, sectionTotal }) => {
    // Map sections to icons
    const getIcon = (sectionName) => {
        const name = sectionName?.toLowerCase() || '';
        if (name.includes('deus') || name.includes('fé')) return <Heart className="text-amber-400" />;
        if (name.includes('castidade') || name.includes('pureza')) return <Shield className="text-amber-400" />;
        if (name.includes('família') || name.includes('próximo')) return <Users className="text-amber-400" />;
        if (name.includes('verdade') || name.includes('justiça')) return <Scale className="text-amber-400" />;
        if (name.includes('vício') || name.includes('orgulho')) return <AlertTriangle className="text-amber-400" />;
        return <BookOpen className="text-amber-400" />;
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-4 mb-8 md:mb-12 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-amber-500/10">
                {React.cloneElement(getIcon(section), { size: 32 })}
            </div>
            <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-500">
                    {section}
                </h2>
                <p className="text-sm text-white/50 mt-1">
                    Pergunta {questionIndex} de {sectionTotal} desta seção
                </p>
            </div>
        </div>
    );
};

export default SectionHeader;
