export const longQuestions = [
    // SEÇÃO 1: FÉ E RELAÇÃO COM DEUS (10 perguntas)
    {
        id: "q1_1_long",
        section: "Fé e Relação com Deus",
        text: "Você duvidou ou negou alguma verdade de fé ensinada pela Igreja?",
        category: "AMAR_A_DEUS_SOBRE_TODAS_AS_COISAS",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        sinName: "Dúvida voluntária contra a fé",
        followUp: {
            type: "checkboxes",
            question: "Sobre qual ensinamento você duvidou?",
            options: [
                "Existência de Deus",
                "Divindade de Jesus",
                "Presença real na Eucaristia",
                "Infalibilidade do Papa",
                "Ressurreição dos mortos",
                "Inferno/Purgatório",
                "Outro"
            ]
        }
    },
    {
        id: "q1_2_long",
        section: "Fé e Relação com Deus",
        text: "Você blasfemou ou falou sem respeito de Deus, Maria, santos ou coisas sagradas?",
        category: "TOMAR_NOME_DE_DEUS_EM_VAO",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        sinName: "Blasfêmia ou desrespeito ao sagrado"
    },
    {
        id: "q1_3_long",
        section: "Fé e Relação com Deus",
        text: "Você criticou ou falou mal da Igreja, do Papa, bispos ou padres?",
        category: "TOMAR_NOME_DE_DEUS_EM_VAO",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "venial",
        sinName: "Crítica ou maledicência contra o clero/Igreja",
        followUp: {
            type: "yes_no",
            question: "Isso causou escândalo ou afastou alguém da fé?",
            severityUpgrade: "grave"
        }
    },
    {
        id: "q1_4_long",
        section: "Fé e Relação com Deus",
        text: "Você reza diariamente com atenção e devoção?",
        category: "PREGUICA_ESPIRITUAL",
        subcategory: "PECADOS_VENIAIS",
        severity: "venial",
        sinName: "Negligência na oração",
        followUp: {
            type: "select",
            question: "Quanto tempo você dedica à oração por semana?",
            options: ["Nenhum", "Menos de 30min", "30min-1h", "1-2h", "Mais de 2h"]
        }
    },
    {
        id: "q1_5_long",
        section: "Fé e Relação com Deus",
        text: "Você se distrai voluntariamente durante a oração ou a Missa?",
        category: "DESATENCAO_NA_ORACAO",
        subcategory: "PECADOS_VENIAIS",
        severity: "venial",
        sinName: "Distração voluntária na oração"
    },
    {
        id: "q1_6_long",
        section: "Fé e Relação com Deus",
        text: "Você lê e medita regularmente na Palavra de Deus?",
        category: "DESINTERESSE_PELAS_COISAS_DE_DEUS",
        subcategory: "PECADOS_VENIAIS",
        severity: "venial",
        sinName: "Desinteresse pela Palavra de Deus"
    },
    {
        id: "q1_7_long",
        section: "Fé e Relação com Deus",
        text: "Você comunga sem estar em estado de graça (com pecado mortal não confessado)?",
        category: "NAO_GUARDAR_DOMINGO",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        sinName: "Comunhão sacrílega"
    },
    {
        id: "q1_8_long",
        section: "Fé e Relação com Deus",
        text: "Você descumpriu o jejum eucarístico de 1 hora antes da comunhão?",
        category: "NAO_GUARDAR_DOMINGO",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "venial",
        sinName: "Quebra do jejum eucarístico"
    },
    {
        id: "q1_9_long",
        section: "Fé e Relação com Deus",
        text: "Você contribui financeiramente com a Igreja segundo suas possibilidades?",
        category: "FALTA_DE_CARIDADE",
        subcategory: "PECADOS_VENIAIS",
        severity: "venial",
        sinName: "Omissão no dízimo/ajuda à Igreja"
    },
    {
        id: "q1_10_long",
        section: "Fé e Relação com Deus",
        text: "Você guardou a abstinência de carne nas sextas-feiras?",
        category: "NAO_GUARDAR_DOMINGO",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "venial",
        sinName: "Não guardar abstinência de carne"
    },

    // SEÇÃO 2: CASTIDADE (8 perguntas)
    {
        id: "q2_1_long",
        section: "Castidade",
        text: "Você consentiu em pensamentos ou desejos impuros?",
        category: "LUXURIA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "grave_if_deliberate",
        sinName: "Pensamentos impuros consentidos"
    },
    {
        id: "q2_2_long",
        section: "Castidade",
        text: "Você olhou para alguém com intenção de obter prazer impuro?",
        category: "LUXURIA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "venial",
        sinName: "Olhares impuros"
    },
    {
        id: "q2_3_long",
        section: "Castidade",
        text: "Você veste roupas provocantes que realçam partes do corpo de forma impudica?",
        category: "LUXURIA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "venial",
        context: "escândalo",
        sinName: "Imodéstia no vestir"
    },
    {
        id: "q2_4_long",
        section: "Castidade",
        text: "Você leu livros, viu filmes ou ouviu músicas que incitavam à impureza?",
        category: "LUXURIA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "venial",
        sinName: "Consumo de conteúdo impuro"
    },
    {
        id: "q2_5_long",
        section: "Castidade",
        text: "Você participou ou deu atenção a conversas imorais?",
        category: "LUXURIA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "venial",
        sinName: "Conversas imorais"
    },
    {
        id: "q2_6_long",
        section: "Castidade",
        text: "Você teve liberdades no namoro que não respeitam a castidade?",
        category: "LUXURIA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "venial_to_grave",
        sinName: "Liberdades indevidas no namoro",
        followUp: {
            type: "yes_no",
            question: "Houve atos sexuais completos?",
            severityUpgrade: "grave"
        }
    },
    {
        id: "q2_7_long",
        section: "Castidade",
        text: "Se é casado: Você usou métodos contraceptivos artificiais (pílula, preservativo, DIU, laqueadura)?",
        category: "NAO_COMETER_ADULTERIO",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        applicableOnly: "married",
        sinName: "Uso de contraceptivos artificiais"
    },
    {
        id: "q2_8_long",
        section: "Castidade",
        text: "Se é casado: Você foi infiel ao seu cônjuge (por pensamentos ou ações)?",
        category: "NAO_COMETER_ADULTERIO",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        applicableOnly: "married",
        sinName: "Infidelidade conjugal"
    },

    // SEÇÃO 3: FAMÍLIA (6 perguntas)
    {
        id: "q3_1_long",
        section: "Família",
        text: "Você desobedeceu ou faltou ao respeito com seus pais?",
        category: "DESONRAR_PAI_MAE",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "venial",
        sinName: "Desobediência ou desrespeito aos pais"
    },
    {
        id: "q3_2_long",
        section: "Família",
        text: "Você deixou de ajudar seus pais espiritual ou materialmente?",
        category: "DESONRAR_PAI_MAE",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "venial_to_grave",
        sinName: "Negligência com os pais"
    },
    {
        id: "q3_3_long",
        section: "Família",
        text: "Se tem filhos: Você descuidou da educação religiosa deles ou atrasou batismo/primeira comunhão?",
        category: "DESONRAR_PAI_MAE",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        applicableOnly: "parents",
        sinName: "Negligência na educação religiosa dos filhos"
    },
    {
        id: "q3_4_long",
        section: "Família",
        text: "Ao corrigir filhos, você se deixou dominar pela ira ou omitiu repreensões necessárias?",
        category: "IRA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "venial",
        applicableOnly: "parents",
        sinName: "Ira ou omissão na correção dos filhos"
    },
    {
        id: "q3_5_long",
        section: "Família",
        text: "Você regulou o uso que seus filhos fazem de TV, internet, celular e redes sociais?",
        category: "NEGLIGENCIA",
        subcategory: "PECADOS_VENIAIS",
        severity: "venial",
        applicableOnly: "parents",
        sinName: "Negligência na vigilância dos filhos"
    },
    {
        id: "q3_6_long",
        section: "Família",
        text: "Você tratou mal seu cônjuge com palavras ou ações?",
        category: "FALTA_DE_CARIDADE",
        subcategory: "PECADOS_VENIAIS",
        severity: "venial",
        applicableOnly: "married",
        sinName: "Maus tratos ao cônjuge"
    },

    // SEÇÃO 4: PRÓXIMO (8 perguntas)
    {
        id: "q4_1_long",
        section: "Próximo",
        text: "Você teve ódio, rancor ou desejou vingança contra alguém?",
        category: "FALTA_DE_PERDAO",
        subcategory: "PECADOS_VENIAIS",
        severity: "grave_if_persistent",
        sinName: "Ódio, rancor ou desejo de vingança"
    },
    {
        id: "q4_2_long",
        section: "Próximo",
        text: "Você agrediu, insultou ou feriu alguém fisicamente?",
        category: "NAO_MATAR",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        sinName: "Agressão física ou verbal"
    },
    {
        id: "q4_3_long",
        section: "Próximo",
        text: "Você praticou, aconselhou ou facilitou um aborto?",
        category: "NAO_MATAR",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        note: "excomunhão latae sententiae",
        sinName: "Aborto (prática ou colaboração)"
    },
    {
        id: "q4_4_long",
        section: "Próximo",
        text: "Você deu mau exemplo ou escândalo que levou outros ao pecado?",
        category: "FALTA_DE_CARIDADE",
        subcategory: "PECADOS_VENIAIS",
        severity: "grave",
        sinName: "Escândalo ou mau exemplo"
    },
    {
        id: "q4_5_long",
        section: "Próximo",
        text: "Você caluniou alguém, atribuindo-lhe defeitos falsos?",
        category: "NAO_LEVANTAR_FALSO_TESTEMUNHO",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        sinName: "Calúnia"
    },
    {
        id: "q4_6_long",
        section: "Próximo",
        text: "Você revelou defeitos verdadeiros de alguém sem motivo justo, prejudicando sua reputação?",
        category: "FALAR_MAL_DOS_OUTROS",
        subcategory: "PECADOS_VENIAIS",
        severity: "venial_to_grave",
        sinName: "Difamação ou maledicência"
    },
    {
        id: "q4_7_long",
        section: "Próximo",
        text: "Você julgou as intenções dos outros sem conhecer a situação?",
        category: "FALAR_MAL_DOS_OUTROS",
        subcategory: "PECADOS_VENIAIS",
        severity: "venial",
        sinName: "Juízo temerário"
    },
    {
        id: "q4_8_long",
        section: "Próximo",
        text: "Você sentiu inveja das conquistas, qualidades ou bens de outras pessoas?",
        category: "INVEJA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "venial",
        sinName: "Inveja"
    },

    // SEÇÃO 5: VERDADE E JUSTIÇA (8 perguntas)
    {
        id: "q5_1_long",
        section: "Verdade e Justiça",
        text: "Você mentiu causando prejuízo grave a alguém?",
        category: "NAO_LEVANTAR_FALSO_TESTEMUNHO",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        sinName: "Mentira com prejuízo grave"
    },
    {
        id: "q5_2_long",
        section: "Verdade e Justiça",
        text: "Você prestou falso juramento ou deu falso testemunho?",
        category: "NAO_LEVANTAR_FALSO_TESTEMUNHO",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        sinName: "Falso testemunho ou perjúrio"
    },
    {
        id: "q5_3_long",
        section: "Verdade e Justiça",
        text: "Você roubou, furtou ou ajudou alguém a roubar?",
        category: "NAO_ROUBAR",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        sinName: "Roubo ou furto",
        followUp: {
            type: "yes_no",
            question: "Você devolveu ou compensou o prejuízo?"
        }
    },
    {
        id: "q5_4_long",
        section: "Verdade e Justiça",
        text: "Se é empregador: Você pagou salários justos aos empregados?",
        category: "NAO_ROUBAR",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        applicableOnly: "employers",
        sinName: "Injustiça salarial"
    },
    {
        id: "q5_5_long",
        section: "Verdade e Justiça",
        text: "Você trabalhou mal, desperdiçou tempo ou abusou da confiança do empregador?",
        category: "NAO_ROUBAR",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "venial",
        sinName: "Negligência no trabalho"
    },
    {
        id: "q5_6_long",
        section: "Verdade e Justiça",
        text: "Você gastou mais do que suas possibilidades ou tem vício em jogo?",
        category: "AVAREZA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "venial",
        sinName: "Prodigalidade ou jogo"
    },
    {
        id: "q5_7_long",
        section: "Verdade e Justiça",
        text: "Você enganou alguém em negócios, cobrando mais do que o justo?",
        category: "NAO_ROUBAR",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        sinName: "Fraude nos negócios"
    },
    {
        id: "q5_8_long",
        section: "Verdade e Justiça",
        text: "Você copiou livros, software, filmes ou músicas sem autorização?",
        category: "NAO_ROUBAR",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "venial",
        sinName: "Pirataria ou violação de direitos autorais"
    },

    // SEÇÃO 6: ORGULHO E VÍCIOS (6 perguntas)
    {
        id: "q6_1_long",
        section: "Orgulho e Vícios",
        text: "Você foi orgulhoso, vaidoso ou buscou reconhecimento excessivo?",
        category: "SOBERBA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "venial",
        sinName: "Orgulho ou vaidade"
    },
    {
        id: "q6_2_long",
        section: "Orgulho e Vícios",
        text: "Você foi teimoso, arrogante ou se sentiu superior aos outros?",
        category: "SOBERBA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "venial",
        sinName: "Arrogância ou soberba"
    },
    {
        id: "q6_3_long",
        section: "Orgulho e Vícios",
        text: "Você foi preguiçoso, deixando de cumprir responsabilidades?",
        category: "PREGUICA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "venial",
        sinName: "Preguiça"
    },
    {
        id: "q6_4_long",
        section: "Orgulho e Vícios",
        text: "Você se embriagou ou bebeu sem controle?",
        category: "GULA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "grave_if_frequent",
        sinName: "Embriaguez"
    },
    {
        id: "q6_5_long",
        section: "Orgulho e Vícios",
        text: "Você usou drogas ilícitas?",
        category: "GULA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "grave",
        sinName: "Uso de drogas",
        followUp: {
            type: "textarea",
            question: "Que tipo de droga e com que frequência?"
        }
    },
    {
        id: "q6_6_long",
        section: "Orgulho e Vícios",
        text: "Você foi avarento, apegado ao dinheiro ou resistiu em partilhar/doar?",
        category: "AVAREZA",
        subcategory: "PECADOS_CAPITAIS",
        severity: "venial",
        sinName: "Avareza ou apego material"
    },

    // SEÇÃO 7: OUTRAS QUESTÕES (4 perguntas)
    {
        id: "q7_1_long",
        section: "Outras Questões",
        text: "Você foi imprudente ao dirigir, colocando vidas em risco?",
        category: "NAO_MATAR",
        subcategory: "DEZ_MANDAMENTOS",
        severity: "grave",
        sinName: "Imprudência no trânsito"
    },
    {
        id: "q7_2_long",
        section: "Outras Questões",
        text: "Você desperdiçou tempo com distrações inúteis e redes sociais?",
        category: "MAL_USO_DO_TEMPO",
        subcategory: "PECADOS_VENIAIS",
        severity: "venial",
        sinName: "Perda de tempo"
    },
    {
        id: "q7_3_long",
        section: "Outras Questões",
        text: "Você disse palavrões ou usou linguagem vulgar?",
        category: "DESRESPEITO_PEQUENO",
        subcategory: "PECADOS_VENIAIS",
        severity: "venial",
        sinName: "Linguagem vulgar ou palavrões"
    },
    {
        id: "q7_4_long",
        section: "Outras Questões",
        text: "Há algum outro pecado que você gostaria de confessar?",
        category: "SEM_CATEGORIA_EXATA",
        subcategory: "SEM_CATEGORIA_EXATA",
        type: "textarea",
        optional: true,
        placeholder: "Descreva livremente outros pecados que cometeu...",
        sinName: "Outro pecado"
    }
];
