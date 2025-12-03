import React, { useState } from 'react';
import { useConfession } from '../context/ConfessionContext';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { ArrowLeft, Download, Printer, RefreshCw, ImageIcon, Shield, Sword, Crown, ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../components/ui/Button';
import { spiritualWeapons } from '../data/spiritualWeapons';
import { getSaintForSin } from '../data/patronSaints';
import { isGraveSin } from '../utils/sinCategories';

const ConfessionSheet = () => {
    const { examResponse, resetConfession } = useConfession();
    const navigate = useNavigate();
    const [expandedItems, setExpandedItems] = useState({});

    if (!examResponse) {
        navigate('/');
        return null;
    }

    const { exam, summary, confessionTalk, actOfContrition, commitments, pastoralNotes } = examResponse;

    // Split sins into objects for detailed rendering
    const graveSinsList = exam.sins.filter(sin => isGraveSin(sin.category));
    const venialSinsList = exam.sins.filter(sin => !isGraveSin(sin.category));

    const toggleItem = (id, type) => {
        setExpandedItems(prev => ({
            ...prev,
            [`${id}-${type}`]: !prev[`${id}-${type}`]
        }));
    };

    const handleNewConfession = () => {
        if (window.confirm('Deseja iniciar uma nova confissão? Os dados atuais serão perdidos.')) {
            resetConfession();
            navigate('/');
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const handleDownloadJPG = async () => {
        const element = document.getElementById('confession-content');
        if (!element) return;

        // Force expand all for capture
        element.classList.add('force-expand');

        try {
            const canvas = await html2canvas(element, {
                scale: 2, // Higher quality
                useCORS: true,
                backgroundColor: '#ffffff', // White background for the new design
            });

            const link = document.createElement('a');
            link.download = 'minha-confissao.jpg';
            link.href = canvas.toDataURL('image/jpeg', 0.9);
            link.click();
        } catch (error) {
            console.error('Error generating JPG:', error);
            alert('Erro ao gerar imagem. Tente novamente.');
        } finally {
            element.classList.remove('force-expand');
        }
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        // Config
        doc.setFont('Courier', 'normal');
        doc.setFontSize(12);
        const lineHeight = 7;
        let y = 20;
        const margin = 20;
        const pageWidth = doc.internal.pageSize.width;
        const contentWidth = pageWidth - (margin * 2);

        // Helper to add text with word wrap
        const addWrappedText = (text, yPos, fontSize = 12, fontType = 'normal') => {
            doc.setFont('Courier', fontType);
            doc.setFontSize(fontSize);
            const splitText = doc.splitTextToSize(text, contentWidth);
            doc.text(splitText, margin, yPos);
            return yPos + (splitText.length * lineHeight) + 5;
        };

        // Header
        y = addWrappedText('FICHA DE CONFISSÃO - CONFIDE', y, 16, 'bold');
        y += 5;

        // Summary
        y = addWrappedText('RESUMO', y, 14, 'bold');
        y = addWrappedText(`Dias sem confessar: ${exam.lastConfessionDays}`, y);
        y = addWrappedText(`Pecados Graves: ${summary.graveSins}`, y);
        y = addWrappedText(`Pecados Veniais: ${summary.venialSins}`, y);
        y += 5;

        // Talk
        y = addWrappedText('PARA O PADRE:', y, 14, 'bold');
        y = addWrappedText(confessionTalk, y);
        y += 5;

        // Sins List (Simple list for PDF)
        if (graveSinsList.length > 0) {
            y = addWrappedText('PECADOS GRAVES:', y, 14, 'bold');
            graveSinsList.forEach(sin => {
                y = addWrappedText(`- ${sin.name}`, y);
            });
            y += 5;
        }

        if (venialSinsList.length > 0) {
            y = addWrappedText('PECADOS VENIAIS:', y, 14, 'bold');
            venialSinsList.forEach(sin => {
                y = addWrappedText(`- ${sin.name}`, y);
            });
            y += 5;
        }

        // Act of Contrition
        if (y > 250) { doc.addPage(); y = 20; }
        y = addWrappedText('ATO DE CONTRIÇÃO:', y, 14, 'bold');
        y = addWrappedText(actOfContrition, y);

        // Pastoral Notes
        if (pastoralNotes && pastoralNotes.length > 0) {
            if (y > 250) { doc.addPage(); y = 20; }
            y += 5;
            y = addWrappedText('NOTAS PASTORAIS:', y, 14, 'bold');
            pastoralNotes.forEach(note => {
                y = addWrappedText(`- ${note}`, y);
            });
        }

        // Commitments
        if (commitments && commitments.length > 0) {
            if (y > 250) { doc.addPage(); y = 20; }
            y += 5;
            y = addWrappedText('COMPROMISSOS:', y, 14, 'bold');
            commitments.forEach(item => {
                y = addWrappedText(`- ${item}`, y);
            });
        }

        doc.save('minha-confissao.pdf');
    };

    const renderSinCard = (sin, isGrave) => {
        const weapons = spiritualWeapons[sin.category];
        const saint = getSaintForSin(sin.category);
        const sinId = sin.name + sin.category; // Simple ID generation

        const isWeaponsExpanded = expandedItems[`${sinId}-weapons`];
        const isSaintExpanded = expandedItems[`${sinId}-saint`];

        return (
            <div key={sinId} className={`mb-6 rounded-lg overflow-hidden border-2 ${isGrave ? 'border-red-900 bg-red-50' : 'border-amber-500 bg-amber-50'}`}>
                {/* Header */}
                <div className={`p-4 ${isGrave ? 'bg-red-900 text-white' : 'bg-amber-400 text-black'} flex justify-between items-center`}>
                    <div>
                        <h3 className="font-bold text-lg">{sin.name}</h3>
                        {sin.frequency && <p className="text-xs opacity-80 mt-1">{sin.frequency}</p>}
                    </div>
                    {isGrave && <span className="text-xs font-bold uppercase tracking-wider bg-black/20 px-2 py-1 rounded">Grave</span>}
                </div>

                {/* Actions */}
                <div className="p-4 grid grid-cols-2 gap-4">
                    <button
                        onClick={() => toggleItem(sinId, 'weapons')}
                        className="flex items-center justify-center gap-2 bg-black text-amber-400 py-3 px-4 rounded hover:bg-gray-900 transition-colors"
                    >
                        <div className="flex items-center gap-2">
                            <Shield size={18} />
                            <span className="font-bold uppercase tracking-wider text-sm">Armas</span>
                        </div>
                        {isWeaponsExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    <button
                        onClick={() => toggleItem(sinId, 'saint')}
                        className="flex items-center justify-center gap-2 bg-black text-amber-400 py-3 px-4 rounded hover:bg-gray-900 transition-colors"
                    >
                        <div className="flex items-center gap-2">
                            <Crown size={18} />
                            <span className="font-bold uppercase tracking-wider text-sm">Santos</span>
                        </div>
                        {isSaintExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                </div>

                {/* Expanded Content - Weapons */}
                <div className={`expandable-content ${isWeaponsExpanded ? 'block' : 'hidden'} border-t border-black/10`}>
                    <div className="p-6 bg-white">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-black">
                            <Sword className="text-red-600" size={20} />
                            {weapons?.title || 'Combate Espiritual'}
                        </h4>

                        {weapons?.weapons?.map((weapon, idx) => (
                            <div key={idx} className="mb-4 last:mb-0 border-l-4 border-amber-400 pl-4">
                                <p className="font-bold text-gray-900">{weapon.name}</p>
                                <p className="text-sm text-gray-600 mb-1">{weapon.description}</p>
                                <p className="text-xs text-gray-500 italic">"{weapon.howTo}"</p>
                            </div>
                        ))}

                        {weapons?.scripture && (
                            <div className="mt-4 p-3 bg-gray-50 rounded text-sm italic text-gray-600 border border-gray-200">
                                {weapons.scripture}
                            </div>
                        )}
                    </div>
                </div>

                {/* Expanded Content - Saint */}
                <div className={`expandable-content ${isSaintExpanded ? 'block' : 'hidden'} border-t border-black/10`}>
                    <div className="p-6 bg-white">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-black">
                            <Crown className="text-amber-500" size={20} />
                            Intercessão: {saint?.primary?.name}
                        </h4>

                        <div className="space-y-3">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-400">Título</p>
                                <p className="font-medium text-gray-900">{saint?.primary?.title}</p>
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-400">Por que invocar?</p>
                                <p className="text-sm text-gray-700">{saint?.primary?.reason}</p>
                            </div>

                            {saint?.primary?.prayer && (
                                <div className="mt-4 p-4 bg-amber-50 rounded border border-amber-100">
                                    <p className="text-xs uppercase tracking-widest text-amber-600 mb-2">Oração</p>
                                    <p className="italic text-gray-800 font-serif">"{saint.primary.prayer}"</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans relative">
            {/* Actions Bar (Hidden on Print) */}
            <div className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur border-b border-white/10 p-4 z-50 no-print flex justify-between items-center shadow-lg">
                <Button variant="ghost" onClick={() => navigate('/')} className="text-white/60 hover:text-white hover:bg-white/10">
                    <ArrowLeft size={20} />
                </Button>
                <div className="flex gap-3">
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={handleDownloadJPG}
                        className="bg-amber-500 text-black hover:bg-amber-400 border-none font-bold"
                    >
                        <ImageIcon size={18} />
                        <span className="hidden md:inline">Baixar Imagem</span>
                    </Button>
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={handleDownloadPDF}
                        className="bg-amber-500 text-black hover:bg-amber-400 border-none font-bold"
                    >
                        <Download size={18} />
                        <span className="hidden md:inline">Baixar PDF</span>
                    </Button>
                    <Button variant="secondary" size="sm" onClick={handlePrint} className="border-white/20 text-white hover:bg-white/10">
                        <Printer size={18} />
                        <span className="hidden md:inline">Imprimir</span>
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleNewConfession} className="text-white/40 hover:text-white hover:bg-white/5">
                        <RefreshCw size={18} />
                        <span className="hidden md:inline">Novo</span>
                    </Button>
                </div>
            </div>

            {/* Sheet Content */}
            <div className="pt-24 pb-24 px-4 md:px-0">
                <div
                    id="confession-content"
                    className="max-w-3xl mx-auto bg-white text-black p-8 md:p-12 shadow-2xl rounded-3xl min-h-[800px]"
                >
                    <div className="border-b-4 border-amber-500 pb-8 mb-10 text-center">
                        <h1 className="text-4xl font-bold mb-2 tracking-tight">CONFIDE</h1>
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-[0.3em]">Ficha de Confissão</p>
                    </div>

                    <div className="grid gap-10">
                        {/* Summary */}
                        <section className="bg-gray-50 p-6 border-l-4 border-black">
                            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <span className="text-amber-500">●</span> RESUMO
                            </h2>
                            <ul className="space-y-2 text-sm font-medium text-gray-700">
                                <li className="flex justify-between border-b border-gray-200 pb-1">
                                    <span>Tempo sem confessar</span>
                                    <span className="font-bold text-black">{exam.lastConfessionDays} dias</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-1">
                                    <span>Pecados Graves</span>
                                    <span className="font-bold text-red-600">{summary.graveSins}</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-200 pb-1">
                                    <span>Pecados Veniais</span>
                                    <span className="font-bold text-gray-900">{summary.venialSins}</span>
                                </li>
                            </ul>
                        </section>

                        {/* Confession Talk */}
                        <section>
                            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 uppercase tracking-wider">
                                <span className="text-amber-500">●</span> Para dizer ao Padre
                            </h2>
                            <div className="text-lg leading-relaxed font-serif text-gray-800 italic">
                                &quot;{confessionTalk}&quot;
                            </div>
                        </section>

                        <div className="w-full h-px bg-gray-200 my-2" />

                        {/* Act of Contrition */}
                        <section className="bg-amber-50 p-8 text-center border border-amber-100 rounded-sm">
                            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-4">Ato de Contrição</h2>
                            <p className="font-serif text-lg text-gray-800 italic leading-relaxed">
                                &quot;{actOfContrition}&quot;
                            </p>
                        </section>

                        {/* Pastoral Notes */}
                        {pastoralNotes && pastoralNotes.length > 0 && (
                            <section>
                                <h2 className="text-lg font-bold mb-4 flex items-center gap-2 uppercase tracking-wider">
                                    <span className="text-gray-400">●</span> Notas Pastorais
                                </h2>
                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                    {pastoralNotes.map((note, i) => (
                                        <li key={i}>{note}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Commitments */}
                        {commitments && commitments.length > 0 && (
                            <section>
                                <h2 className="text-lg font-bold mb-4 flex items-center gap-2 uppercase tracking-wider">
                                    <span className="text-gray-400">●</span> Compromissos
                                </h2>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                                    {commitments.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ol>
                            </section>
                        )}

                        {/* FIGHT AGAINST SIN SECTION */}
                        <div className="mt-8">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-black flex-1"></div>
                                <h2 className="text-2xl font-bold uppercase tracking-widest text-center">Luta Contra o Pecado</h2>
                                <div className="h-px bg-black flex-1"></div>
                            </div>

                            {/* Grave Sins */}
                            {graveSinsList.length > 0 && (
                                <div className="mb-10">
                                    <h3 className="text-xl font-bold mb-6 text-red-700 flex items-center gap-2">
                                        <Shield className="fill-red-700" size={24} />
                                        PECADOS GRAVES
                                    </h3>
                                    <div className="space-y-6">
                                        {graveSinsList.map(sin => renderSinCard(sin, true))}
                                    </div>
                                </div>
                            )}

                            {/* Venial Sins */}
                            {venialSinsList.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-bold mb-6 text-amber-600 flex items-center gap-2">
                                        <Shield className="fill-amber-500" size={24} />
                                        PECADOS VENIAIS
                                    </h3>
                                    <div className="space-y-6">
                                        {venialSinsList.map(sin => renderSinCard(sin, false))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer Info */}
                        <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest">
                            <span>Confide App</span>
                            <span>{new Date().toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Styles for print/download expansion */}
            <style>{`
                .force-expand .expandable-content {
                    display: block !important;
                }
                @media print {
                    .expandable-content {
                        display: block !important;
                    }
                    .no-print {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default ConfessionSheet;
