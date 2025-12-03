import React from 'react';
import { motion } from 'framer-motion';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';

const FollowUpPanel = ({ question, frequency, setFrequency, details, setDetails, onSave }) => {
    const { followUp } = question;

    if (!followUp) return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="space-y-6 mt-8 bg-white/5 rounded-2xl p-6 border border-white/10"
        >
            <div className="space-y-2">
                <label className="text-sm text-white/70 font-medium pl-1">
                    Detalhes (opcional)
                </label>
                <Textarea
                    placeholder="Descreva com suas palavras..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="bg-black/40"
                />
            </div>

            <Button onClick={onSave} variant="primary" size="lg" className="w-full">
                Confirmar e Continuar
            </Button>
        </motion.div>
    );

    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="space-y-6 mt-8 bg-white/5 rounded-2xl p-6 border border-white/10"
        >
            {/* Frequency / Selection Input */}
            {followUp.type === 'select' && (
                <div className="space-y-2">
                    <label className="text-sm text-white/70 font-medium pl-1">{followUp.question}</label>
                    <select
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                        className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-amber-500/50 focus:outline-none appearance-none"
                    >
                        <option value="" className="bg-gray-900">Selecione...</option>
                        {followUp.options?.map((opt, idx) => (
                            <option key={idx} value={opt} className="bg-gray-900">{opt}</option>
                        ))}
                    </select>
                </div>
            )}

            {followUp.type === 'checkboxes' && (
                <div className="space-y-3">
                    <label className="text-sm text-white/70 font-medium pl-1">{followUp.question}</label>
                    <div className="space-y-2">
                        {followUp.options?.map((opt, idx) => (
                            <Checkbox
                                key={idx}
                                label={opt}
                                checked={frequency.includes(opt)}
                                onChange={(e) => {
                                    const current = Array.isArray(frequency) ? frequency : [];
                                    if (e.target.checked) {
                                        setFrequency([...current, opt]);
                                    } else {
                                        setFrequency(current.filter(item => item !== opt));
                                    }
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}

            {followUp.type === 'yes_no' && (
                <div className="space-y-3">
                    <label className="text-sm text-white/70 font-medium pl-1">{followUp.question}</label>
                    <div className="flex gap-4">
                        <Button
                            variant={frequency === 'Sim' ? 'primary' : 'secondary'}
                            onClick={() => setFrequency('Sim')}
                            className="flex-1"
                        >
                            Sim
                        </Button>
                        <Button
                            variant={frequency === 'Não' ? 'primary' : 'secondary'}
                            onClick={() => setFrequency('Não')}
                            className="flex-1"
                        >
                            Não
                        </Button>
                    </div>
                </div>
            )}

            {/* Details Textarea */}
            <div className="space-y-2">
                <label className="text-sm text-white/70 font-medium pl-1">
                    {followUp.type === 'textarea' ? followUp.question : 'Detalhes adicionais (opcional)'}
                </label>
                <Textarea
                    placeholder={followUp.placeholder || "Descreva com suas palavras..."}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="bg-black/40"
                />
            </div>

            <Button onClick={onSave} variant="primary" size="lg" className="w-full">
                Salvar e Continuar
            </Button>
        </motion.div>
    );
};

export default FollowUpPanel;
