export const shortQuestions = [
    // SEÇÃO 1: RELAÇÃO COM DEUS (4 perguntas)
    {
        id: "q1_1",
        section: "Relação com Deus",
        text: "Você participou da Missa dominical todas as semanas?",
        category: "NAO_GUARDAR_DOMINGO",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        followUp: {
            type: "number",
            question: "Quantas vezes você faltou sem motivo justo?",
            sinName: "Faltar à Missa dominical"
        }
    },
    {
        id: "q1_2",
        section: "Relação com Deus",
        text: "Você reza diariamente?",
        category: "PREGUICA_ESPIRITUAL",
        subcategory: "PECADOS_VENIAIS",
        severity: "venial",
        followUp: {
            type: "select",
            question: "Com que frequência você reza?",
            options: ["Nunca", "Raramente", "1-2 vezes por semana", "Só em momentos de necessidade"],
            sinName: "Negligência na oração diária"
        }
    },
    {
        id: "q1_3",
        section: "Relação com Deus",
        text: "Você se confessa pelo menos uma vez ao ano?",
        category: "NAO_GUARDAR_DOMINGO",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        followUp: {
            type: "auto",
            sinName: "Não cumprir o preceito da confissão anual",
            description: "Faz mais de um ano desde minha última confissão"
        }
    },
    {
        id: "q1_4",
        section: "Relação com Deus",
        text: "Você consultou horóscopos, tarot, médiuns, benzedeiros ou praticou espiritismo?",
        category: "AMAR_A_DEUS_SOBRE_TODAS_AS_COISAS",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        followUp: {
            type: "checkboxes",
            question: "Que tipo de prática você realizou?",
            options: [
                "Horóscopo/Astrologia",
                "Tarot/Cartomancia",
                "Espiritismo/Mediunidade",
                "Reiki/Energias",
                "Macumba/Candomblé",
                "Outra"
            ],
            sinName: "Superstição ou práticas ocultas"
        }
    },

    // SEÇÃO 2: CASTIDADE E PUREZA (3 perguntas)
    {
        id: "q2_1",
        section: "Castidade",
        text: "Você praticou masturbação?",
        category: "LUXURIA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "grave",
        followUp: {
            type: "select",
            question: "Com que frequência?",
            options: [
                "Raramente (1-2 vezes)",
                "Ocasionalmente (1x/semana)",
                "Frequentemente (2-3x/semana)",
                "Diariamente"
            ],
            sinName: "Masturbação"
        }
    },
    {
        id: "q2_2",
        section: "Castidade",
        text: "Você assistiu pornografia (vídeos, fotos, sites)?",
        category: "LUXURIA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "grave",
        followUp: {
            type: "textarea",
            question: "Com que frequência e por quanto tempo?",
            placeholder: "Ex: 2-3 vezes por semana, cerca de 30 minutos cada vez",
            sinName: "Uso de pornografia"
        }
    },
    {
        id: "q2_3",
        section: "Castidade",
        text: "Você praticou relações sexuais fora do casamento?",
        category: "LUXURIA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "grave",
        followUp: {
            type: "checkboxes",
            question: "Havia alguma circunstância agravante?",
            options: [
                "Adultério (eu ou a outra pessoa era casada)",
                "Pessoa consagrada a Deus",
                "Pessoa menor de idade",
                "Relação homossexual",
                "Nenhuma das anteriores"
            ],
            sinName: "Relações sexuais fora do casamento"
        }
    },

    // SEÇÃO 3: FAMÍLIA E PRÓXIMO (3 perguntas)
    {
        id: "q3_1",
        section: "Família",
        text: "Você desrespeitou, ofendeu ou desobedeceu seus pais?",
        category: "DESONRAR_PAI_MAE",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "venial",
        followUp: {
            type: "textarea",
            question: "Como isso aconteceu?",
            placeholder: "Ex: Discuti com eles, gritei, fui grosseiro...",
            sinName: "Desrespeito ou desobediência aos pais"
        }
    },
    {
        id: "q3_2",
        section: "Família",
        text: "Você guardou rancor, ódio ou se recusou a perdoar alguém?",
        category: "FALTA_DE_PERDAO",
        subcategory: "PECADOS_VENIAIS",
        severity: "grave_if_persistent",
        followUp: {
            type: "select",
            question: "Há quanto tempo você guarda esse ressentimento?",
            options: ["Dias", "Semanas", "Meses", "Anos"],
            sinName: "Rancor ou falta de perdão"
        }
    },
    {
        id: "q3_3",
        section: "Família",
        text: "Você deixou de ajudar alguém necessitado que estava ao seu alcance?",
        category: "FALTA_DE_CARIDADE",
        subcategory: "PECADOS_VENIAIS",
        severity: "venial",
        followUp: {
            type: "textarea",
            question: "Descreva a situação:",
            sinName: "Omissão de caridade"
        }
    },

    // SEÇÃO 4: VERDADE E JUSTIÇA (3 perguntas)
    {
        id: "q4_1",
        section: "Verdade",
        text: "Você mentiu?",
        category: "PEQUENA_MENTIRA",
        subcategory: "PECADOS_VENIAIS",
        severity: "venial",
        followUp: {
            type: "yes_no",
            question: "Suas mentiras causaram prejuízo grave a alguém?",
            severityUpgrade: "NAO_LEVANTAR_FALSO_TESTEMUNHO",
            sinName: "Mentira"
        }
    },
    {
        id: "q4_2",
        section: "Verdade",
        text: "Você falou mal de alguém, revelando defeitos ou fofocando?",
        category: "FOFOCA",
        subcategory: "PECADOS_VENIAIS",
        severity: "venial",
        followUp: {
            type: "yes_no",
            question: "Isso prejudicou a reputação dessa pessoa?",
            sinName: "Fofoca ou maledicência"
        }
    },
    {
        id: "q4_3",
        section: "Verdade",
        text: "Você roubou ou pegou algo que não era seu?",
        category: "NAO_ROUBAR",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        followUp: {
            type: "textarea",
            question: "Qual foi o valor aproximado ou o que foi roubado?",
            placeholder: "Ex: R$50, um livro, tempo de trabalho...",
            sinName: "Roubo ou furto"
        }
    },

    // SEÇÃO 5: VÍCIOS E SAÚDE (2 perguntas)
    {
        id: "q5_1",
        section: "Vícios",
        text: "Você usou drogas recreativas ou se embriagou?",
        category: "GULA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "grave",
        followUp: {
            type: "checkboxes",
            question: "Que tipo de substância?",
            options: [
                "Álcool (embriaguez)",
                "Maconha",
                "Cocaína",
                "Medicamentos sem prescrição",
                "Outras drogas"
            ],
            additionalQuestion: {
                type: "textarea",
                question: "Isso te levou a ações que você se arrepende? Quais?"
            },
            sinName: "Uso de drogas ou embriaguez"
        }
    },
    {
        id: "q5_2",
        section: "Vícios",
        text: "Você perdeu o controle da raiva, agrediu ou desejou mal a alguém?",
        category: "IRA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "grave_if_violence",
        followUp: {
            type: "yes_no",
            question: "Houve agressão física?",
            severityUpgrade: "NAO_MATAR",
            sinName: "Ira ou agressão"
        }
    }
];
