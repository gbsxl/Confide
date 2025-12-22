import { useState } from 'react';
import { useConfession } from '../context/ConfessionContext';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Save, RefreshCw, Shield, Sword, Crown, ChevronDown, ChevronUp, X, FileImage, FileText, Download, Printer } from 'lucide-react';
import Button from '../components/ui/Button';
import { spiritualWeapons } from '../data/spiritualWeapons';
import { getSaintForSin } from '../data/patronSaints';
import { isGraveSin } from '../utils/sinCategories';

const ConfessionSheet = () => {
    const { examResponse, resetConfession } = useConfession();
    const navigate = useNavigate();
    const [expandedItems, setExpandedItems] = useState({});
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [saveStep, setSaveStep] = useState(1);
    const [saveType, setSaveType] = useState(null); // 'resumido' | 'completo'
    const [saveFormat, setSaveFormat] = useState(null); // 'imagem' | 'pdf'
    const [isProcessing, setIsProcessing] = useState(false);

    if (!examResponse) {
        navigate('/');
        return null;
    }

    const { exam, summary, confessionTalk, actOfContrition, commitments, pastoralNotes } = examResponse;
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

    const openSaveModal = () => {
        setShowSaveModal(true);
        setSaveStep(1);
        setSaveType(null);
        setSaveFormat(null);
    };

    const closeSaveModal = () => {
        setShowSaveModal(false);
        setSaveStep(1);
        setSaveType(null);
        setSaveFormat(null);
    };

    const selectType = (type) => {
        setSaveType(type);
        setSaveStep(2);
    };

    const selectFormat = (format) => {
        setSaveFormat(format);
        setSaveStep(3);
    };

    const handleAction = async (action) => {
        setIsProcessing(true);
        try {
            if (saveType === 'resumido') {
                await generateSummary(saveFormat, action);
            } else {
                await generateComplete(saveFormat, action);
            }
        } finally {
            setIsProcessing(false);
            closeSaveModal();
        }
    };

    // Generate Summary (1080x1920)
    const generateSummary = async (format, action) => {
        const element = document.getElementById('confession-summary');
        if (!element) return;

        element.style.display = 'block';

        try {
            const canvas = await html2canvas(element, {
                width: 1080,
                height: 1920,
                scale: 1,
                useCORS: true,
                backgroundColor: '#ffffff',
            });

            if (format === 'imagem') {
                if (action === 'download') {
                    const link = document.createElement('a');
                    link.download = 'confissao-resumo.jpg';
                    link.href = canvas.toDataURL('image/jpeg', 0.95);
                    link.click();
                } else {
                    const win = window.open('', '_blank');
                    win.document.write(`<img src="${canvas.toDataURL('image/jpeg', 0.95)}" style="max-width:100%;"/>`);
                    win.document.close();
                    win.print();
                }
            } else {
                // PDF from summary
                const imgData = canvas.toDataURL('image/jpeg', 0.95);
                const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: [1080, 1920] });
                pdf.addImage(imgData, 'JPEG', 0, 0, 1080, 1920);
                if (action === 'download') {
                    pdf.save('confissao-resumo.pdf');
                } else {
                    window.open(pdf.output('bloburl'), '_blank');
                }
            }
        } finally {
            element.style.display = 'none';
        }
    };

    // Generate Complete (paginated)
    const generateComplete = async (format, action) => {
        const element = document.getElementById('confession-content');
        if (!element) return;

        element.classList.add('force-expand');

        try {
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                backgroundColor: '#ffffff',
            });

            if (format === 'imagem') {
                // Split into pages (A4 ratio ~1:1.414)
                const pageHeight = Math.floor(canvas.width * 1.414);
                const pages = Math.ceil(canvas.height / pageHeight);

                for (let i = 0; i < pages; i++) {
                    const pageCanvas = document.createElement('canvas');
                    pageCanvas.width = canvas.width;
                    pageCanvas.height = Math.min(pageHeight, canvas.height - i * pageHeight);
                    const ctx = pageCanvas.getContext('2d');
                    ctx.drawImage(canvas, 0, -i * pageHeight);

                    const link = document.createElement('a');
                    link.download = `confissao-completa-${i + 1}.jpg`;
                    link.href = pageCanvas.toDataURL('image/jpeg', 0.95);
                    link.click();
                    await new Promise(r => setTimeout(r, 300));
                }
            } else {
                // PDF paginated
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = pdfWidth / imgWidth;
                const scaledHeight = imgHeight * ratio;
                const pages = Math.ceil(scaledHeight / pdfHeight);

                for (let i = 0; i < pages; i++) {
                    if (i > 0) pdf.addPage();
                    const srcY = i * (pdfHeight / ratio);
                    const srcH = Math.min(pdfHeight / ratio, imgHeight - srcY);

                    const pageCanvas = document.createElement('canvas');
                    pageCanvas.width = imgWidth;
                    pageCanvas.height = srcH;
                    const ctx = pageCanvas.getContext('2d');
                    ctx.drawImage(canvas, 0, -srcY);

                    const imgData = pageCanvas.toDataURL('image/jpeg', 0.95);
                    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, srcH * ratio);
                }

                if (action === 'download') {
                    pdf.save('confissao-completa.pdf');
                } else {
                    window.open(pdf.output('bloburl'), '_blank');
                }
            }
        } finally {
            element.classList.remove('force-expand');
        }
    };

    const renderSinCard = (sin, isGrave) => {
        const weapons = spiritualWeapons[sin.category];
        const saint = getSaintForSin(sin.category);
        const sinId = sin.name + sin.category;
        const isWeaponsExpanded = expandedItems[`${sinId}-weapons`];
        const isSaintExpanded = expandedItems[`${sinId}-saint`];

        return (
            <div key={sinId} className={`mb-6 rounded-lg overflow-hidden border-2 ${isGrave ? 'border-red-900 bg-red-50' : 'border-amber-500 bg-amber-50'}`}>
                <div className={`p-4 ${isGrave ? 'bg-red-900 text-white' : 'bg-amber-400 text-black'} flex justify-between items-center`}>
                    <div>
                        <h3 className="font-bold text-lg">{sin.name}</h3>
                        {sin.frequency && <p className="text-xs opacity-80 mt-1">{sin.frequency}</p>}
                    </div>
                    {isGrave && <span className="text-xs font-bold uppercase tracking-wider bg-black/20 px-2 py-1 rounded">Grave</span>}
                </div>

                <div className="p-4 grid grid-cols-2 gap-4">
                    <button onClick={() => toggleItem(sinId, 'weapons')} className="flex items-center justify-center gap-2 bg-black text-amber-400 py-3 px-4 rounded hover:bg-gray-900 transition-colors">
                        <Shield size={18} />
                        <span className="font-bold uppercase tracking-wider text-sm">Armas</span>
                        {isWeaponsExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    <button onClick={() => toggleItem(sinId, 'saint')} className="flex items-center justify-center gap-2 bg-black text-amber-400 py-3 px-4 rounded hover:bg-gray-900 transition-colors">
                        <Crown size={18} />
                        <span className="font-bold uppercase tracking-wider text-sm">Santos</span>
                        {isSaintExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                </div>

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
                                <p className="text-xs text-gray-500 italic">&quot;{weapon.howTo}&quot;</p>
                            </div>
                        ))}
                        {weapons?.scripture && (
                            <div className="mt-4 p-3 bg-gray-50 rounded text-sm italic text-gray-600 border border-gray-200">
                                {weapons.scripture}
                            </div>
                        )}
                    </div>
                </div>

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
                                    <p className="italic text-gray-800 font-serif">&quot;{saint.primary.prayer}&quot;</p>
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
            {/* Simplified Actions Bar */}
            <div className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur border-b border-white/10 p-4 z-50 no-print flex justify-center items-center gap-4 shadow-lg">
                <Button
                    variant="primary"
                    onClick={openSaveModal}
                    className="bg-amber-500 text-black hover:bg-amber-400 border-none font-bold px-8"
                >
                    <Save size={20} />
                    Salvar
                </Button>
                <Button
                    variant="secondary"
                    onClick={handleNewConfession}
                    className="border-white/30 text-white hover:bg-white/10 px-8"
                >
                    <RefreshCw size={20} />
                    Novo
                </Button>
            </div>

            {/* Save Modal */}
            {showSaveModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-md w-full p-6 text-black relative">
                        <button onClick={closeSaveModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <X size={24} />
                        </button>

                        <h2 className="text-2xl font-bold mb-6 text-center">Salvar Confissão</h2>

                        {saveStep === 1 && (
                            <div className="space-y-4">
                                <p className="text-center text-gray-600 mb-4">Escolha o tipo de exportação</p>
                                <button onClick={() => selectType('resumido')} className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-amber-500 hover:bg-amber-50 transition-all text-left">
                                    <p className="font-bold text-lg">📋 Resumido</p>
                                    <p className="text-sm text-gray-500">Apenas o essencial para usar durante a confissão</p>
                                </button>
                                <button onClick={() => selectType('completo')} className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-amber-500 hover:bg-amber-50 transition-all text-left">
                                    <p className="font-bold text-lg">📖 Completo</p>
                                    <p className="text-sm text-gray-500">Ficha completa com armas espirituais e santos</p>
                                </button>
                            </div>
                        )}

                        {saveStep === 2 && (
                            <div className="space-y-4">
                                <button onClick={() => setSaveStep(1)} className="text-amber-600 text-sm hover:underline">← Voltar</button>
                                <p className="text-center text-gray-600 mb-4">Escolha o formato</p>
                                <button onClick={() => selectFormat('imagem')} className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-amber-500 hover:bg-amber-50 transition-all text-left flex items-center gap-4">
                                    <FileImage size={32} className="text-amber-500" />
                                    <div>
                                        <p className="font-bold text-lg">Imagem</p>
                                        <p className="text-sm text-gray-500">Formato JPG para visualização rápida</p>
                                    </div>
                                </button>
                                <button onClick={() => selectFormat('pdf')} className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-amber-500 hover:bg-amber-50 transition-all text-left flex items-center gap-4">
                                    <FileText size={32} className="text-amber-500" />
                                    <div>
                                        <p className="font-bold text-lg">PDF</p>
                                        <p className="text-sm text-gray-500">Documento para impressão de qualidade</p>
                                    </div>
                                </button>
                            </div>
                        )}

                        {saveStep === 3 && (
                            <div className="space-y-4">
                                <button onClick={() => setSaveStep(2)} className="text-amber-600 text-sm hover:underline">← Voltar</button>
                                <p className="text-center text-gray-600 mb-4">O que deseja fazer?</p>
                                <button
                                    onClick={() => handleAction('download')}
                                    disabled={isProcessing}
                                    className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-amber-500 hover:bg-amber-50 transition-all text-left flex items-center gap-4 disabled:opacity-50"
                                >
                                    <Download size={32} className="text-amber-500" />
                                    <div>
                                        <p className="font-bold text-lg">{isProcessing ? 'Processando...' : 'Baixar'}</p>
                                        <p className="text-sm text-gray-500">Salvar no seu dispositivo</p>
                                    </div>
                                </button>
                                <button
                                    onClick={() => handleAction('print')}
                                    disabled={isProcessing}
                                    className="w-full p-4 border-2 border-gray-200 rounded-xl hover:border-amber-500 hover:bg-amber-50 transition-all text-left flex items-center gap-4 disabled:opacity-50"
                                >
                                    <Printer size={32} className="text-amber-500" />
                                    <div>
                                        <p className="font-bold text-lg">{isProcessing ? 'Processando...' : 'Imprimir'}</p>
                                        <p className="text-sm text-gray-500">Abrir para impressão</p>
                                    </div>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Sheet Content */}
            <div className="pt-24 pb-24 px-4 md:px-0">
                <div id="confession-content" className="max-w-3xl mx-auto bg-white text-black p-8 md:p-12 shadow-2xl rounded-3xl min-h-[800px]">
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
                                    {pastoralNotes.map((note, i) => <li key={i}>{note}</li>)}
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
                                    {commitments.map((item, i) => <li key={i}>{item}</li>)}
                                </ol>
                            </section>
                        )}

                        {/* FIGHT AGAINST SIN SECTION */}
                        <div className="mt-8">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-black flex-1" />
                                <h2 className="text-2xl font-bold uppercase tracking-widest text-center">Luta Contra o Pecado</h2>
                                <div className="h-px bg-black flex-1" />
                            </div>

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

                        {/* Footer */}
                        <div className="mt-12 pt-6 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest">
                            <span>Confide App</span>
                            <span>{new Date().toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Styles */}
            <style>{`
                .force-expand .expandable-content { display: block !important; }
                @media print {
                    .expandable-content { display: block !important; }
                    .no-print { display: none !important; }
                }
            `}</style>

            {/* Hidden Summary Container (1080x1920 - 9:16) - Improved Design */}
            <div
                id="confession-summary"
                style={{
                    display: 'none',
                    position: 'absolute',
                    left: '-9999px',
                    width: '1080px',
                    height: '1920px',
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    overflow: 'hidden'
                }}
            >
                <div style={{ padding: '80px 60px', height: '100%', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h1 style={{ fontSize: '72px', fontWeight: 'bold', margin: 0, letterSpacing: '-2px', color: '#000000' }}>CONFIDE</h1>
                        <p style={{ fontSize: '20px', fontWeight: '600', color: '#d97706', textTransform: 'uppercase', letterSpacing: '12px', marginTop: '16px' }}>Ficha de Confissão</p>
                    </div>

                    {/* Summary Box */}
                    <div style={{ backgroundColor: '#f9fafb', borderLeft: '6px solid #000', padding: '32px 40px', marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 24px 0', display: 'flex', alignItems: 'center', gap: '16px', color: '#000000' }}>
                            <span style={{ color: '#f59e0b', fontSize: '24px' }}>●</span> RESUMO
                        </h2>
                        <div style={{ fontSize: '22px', color: '#000000' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb', padding: '12px 0' }}>
                                <span style={{ color: '#6b7280' }}>Tempo sem confessar</span>
                                <span style={{ fontWeight: 'bold', color: '#000000' }}>{exam.lastConfessionDays} dias</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e5e7eb', padding: '12px 0' }}>
                                <span style={{ color: '#6b7280' }}>Pecados Graves</span>
                                <span style={{ fontWeight: 'bold', color: '#dc2626' }}>{summary.graveSins}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
                                <span style={{ color: '#6b7280' }}>Pecados Veniais</span>
                                <span style={{ fontWeight: 'bold', color: '#000000' }}>{summary.venialSins}</span>
                            </div>
                        </div>
                    </div>

                    {/* Confession Talk */}
                    <div style={{ marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 24px 0', display: 'flex', alignItems: 'center', gap: '16px', color: '#000000' }}>
                            <span style={{ color: '#f59e0b', fontSize: '24px' }}>●</span> PARA DIZER AO PADRE
                        </h2>
                        <p style={{ fontSize: '26px', lineHeight: '1.6', fontStyle: 'italic', color: '#374151', margin: 0 }}>
                            &quot;{confessionTalk}&quot;
                        </p>
                    </div>

                    {/* Sins List - Bullet points */}
                    <div style={{ flex: 1, marginBottom: '50px' }}>
                        <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 24px 0', display: 'flex', alignItems: 'center', gap: '16px', color: '#000000' }}>
                            <span style={{ color: '#f59e0b', fontSize: '24px' }}>●</span> PECADOS
                        </h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                            {exam.sins.map((sin, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        padding: '12px 20px',
                                        backgroundColor: isGraveSin(sin.category) ? '#fef2f2' : '#fffbeb',
                                        border: `2px solid ${isGraveSin(sin.category) ? '#dc2626' : '#f59e0b'}`,
                                        borderRadius: '8px',
                                        fontSize: '20px',
                                        fontWeight: '500',
                                        color: '#000000'
                                    }}
                                >
                                    <span style={{ color: isGraveSin(sin.category) ? '#dc2626' : '#f59e0b', fontSize: '16px' }}>●</span>
                                    {sin.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Act of Contrition */}
                    <div style={{ backgroundColor: '#fffbeb', padding: '40px', textAlign: 'center', border: '2px solid #fcd34d', borderRadius: '12px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#d97706', textTransform: 'uppercase', letterSpacing: '6px', marginBottom: '20px', marginTop: 0 }}>Ato de Contrição</h3>
                        <p style={{ fontSize: '22px', fontStyle: 'italic', color: '#374151', lineHeight: '1.6', margin: 0 }}>
                            &quot;{actOfContrition}&quot;
                        </p>
                    </div>

                    {/* Footer */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', fontSize: '16px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '3px' }}>
                        <span>Confide App</span>
                        <span>{new Date().toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfessionSheet;
