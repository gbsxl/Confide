/**
 * Mapeamento de Santos Padroeiros e Intercessores por Categoria de Pecado
 * Cada entrada contém: nome do santo, área de intercessão, e breve razão
 */

export const patronSaints = {
    // ============================================
    // PECADOS CAPITAIS
    // ============================================

    SOBERBA: {
        primary: {
            name: "São José",
            title: "Padroeiro da Humildade",
            reason: "Exemplo supremo de humildade silenciosa e obediência a Deus",
            feast: "19 de março",
            prayer: "São José, que fostes escolhido por Deus para ser o guardião da Sagrada Família, ensina-me a humildade e a confiança na vontade divina."
        },
        secondary: [
            {
                name: "Santa Teresinha do Menino Jesus",
                title: "Doutora da Igreja",
                reason: "Viveu e ensinou o 'pequeno caminho' de humildade infantil",
                feast: "1º de outubro"
            },
            {
                name: "São Francisco de Assis",
                title: "Poverello de Assis",
                reason: "Renunciou a riquezas e orgulho pela pobreza radical",
                feast: "4 de outubro"
            }
        ],
        virtue: "Humildade"
    },

    AVAREZA: {
        primary: {
            name: "São Francisco de Assis",
            title: "Padroeiro da Pobreza Evangélica",
            reason: "Abraçou a 'Senhora Pobreza' e ensinou o desapego radical dos bens",
            feast: "4 de outubro",
            prayer: "São Francisco, que deixaste tudo para seguir Cristo pobre, livra-me do apego desordenado aos bens materiais."
        },
        secondary: [
            {
                name: "São Martinho de Tours",
                title: "Apóstolo da Caridade",
                reason: "Partilhou sua capa com um mendigo, exemplo de generosidade",
                feast: "11 de novembro"
            },
            {
                name: "Santo Antônio de Pádua",
                title: "Padroeiro dos Pobres",
                reason: "Incansável defensor da justiça social e esmola",
                feast: "13 de junho"
            }
        ],
        virtue: "Generosidade"
    },

    LUXURIA: {
        primary: {
            name: "Santo Tomás de Aquino",
            title: "Doutor Angélico e Padroeiro da Castidade",
            reason: "Recebeu a 'Cinta da Castidade' dos anjos após resistir heroicamente à tentação",
            feast: "28 de janeiro",
            prayer: "Santo Tomás de Aquino, que recebeste dos anjos a cintura da pureza perpétua, alcança-me a graça da castidade."
        },
        secondary: [
            {
                name: "Santa Maria Goretti",
                title: "Mártir da Pureza",
                reason: "Preferiu a morte a pecar contra a castidade aos 11 anos",
                feast: "6 de julho"
            },
            {
                name: "São Luís Gonzaga",
                title: "Padroeiro da Juventude",
                reason: "Manteve pureza angelical mesmo na corte mundana",
                feast: "21 de junho"
            },
            {
                name: "Santo Agostinho de Hipona",
                title: "Doutor da Graça",
                reason: "Venceu uma vida de impureza pela conversão radical",
                feast: "28 de agosto"
            },
            {
                name: "Beato Carlo Acutis",
                title: "Padroeiro da Internet",
                reason: "Manteve pureza na era digital, evitando pornografia online",
                feast: "12 de outubro"
            }
        ],
        virtue: "Castidade"
    },

    IRA: {
        primary: {
            name: "São Francisco de Sales",
            title: "Doutor da Mansidão",
            reason: "Venceu seu temperamento colérico pela paciência heroica",
            feast: "24 de janeiro",
            prayer: "São Francisco de Sales, que transformaste tua ira natural em doçura sobrenatural, ensina-me a mansidão."
        },
        secondary: [
            {
                name: "Santa Mônica",
                title: "Mãe de Santo Agostinho",
                reason: "Paciência incansável com marido violento e filho rebelde",
                feast: "27 de agosto"
            },
            {
                name: "São Manuel da Pérsia",
                title: "Mártir da Paciência",
                reason: "Suportou torturas cruéis sem revidar nem amaldiçoar",
                feast: "17 de junho"
            }
        ],
        virtue: "Mansidão"
    },

    GULA: {
        primary: {
            name: "São Carlos Borromeu",
            title: "Modelo de Temperança",
            reason: "Praticou jejuns rigorosos e mortificação no comer e beber",
            feast: "4 de novembro",
            prayer: "São Carlos Borromeu, que domaste teu corpo pelo jejum, ajuda-me a vencer a gula e a intemperança."
        },
        secondary: [
            {
                name: "Santa Catarina de Sena",
                title: "Doutora da Igreja",
                reason: "Viveu com extrema austeridade alimentar, alimentada pela Eucaristia",
                feast: "29 de abril"
            },
            {
                name: "São Maximiliano Kolbe",
                title: "Mártir da Caridade",
                reason: "Para dependência química/álcool - ofereceu a vida no campo de concentração",
                feast: "14 de agosto"
            }
        ],
        virtue: "Temperança"
    },

    INVEJA: {
        primary: {
            name: "São José",
            title: "Modelo de Caridade Fraterna",
            reason: "Nunca invejou ninguém, alegrou-se no plano de Deus",
            feast: "19 de março",
            prayer: "São José, que te alegraste no bem alheio sem inveja, livra meu coração da tristeza pelo sucesso dos outros."
        },
        secondary: [
            {
                name: "São João Batista",
                title: "Precursor do Senhor",
                reason: "Disse 'Ele deve crescer, eu diminuir' - sem ciúmes de Cristo",
                feast: "24 de junho"
            },
            {
                name: "Santa Teresinha do Menino Jesus",
                title: "Pequena Flor",
                reason: "Amou profundamente suas irmãs mesmo quando preferidas pela madre",
                feast: "1º de outubro"
            }
        ],
        virtue: "Caridade Fraterna"
    },

    PREGUICA: {
        primary: {
            name: "São Josemaría Escrivá",
            title: "Padroeiro da Santificação do Trabalho",
            reason: "Ensinou que o trabalho comum é caminho de santidade",
            feast: "26 de junho",
            prayer: "São Josemaría, que ensinaste a santificar o trabalho diário, livra-me da preguiça e da negligência."
        },
        secondary: [
            {
                name: "Beato Carlo Acutis",
                title: "Padroeiro contra a Acídia Digital",
                reason: "Usou a tecnologia com disciplina para evangelizar, não para procrastinar",
                feast: "12 de outubro"
            },
            {
                name: "São Bento de Núrsia",
                title: "Pai do Monasticismo Ocidental",
                reason: "Regra: 'Ora et Labora' - oração e trabalho em equilíbrio",
                feast: "11 de julho"
            }
        ],
        virtue: "Diligência"
    },

    // ============================================
    // DEZ MANDAMENTOS
    // ============================================

    AMAR_A_DEUS_SOBRE_TODAS_AS_COISAS: {
        primary: {
            name: "Santa Teresinha do Menino Jesus",
            title: "Doutora do Amor de Deus",
            reason: "Viveu intensamente o amor a Deus em cada pequeno ato",
            feast: "1º de outubro",
            prayer: "Santa Teresinha, que amaste a Deus acima de tudo com simplicidade infantil, ensina-me a amar."
        },
        secondary: [
            {
                name: "São Maximiliano Kolbe",
                title: "Mártir da Caridade",
                reason: "Amou Deus a ponto de dar a vida pelo próximo",
                feast: "14 de agosto"
            },
            {
                name: "São Tomás Apóstolo",
                title: "Apóstolo da Fé",
                reason: "Para dúvidas de fé - passou da dúvida à profissão 'Meu Senhor e meu Deus'",
                feast: "3 de julho"
            }
        ],
        virtue: "Amor a Deus"
    },

    TOMAR_NOME_DE_DEUS_EM_VAO: {
        primary: {
            name: "São João Crisóstomo",
            title: "Doutor da Igreja",
            reason: "Pregou incansavelmente contra a blasfêmia e o mau uso do Nome Divino",
            feast: "13 de setembro",
            prayer: "São João Crisóstomo, defensor do Santo Nome, purifica minha língua de toda blasfêmia."
        },
        secondary: [
            {
                name: "São Filipe Néri",
                title: "Apóstolo de Roma",
                reason: "Combateu palavrões e juramentos com alegria e humor santo",
                feast: "26 de maio"
            }
        ],
        virtue: "Reverência"
    },

    NAO_GUARDAR_DOMINGO: {
        primary: {
            name: "São Pio de Pietrelcina (Padre Pio)",
            title: "Sacerdote Estigmatizado",
            reason: "Celebrava Missas de profunda devoção, atraindo multidões à Eucaristia",
            feast: "23 de setembro",
            prayer: "Padre Pio, que viveste a Missa como calvário de amor, aumenta minha devoção eucarística."
        },
        secondary: [
            {
                name: "São Tarcísio",
                title: "Mártir da Eucaristia",
                reason: "Morreu aos 12 anos protegendo a Eucaristia de profanação",
                feast: "15 de agosto"
            },
            {
                name: "Santo Antônio Maria Claret",
                title: "Apóstolo da Eucaristia",
                reason: "Promoveu adoração eucarística e missa dominical",
                feast: "24 de outubro"
            }
        ],
        virtue: "Devoção Eucarística"
    },

    DESONRAR_PAI_MAE: {
        primary: {
            name: "São Luís Gonzaga",
            title: "Padroeiro da Juventude",
            reason: "Modelo de obediência filial mesmo em situações difíceis",
            feast: "21 de junho",
            prayer: "São Luís Gonzaga, que honraste teus pais com amor perfeito, ensina-me a respeitar e obedecer."
        },
        secondary: [
            {
                name: "Santa Mônica",
                title: "Mãe de Santo Agostinho",
                reason: "Para pais: exemplo de educação cristã perseverante",
                feast: "27 de agosto"
            },
            {
                name: "São José",
                title: "Padroeiro dos Pais",
                reason: "Pai adotivo de Jesus, modelo de paternidade responsável",
                feast: "19 de março"
            }
        ],
        virtue: "Piedade Filial"
    },

    NAO_MATAR: {
        primary: {
            name: "São Maximiliano Kolbe",
            title: "Mártir da Caridade",
            reason: "Deu a vida para salvar um pai de família em Auschwitz",
            feast: "14 de agosto",
            prayer: "São Maximiliano, que ofereceste tua vida por amor, livra-me do ódio e da vingança."
        },
        secondary: [
            {
                name: "Santa Gianna Beretta Molla",
                title: "Mãe e Médica",
                reason: "Para aborto - escolheu a vida do filho ao custo da própria vida",
                feast: "28 de abril"
            },
            {
                name: "São José Sánchez del Río",
                title: "Mártir Cristero",
                reason: "Para ira/violência - perdoou seus assassinos aos 14 anos",
                feast: "10 de fevereiro"
            },
            {
                name: "São Camilo de Lellis",
                title: "Padroeiro dos Enfermos",
                reason: "Para cuidado com a vida - dedicou-se heroicamente aos doentes",
                feast: "14 de julho"
            }
        ],
        virtue: "Respeito à Vida"
    },

    NAO_COMETER_ADULTERIO: {
        primary: {
            name: "Santa Maria Goretti",
            title: "Mártir da Pureza",
            reason: "Preferiu a morte a cometer pecado de impureza",
            feast: "6 de julho",
            prayer: "Santa Maria Goretti, que defendeste tua pureza até a morte, protege-me da infidelidade."
        },
        secondary: [
            {
                name: "São Luís IX (Rei de França)",
                title: "Rei Santo",
                reason: "Modelo de fidelidade conjugal mesmo sendo rei poderoso",
                feast: "25 de agosto"
            },
            {
                name: "Santa Margarida de Cortona",
                title: "Penitente",
                reason: "Para conversão após adultério/fornicação - viveu em concubinato e converteu-se radicalmente",
                feast: "22 de fevereiro"
            },
            {
                name: "Santos Luís e Zélie Martin",
                title: "Pais de Santa Teresinha",
                reason: "Primeiro casal canonizado junto - modelo de matrimônio santo",
                feast: "12 de julho"
            }
        ],
        virtue: "Fidelidade"
    },

    NAO_ROUBAR: {
        primary: {
            name: "São Mateus Apóstolo",
            title: "Ex-Publicano Convertido",
            reason: "De cobrador corrupto a apóstolo - restituiu tudo o que roubou",
            feast: "21 de setembro",
            prayer: "São Mateus, que devolveste o fruto de tua desonestidade, ajuda-me a ser justo e honesto."
        },
        secondary: [
            {
                name: "São Martinho de Porres",
                title: "Apóstolo da Caridade",
                reason: "Cuidou dos pobres com justiça e generosidade extremas",
                feast: "3 de novembro"
            },
            {
                name: "São José Operário",
                title: "Padroeiro dos Trabalhadores",
                reason: "Modelo de trabalho honesto e digno",
                feast: "1º de maio"
            }
        ],
        virtue: "Justiça"
    },

    NAO_LEVANTAR_FALSO_TESTEMUNHO: {
        primary: {
            name: "São Tomás Moro",
            title: "Mártir da Verdade",
            reason: "Preferiu ser decapitado a mentir contra sua consciência",
            feast: "22 de junho",
            prayer: "São Tomás Moro, que morreste pela verdade, liberta-me da mentira e da falsidade."
        },
        secondary: [
            {
                name: "São Filipe Néri",
                title: "Apóstolo de Roma",
                reason: "Para fofoca/detração - combateu a maledicência com sabedoria",
                feast: "26 de maio"
            },
            {
                name: "Santa Catarina de Alexandria",
                title: "Doutora Virgem",
                reason: "Confessou a verdade da fé diante de 50 filósofos pagãos",
                feast: "25 de novembro"
            }
        ],
        virtue: "Verdade"
    },

    NAO_COBICAR_MULHER_DO_PROXIMO: {
        primary: {
            name: "São José",
            title: "Esposo Casto",
            reason: "Guardou castidade perfeita no matrimônio com Maria",
            feast: "19 de março",
            prayer: "São José, esposo castíssimo de Maria, purifica meu coração de todo desejo impuro."
        },
        secondary: [
            {
                name: "Santo Agostinho de Hipona",
                title: "Doutor da Graça",
                reason: "Venceu concupiscência após anos de luta",
                feast: "28 de agosto"
            }
        ],
        virtue: "Pureza de Coração"
    },

    NAO_COBICAR_BENS_DO_PROXIMO: {
        primary: {
            name: "São Francisco de Assis",
            title: "Poverello",
            reason: "Viveu desapego total aos bens materiais",
            feast: "4 de outubro",
            prayer: "São Francisco, que renunciaste a toda propriedade, livra-me da cobiça e do apego."
        },
        secondary: [
            {
                name: "São Nicolau de Mira",
                title: "Doador Generoso",
                reason: "Distribuiu toda sua herança aos pobres anonimamente",
                feast: "6 de dezembro"
            }
        ],
        virtue: "Desapego"
    },

    // ============================================
    // PECADOS VENIAIS ESPECÍFICOS
    // ============================================

    FOFOCA: {
        primary: {
            name: "São Filipe Néri",
            title: "Apóstolo da Língua Controlada",
            reason: "Mandou uma fofoqueira espalhar penas ao vento para mostrar o dano irreparável da maledicência",
            feast: "26 de maio",
            prayer: "São Filipe Néri, mestre da caridade na língua, ensina-me a calar antes de ferir."
        },
        secondary: [],
        virtue: "Discrição"
    },

    PREGUICA_ESPIRITUAL: {
        primary: {
            name: "Santo Inácio de Loyola",
            title: "Fundador dos Jesuítas",
            reason: "Venceu a tibieza espiritual com disciplina e fervor metódico",
            feast: "31 de julho",
            prayer: "Santo Inácio, que inflamaste o mundo com zelo apostólico, cura minha tibieza espiritual."
        },
        secondary: [
            {
                name: "Santa Teresa de Ávila",
                title: "Doutora da Igreja",
                reason: "Combateu a mediocridade espiritual com reforma carmelita",
                feast: "15 de outubro"
            }
        ],
        virtue: "Fervor"
    },

    MAL_USO_DO_TEMPO: {
        primary: {
            name: "Beato Carlo Acutis",
            title: "Padroeiro da Internet",
            reason: "Usou tecnologia para evangelizar, não para procrastinar - 'A internet é um dom de Deus'",
            feast: "12 de outubro",
            prayer: "Beato Carlo, que usaste o tempo com sabedoria digital, livra-me do vício em telas."
        },
        secondary: [
            {
                name: "São Bento de Núrsia",
                title: "Pai dos Monges",
                reason: "Organizou o tempo em oração e trabalho equilibrados",
                feast: "11 de julho"
            }
        ],
        virtue: "Diligência"
    },

    FALTA_DE_PERDAO: {
        primary: {
            name: "Santa Maria Goretti",
            title: "Mártir do Perdão",
            reason: "Perdoou seu assassino antes de morrer aos 11 anos",
            feast: "6 de julho",
            prayer: "Santa Maria Goretti, que perdoaste Alessandro teu assassino, ensina-me a perdoar."
        },
        secondary: [
            {
                name: "Santa Faustina Kowalska",
                title: "Apóstola da Misericórdia",
                reason: "Recebeu de Jesus a mensagem da Divina Misericórdia",
                feast: "5 de outubro"
            },
            {
                name: "São João Paulo II",
                title: "Papa do Perdão",
                reason: "Perdoou pessoalmente Ali Agca que tentou assassiná-lo",
                feast: "22 de outubro"
            }
        ],
        virtue: "Misericórdia"
    },

    DESATENCAO_NA_ORACAO: {
        primary: {
            name: "Santo Padre Pio",
            title: "Místico Estigmatizado",
            reason: "Orava 8 horas por dia com atenção profunda",
            feast: "23 de setembro",
            prayer: "Padre Pio, que oravas sem cessar, ensina-me a atenção e recolhimento na oração."
        },
        secondary: [],
        virtue: "Recolhimento"
    },

    // Sem categoria exata
    SEM_CATEGORIA_EXATA: {
        primary: {
            name: "Nossa Senhora",
            title: "Mãe da Misericórdia",
            reason: "Medianeira de todas as graças, intercede por todos os pecados",
            feast: "Sempre",
            prayer: "Maria, Mãe de Misericórdia, intercede por mim pecador junto a teu Filho Jesus."
        },
        secondary: [
            {
                name: "São José",
                title: "Patrono da Igreja Universal",
                reason: "Intercessor poderoso em todas as necessidades",
                feast: "19 de março"
            }
        ],
        virtue: "Confiança"
    }
};

/**
 * Função helper para buscar santo por categoria
 */
export const getSaintForSin = (category) => {
    return patronSaints[category] || patronSaints.SEM_CATEGORIA_EXATA;
};

/**
 * Função para obter todos os santos de uma lista de pecados
 */
export const getSaintsForSins = (sins) => {
    const saintsSet = new Map();

    sins.forEach(sin => {
        const saintData = getSaintForSin(sin.category);
        if (saintData && !saintsSet.has(saintData.primary.name)) {
            saintsSet.set(saintData.primary.name, {
                ...saintData.primary,
                categories: [sin.category]
            });
        }
    });

    return Array.from(saintsSet.values());
};
