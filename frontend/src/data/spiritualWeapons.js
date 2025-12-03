/**
 * Armas Espirituais, Conselhos Práticos e Remédios por Categoria de Pecado
 * Baseado na tradição ascética e mística da Igreja Católica
 */

export const spiritualWeapons = {
    // ============================================
    // PECADOS CAPITAIS
    // ============================================

    SOBERBA: {
        title: "Armas Contra a Soberba",
        weapons: [
            {
                name: "Exame de Consciência Diário",
                description: "Refletir todas as noites sobre os momentos em que se colocou acima dos outros ou de Deus",
                howTo: "Antes de dormir, pergunte-se: 'Hoje eu busquei reconhecimento? Desprezei alguém interiormente?'",
                frequency: "Diário",
                scripture: "Deus resiste aos soberbos, mas dá graça aos humildes. (Tiago 4:6)"
            },
            {
                name: "Oração de Humildade",
                description: "Rezar diariamente reconhecendo a própria pequenez diante de Deus",
                howTo: "Reze: 'Senhor, por mim mesmo nada posso. Tudo o que tenho vem de Ti. Livra-me do orgulho.'",
                frequency: "Ao acordar",
                scripture: "Sem mim, nada podeis fazer. (João 15:5)"
            },
            {
                name: "Atos Ocultos de Humildade",
                description: "Fazer boas ações sem que ninguém saiba - servir anonimamente",
                howTo: "Escolha 1 tarefa humilde por semana que ninguém verá: lavar louça, limpar algo, ajudar alguém anonimamente",
                frequency: "Semanal",
                scripture: "Quando deres esmola, não saiba tua esquerda o que faz tua direita. (Mateus 6:3)"
            },
            {
                name: "Aceitar Correções",
                description: "Quando corrigido, agradecer em vez de se justificar",
                howTo: "Na próxima crítica, respire fundo e diga apenas: 'Obrigado por me ajudar a melhorar.'",
                frequency: "Sempre que necessário",
                scripture: "O sábio escuta a repreensão. (Provérbios 12:15)"
            }
        ],
        practices: [
            "Rezar o Magnificat (Cântico de Maria) meditando na humildade da Virgem",
            "Fazer visita ao Santíssimo Sacramento semanalmente em silêncio adorador",
            "Ler vida de Santos humildes (São Francisco, Santa Teresinha)"
        ],
        antidote: "Humildade - reconhecer que tudo é graça de Deus",
        dangerSigns: [
            "Comparar-se constantemente aos outros",
            "Não suportar críticas",
            "Falar excessivamente de si mesmo",
            "Desdenhar trabalhos simples"
        ]
    },

    AVAREZA: {
        title: "Armas Contra a Avareza",
        weapons: [
            {
                name: "Esmola Sistemática",
                description: "Doar percentual fixo da renda para os pobres",
                howTo: "Separe 10% do salário no dia do pagamento para caridade (antes de qualquer despesa)",
                frequency: "Mensal",
                scripture: "Dai e vos será dado. (Lucas 6:38)"
            },
            {
                name: "Jejum de Compras",
                description: "Um mês sem compras não essenciais",
                howTo: "Durante 30 dias, compre apenas alimentação e necessidades básicas. Doe o dinheiro economizado.",
                frequency: "Trimestral",
                scripture: "Não podeis servir a Deus e ao dinheiro. (Mateus 6:24)"
            },
            {
                name: "Partilha Franciscana",
                description: "Doar algo que você ama a cada semana",
                howTo: "Escolha 1 objeto de valor (roupa, livro, eletrônico) e doe a quem precisa. Se dói, está certo.",
                frequency: "Semanal",
                scripture: "Vende tudo o que tens e dá aos pobres. (Marcos 10:21)"
            },
            {
                name: "Cofre do Pobre",
                description: "Caixinha para moedas que irão para caridade",
                howTo: "Coloque uma caixa em casa. Todo troco vai para lá. No fim do mês, doe tudo.",
                frequency: "Diário",
                scripture: "O que fizestes a um destes pequeninos, a mim o fizestes. (Mateus 25:40)"
            }
        ],
        practices: [
            "Visitar um lar de idosos ou orfanato mensalmente",
            "Apadrinhar uma criança carente",
            "Meditar na pobreza de Cristo: 'O Filho do Homem não tem onde reclinar a cabeça'"
        ],
        antidote: "Generosidade - alegria em partilhar",
        dangerSigns: [
            "Ansiedade excessiva com dinheiro",
            "Dificuldade em dar presentes",
            "Mesquinhez com familiares",
            "Acumular coisas 'por precaução'"
        ]
    },

    LUXURIA: {
        title: "Armas Contra a Luxúria",
        weapons: [
            {
                name: "Filtros de Internet (Covenant Eyes ou similar)",
                description: "Software de accountability que bloqueia pornografia e notifica um parceiro de prestação de contas",
                howTo: "Instale Covenant Eyes, Net Nanny ou Qustodio. Escolha um amigo/padre como parceiro de accountability.",
                frequency: "Permanente",
                scripture: "Se teu olho te escandaliza, arranca-o. (Mateus 5:29)"
            },
            {
                name: "Jejum de Telas (Digital Detox)",
                description: "Períodos sem celular/computador, especialmente à noite",
                howTo: "Das 21h às 7h, celular desligado ou em outra sala. Nunca leve para o quarto.",
                frequency: "Diário",
                scripture: "Vigiai e orai para não cairdes em tentação. (Mateus 26:41)"
            },
            {
                name: "Ladainha de Loreto (Nossa Senhora)",
                description: "Oração mariana poderosa contra tentações da carne",
                howTo: "Na tentação, reze imediatamente: 'Mãe Puríssima, rogai por nós!' 3x seguidas.",
                frequency: "No momento da tentação",
                scripture: "Ela esmagará a cabeça da serpente. (Gênesis 3:15)"
            },
            {
                name: "Confissão Frequente",
                description: "Sacramento quinzenal ou mensal como blindagem espiritual",
                howTo: "Marque dia fixo para confissão (ex: toda primeira sexta-feira). Não espere 'precisar'.",
                frequency: "Quinzenal/Mensal",
                scripture: "Confessai vossos pecados uns aos outros. (Tiago 5:16)"
            },
            {
                name: "Custódia dos Olhos",
                description: "Disciplina de desviar o olhar de imagens/pessoas provocantes",
                howTo: "Quando ver algo impuro (outdoor, cena de filme, pessoa), desvie olhar em 3 segundos e reze Ave-Maria.",
                frequency: "Constante",
                scripture: "Olhei e não conheci o pecado. (Salmo 101:3)"
            },
            {
                name: "Cinturão/Escapulário de Nossa Senhora do Carmo",
                description: "Sacramental físico para lembrar da consagração à pureza",
                howTo: "Use escapulário do Carmo ou cinta de São Tomás de Aquino junto ao corpo como lembrete constante.",
                frequency: "Permanente",
                scripture: "Levai as armas de Deus. (Efésios 6:11)"
            }
        ],
        practices: [
            "Oração diária a São Tomás de Aquino: 'Cintura de castidade, protege-me'",
            "Jejum (pão e água) nas sextas-feiras",
            "Leitura espiritual antes de dormir (nunca telas)",
            "Esportes/exercícios físicos para canalizar energia",
            "Evitar solidão prolongada (momento de maior vulnerabilidade)",
            "Se casado: comunhão frequente no sacramento do matrimônio"
        ],
        antidote: "Castidade - pureza de coração, mente e corpo",
        dangerSigns: [
            "Navegação anônima frequente",
            "Solidão voluntária prolongada",
            "Insônia por ansiedade sexual",
            "Desculpas para não usar filtros ('preciso de privacidade')"
        ]
    },

    IRA: {
        title: "Armas Contra a Ira",
        weapons: [
            {
                name: "Regra dos 10 Segundos",
                description: "Contar até 10 respirando antes de responder quando irritado",
                howTo: "Quando sentir raiva, PARE. Respire fundo 10 vezes contando mentalmente. Depois responda.",
                frequency: "No momento da irritação",
                scripture: "O homem iracundo provoca rixas. (Provérbios 15:18)"
            },
            {
                name: "Oração Pela Pessoa Que Te Irritou",
                description: "Rezar um Pai-Nosso imediato pela pessoa que causou a raiva",
                howTo: "Assim que alguém te irritar, reze 1 Pai-Nosso pedindo bênçãos para aquela pessoa.",
                frequency: "A cada irritação",
                scripture: "Orai pelos que vos perseguem. (Mateus 5:44)"
            },
            {
                name: "Diário da Ira",
                description: "Anotar o que te deixa com raiva para identificar padrões",
                howTo: "Caderno pequeno. Anote: O que me irritou? Por quê? Qual era a expectativa frustrada?",
                frequency: "Diário",
                scripture: "Conhecereis a verdade e a verdade vos libertará. (João 8:32)"
            },
            {
                name: "Silêncio Reparador",
                description: "Voto de silêncio de 1 hora quando perder a paciência",
                howTo: "Se gritou ou explodiu, faça 1h de silêncio total como penitência e reflexão.",
                frequency: "Após cada explosão",
                scripture: "Há tempo de calar e tempo de falar. (Eclesiastes 3:7)"
            }
        ],
        practices: [
            "Meditação diária sobre a Paixão de Cristo (mansidão extrema)",
            "Repetir mentalmente: 'Jesus manso e humilde de coração, fazei o meu coração semelhante ao vosso'",
            "Pedir perdão no mesmo dia sempre que perder a paciência",
            "Evitar discussões por mensagem (resolver pessoalmente)"
        ],
        antidote: "Mansidão - paz interior e paciência",
        dangerSigns: [
            "Trânsito como gatilho constante",
            "Relações desgastadas por brigas frequentes",
            "Arrependimento crônico após explosões",
            "Justificar ira como 'temperamento forte'"
        ]
    },

    GULA: {
        title: "Armas Contra a Gula",
        weapons: [
            {
                name: "Jejum Litúrgico",
                description: "Abstinência de carne nas sextas-feiras e jejum nas Quarta de Cinzas e Sexta Santa",
                howTo: "Sextas: sem carne. Dias de jejum: 1 refeição completa + 2 pequenas que juntas não somem 1 refeição.",
                frequency: "Semanal (sextas) e litúrgico",
                scripture: "Nem só de pão vive o homem. (Mateus 4:4)"
            },
            {
                name: "Jejum de Escolha",
                description: "Abrir mão de algo gostoso por um período",
                howTo: "Escolha 1 prazer alimentar (doce, café, refrigerante) e abra mão por 40 dias.",
                frequency: "Quaresmas/Adventos",
                scripture: "Dominai vosso corpo. (1 Coríntios 9:27)"
            },
            {
                name: "Oração Antes das Refeições",
                description: "Benção da mesa com gratidão consciente",
                howTo: "Nunca coma sem agradecer. Reze: 'Abençoai, Senhor, este alimento e a quem o preparou. Amém.'",
                frequency: "Toda refeição",
                scripture: "Dai graças em tudo. (1 Tessalonicenses 5:18)"
            },
            {
                name: "Regra de Santo Inácio",
                description: "Comer para viver, não viver para comer",
                howTo: "Antes de repetir a comida, espere 10 minutos. Pergunte-se: 'É fome ou gula?'",
                frequency: "Toda refeição",
                scripture: "Tudo com moderação. (Filipenses 4:5)"
            },
            {
                name: "Ajuda Profissional (Alcoolismo/Drogas)",
                description: "AA, NA ou acompanhamento terapêutico",
                howTo: "Se há dependência química/álcool: busque imediatamente Alcoólicos Anônimos ou clínica especializada.",
                frequency: "Contínuo",
                scripture: "Onde está o Espírito, aí há liberdade. (2 Coríntios 3:17)"
            }
        ],
        practices: [
            "Rezar o Angelus ao meio-dia (hora de almoço)",
            "Água benta antes de comer (para lembrar que corpo é templo)",
            "Doar alimentos toda semana para quem tem fome de verdade",
            "Para vícios graves: grupo de oração específico (Grupo de Oração Terapêutico)"
        ],
        antidote: "Temperança - domínio sobre os apetites",
        dangerSigns: [
            "Comer por ansiedade, não fome",
            "Esconder comida/bebida",
            "Beber sozinho frequentemente",
            "Ganho de peso descontrolado"
        ]
    },

    INVEJA: {
        title: "Armas Contra a Inveja",
        weapons: [
            {
                name: "Elogiar o Invejado",
                description: "Fazer 3 elogios sinceros à pessoa invejada",
                howTo: "Quando sentir inveja de alguém, force-se a elogiar 3 qualidades dela (mesmo que doa).",
                frequency: "A cada inveja",
                scripture: "Alegrai-vos com os que se alegram. (Romanos 12:15)"
            },
            {
                name: "Jejum de Redes Sociais",
                description: "Períodos sem Instagram/Facebook para evitar comparações",
                howTo: "Delete apps de redes sociais por 1 semana a cada mês. Observe a paz que retorna.",
                frequency: "1 semana/mês",
                scripture: "Não cobiceis. (Êxodo 20:17)"
            },
            {
                name: "Gratidão Escrita",
                description: "Listar 5 bênçãos próprias diariamente",
                howTo: "Caderno de gratidão. Todo dia, antes de dormir, escreva 5 coisas boas na sua vida.",
                frequency: "Diário",
                scripture: "Dai graças em tudo. (1 Tessalonicenses 5:18)"
            },
            {
                name: "Celebrar o Sucesso Alheio",
                description: "Enviar mensagem de parabéns sincera quando alguém conquistar algo",
                howTo: "Quando souber de promoção/casamento/vitória de alguém, envie mensagem calorosa no mesmo dia.",
                frequency: "Sempre que souber de conquista alheia",
                scripture: "O amor não é invejoso. (1 Coríntios 13:4)"
            }
        ],
        practices: [
            "Meditar no Magnificat: Maria alegrou-se sendo 'apenas' serva",
            "Fazer voluntariado para ter perspectiva sobre os próprios privilégios",
            "Rezar por quem você inveja: 'Senhor, abençoa [nome] ainda mais!'",
            "Ler São João Batista: 'Ele deve crescer, eu diminuir'"
        ],
        antidote: "Caridade Fraterna - alegrar-se com o bem do próximo",
        dangerSigns: [
            "Falar mal de quem tem sucesso",
            "Comparar-se obsessivamente",
            "Depressão após ver redes sociais",
            "Alegria secreta com fracasso alheio"
        ]
    },

    PREGUICA: {
        title: "Armas Contra a Preguiça (e Acídia Espiritual)",
        weapons: [
            {
                name: "Regra dos 5 Minutos",
                description: "Começar tarefa por apenas 5 minutos",
                howTo: "Tarefa que adia? Prometa fazer só 5 min. Geralmente você continua depois. Se não, pelo menos começou.",
                frequency: "A cada procrastinação",
                scripture: "Tudo tem seu tempo. (Eclesiastes 3:1)"
            },
            {
                name: "Hora Santa Semanal",
                description: "1 hora de adoração eucarística por semana",
                howTo: "Escolha um dia fixo (ex: quinta às 20h). Marque na agenda como compromisso inegociável.",
                frequency: "Semanal",
                scripture: "Não pudestes vigiar uma hora comigo? (Mateus 26:40)"
            },
            {
                name: "Digital Detox Radical",
                description: "Desinstalar apps que sugam tempo (TikTok, Instagram, jogos)",
                howTo: "Delete apps não essenciais. Use versão web se realmente precisar (muito menos viciante).",
                frequency: "Permanente",
                scripture: "Resgatar o tempo, pois os dias são maus. (Efésios 5:16)"
            },
            {
                name: "Primeiro Minuto do Dia",
                description: "Levantar ao primeiro toque do despertador (sem soneca)",
                howTo: "Coloque despertador longe da cama. Ao tocar, levante imediatamente. Ofereça o dia a Deus.",
                frequency: "Diário",
                scripture: "Deus chama ao amanhecer. (Salmo 63:1)"
            },
            {
                name: "Oração de Consagração Matinal",
                description: "Oferecer o dia a Deus antes de pegar o celular",
                howTo: "Regra de ouro: NÃO pegue celular antes de orar. Primeiro: 'Senhor, este dia é teu.'",
                frequency: "Ao acordar",
                scripture: "Buscai primeiro o Reino. (Mateus 6:33)"
            }
        ],
        practices: [
            "Ler 1 capítulo da Bíblia antes de qualquer entretenimento",
            "Fazer cama assim que levantar (disciplina pequena gera disciplina grande)",
            "Agendar oração como consulta médica (hora fixa, não 'quando der tempo')",
            "Fazer exame de consciência à noite: 'Usei bem o tempo que Deus me deu hoje?'",
            "Para acídia digital: usar app Freedom ou Forest para bloquear distrações"
        ],
        antidote: "Diligência - zelo pelo tempo e pela vida espiritual",
        dangerSigns: [
            "Scroll infinito sem propósito",
            "Procrastinar oração e leitura espiritual",
            "Sempre atrasado para compromissos",
            "Tédio crônico apesar de múltiplas distrações",
            "Desânimo diante das coisas de Deus"
        ]
    },

    // ============================================
    // DEZ MANDAMENTOS (Complementos)
    // ============================================

    AMAR_A_DEUS_SOBRE_TODAS_AS_COISAS: {
        title: "Armas Para Crescer no Amor a Deus",
        weapons: [
            {
                name: "Encontro Diário com Jesus",
                description: "15 minutos de oração mental todo dia",
                howTo: "Mesma hora, mesmo lugar. Não é reza decorada, é conversa: 'Jesus, hoje eu...'",
                frequency: "Diário",
                scripture: "Orai sem cessar. (1 Tessalonicenses 5:17)"
            },
            {
                name: "Leitura Orante da Bíblia (Lectio Divina)",
                description: "Ler, meditar, orar, contemplar",
                howTo: "1) Leia devagar. 2) Escolha 1 frase que tocou. 3) Converse com Deus sobre ela. 4) Silencie.",
                frequency: "Diário (15 min)",
                scripture: "Tua Palavra é lâmpada. (Salmo 119:105)"
            },
            {
                name: "Missa Diária (se possível)",
                description: "Participar da Eucaristia além do domingo",
                howTo: "Procure paróquia com missa diária perto do trabalho/casa. Mesmo 2-3x/semana transforma.",
                frequency: "Idealmente diária",
                scripture: "Fazei isto em memória de mim. (Lucas 22:19)"
            }
        ],
        practices: [
            "Consagração a Nossa Senhora (33 dias de São Luís de Montfort)",
            "Participar de retiros espirituais anuais",
            "Direção espiritual regular com padre/diretor"
        ],
        antidote: "Amor de Deus - caridade teologal",
        dangerSigns: []
    },

    NAO_GUARDAR_DOMINGO: {
        title: "Armas Para Santificar o Domingo",
        weapons: [
            {
                name: "Descanso Dominical Real",
                description: "Não trabalhar em atividades servis no domingo",
                howTo: "Organize semana para domingo ser só culto, família, descanso. Se possível, nem compras.",
                frequency: "Semanal",
                scripture: "Lembra-te do dia de sábado para santificá-lo. (Êxodo 20:8)"
            },
            {
                name: "Missa Dominical Não-Negociável",
                description: "Escolher horário fixo e nunca faltar",
                howTo: "Defina: 'Vou na missa das 10h sempre'. Marque na agenda. Planeje o fim de semana em torno dela.",
                frequency: "Semanal",
                scripture: "Onde dois ou mais estiverem reunidos em meu nome. (Mateus 18:20)"
            },
            {
                name: "Almoço Familiar Dominical",
                description: "Refeição longa e tranquila com família",
                howTo: "Domingo: cozinhar junto, mesa posta, sem celular, conversa real.",
                frequency: "Semanal",
                scripture: "É bom e agradável que irmãos vivam unidos. (Salmo 133:1)"
            }
        ],
        practices: [
            "Chegar 10 min antes da missa para preparar o coração",
            "Não levar celular para missa (ou deixá-lo desligado)",
            "Fazer jejum eucarístico de 1h antes da comunhão",
            "Após missa: 5 min de ação de graças silenciosa"
        ],
        antidote: "Devoção Eucarística - amor à Missa",
        dangerSigns: []
    },

    DESONRAR_PAI_MAE: {
        title: "Armas Para Honrar Pai e Mãe",
        weapons: [
            {
                name: "Ligação Semanal (se mora longe)",
                description: "Telefonema longo e atencioso",
                howTo: "Todo domingo às 16h (exemplo): liga para pais/mãe, ESCUTA de verdade, pergunta da semana deles.",
                frequency: "Semanal",
                scripture: "Honra teu pai e tua mãe. (Êxodo 20:12)"
            },
            {
                name: "Pedido de Perdão",
                description: "Pedir perdão por faltas de respeito passadas",
                howTo: "Marque conversa pessoal. Diga: 'Pai/mãe, me perdoa por [situação específica]. Fui injusto/a.'",
                frequency: "Quando necessário",
                scripture: "Perdoai e sereis perdoados. (Lucas 6:37)"
            },
            {
                name: "Ajuda Prática",
                description: "Oferecer auxílio material/espiritual",
                howTo: "Pergunte mensalmente: 'Como posso ajudar vocês?' Ouça a resposta real.",
                frequency: "Mensal",
                scripture: "Se alguém não cuida dos seus, negou a fé. (1 Timóteo 5:8)"
            }
        ],
        practices: [
            "Rezar pelos pais diariamente (vivos ou falecidos)",
            "Visitá-los pessoalmente (não só por obrigação)",
            "Para pais: educar filhos na fé desde bebês (batismo rápido, oração familiar)"
        ],
        antidote: "Piedade Filial - amor reverente",
        dangerSigns: []
    },

    NAO_MATAR: {
        title: "Armas Para Respeitar a Vida",
        weapons: [
            {
                name: "Perdão Radical",
                description: "Perdoar quem te feriu profundamente",
                howTo: "Liste pessoas que você odeia. Reze por cada uma: 'Senhor, perdoo [nome]. Abençoa-o/a.'",
                frequency: "Até sentir paz",
                scripture: "Perdoai 70 vezes 7. (Mateus 18:22)"
            },
            {
                name: "Cuidado Com os Vulneráveis",
                description: "Defender a vida desde a concepção até morte natural",
                howTo: "Apoie gestantes em crise. Doe para casas de acolhida. Nunca aconselhe aborto.",
                frequency: "Permanente",
                scripture: "Antes de te formar no ventre, eu te conheci. (Jeremias 1:5)"
            },
            {
                name: "Controle da Língua",
                description: "Não matar com palavras (assassinato moral)",
                howTo: "Antes de falar mal de alguém, pergunte: 'É verdade? É necessário? É caridoso?'",
                frequency: "Constante",
                scripture: "A língua é fogo. (Tiago 3:6)"
            }
        ],
        practices: [
            "Para quem abortou: buscar Sacramento da Reconciliação com padre preparado",
            "Rezar em frente a clínicas de aborto (vigília silenciosa)",
            "Visitar doentes terminais/idosos (mostrar que vida sempre tem valor)"
        ],
        antidote: "Respeito à Vida - reverência pelo dom divino",
        dangerSigns: []
    },

    NAO_COMETER_ADULTERIO: {
        title: "Armas Para a Fidelidade Conjugal",
        weapons: [
            {
                name: "Oração Conjugal Diária",
                description: "Rezar com o cônjuge antes de dormir",
                howTo: "5 minutos: Pai-Nosso, Ave-Maria, intenções do casal. De mãos dadas.",
                frequency: "Diário",
                scripture: "Onde dois ou mais... aí estou eu. (Mateus 18:20)"
            },
            {
                name: "Transparência Digital",
                description: "Senhas compartilhadas entre cônjuges",
                howTo: "Celular, email, redes sociais: cônjuge tem acesso. Se não tem nada a esconder, não há problema.",
                frequency: "Permanente",
                scripture: "Nada há oculto que não seja revelado. (Lucas 8:17)"
            },
            {
                name: "Date Night Semanal",
                description: "Encontro romântico só do casal",
                howTo: "Toda sexta (exemplo): jantar, cinema, conversa. Sem filhos, sem celular. Namoro permanente.",
                frequency: "Semanal",
                scripture: "Sejam dois numa só carne. (Gênesis 2:24)"
            },
            {
                name: "Evitar 'Amizades Especiais'",
                description: "Não cultivar intimidade emocional com terceiros",
                howTo: "Se há alguém que você esconde do cônjuge ou com quem desabafa mais, PARE. Corte contato.",
                frequency: "Constante",
                scripture: "Fugi da imoralidade. (1 Coríntios 6:18)"
            }
        ],
        practices: [
            "Renovação das promessas matrimoniais anualmente (aniversário de casamento)",
            "Curso de ECC (Encontro de Casais com Cristo) ou retiro para casais",
            "Nunca dormir brigados (resolver conflito no mesmo dia)",
            "Planejamento Natural da Família (em vez de contraceptivos artificiais)"
        ],
        antidote: "Fidelidade - amor exclusivo e total",
        dangerSigns: [
            "Mensagens apagadas do celular",
            "Amizade íntima com colega de sexo oposto",
            "Fantasiar com outras pessoas",
            "Comparar cônjuge negativamente com outros"
        ]
    },

    NAO_ROUBAR: {
        title: "Armas Para a Justiça e Honestidade",
        weapons: [
            {
                name: "Restituição",
                description: "Devolver ou compensar o que foi roubado",
                howTo: "Liste tudo que você pegou indevidamente (mesmo pequeno). Devolva ou doe valor equivalente.",
                frequency: "Imediato",
                scripture: "Se roubou, restitua. (Lucas 19:8)"
            },
            {
                name: "Honestidade Fiscal",
                description: "Pagar impostos justos sem sonegação",
                howTo: "Declare tudo. Mesmo que sistema seja injusto, você não pode ser. Consciência vale mais.",
                frequency: "Anual",
                scripture: "Dai a César o que é de César. (Mateus 22:21)"
            },
            {
                name: "Trabalho Digno",
                description: "Dar o melhor no trabalho, mesmo quando ninguém vê",
                howTo: "Trabalhe como se Deus fosse seu chefe. Porque Ele é.",
                frequency: "Diário",
                scripture: "Tudo o que fizerdes, fazei para o Senhor. (Colossenses 3:23)"
            }
        ],
        practices: [
            "Nunca trazer material de escritório para casa",
            "Não usar internet/tempo da empresa para fins pessoais",
            "Pagar salário justo a empregados (não explorar)",
            "Denunciar corrupção quando testemunhar"
        ],
        antidote: "Justiça - dar a cada um o que é seu",
        dangerSigns: []
    },

    NAO_LEVANTAR_FALSO_TESTEMUNHO: {
        title: "Armas Para a Verdade",
        weapons: [
            {
                name: "Jejum de Fofoca",
                description: "30 dias sem falar mal de ninguém",
                howTo: "Desafio: 1 mês inteiro sem falar mal de ninguém (nem 'brincando'). Se falhar, recomece.",
                frequency: "Contínuo",
                scripture: "Não julgueis. (Mateus 7:1)"
            },
            {
                name: "Três Peneiras de Sócrates",
                description: "Filtrar palavras antes de falar",
                howTo: "Antes de contar algo: 1) É verdade? 2) É bom? 3) É necessário? Se não passar nas 3, CALE.",
                frequency: "Toda conversa",
                scripture: "Seja vosso sim, sim. (Mateus 5:37)"
            },
            {
                name: "Reparação da Fama",
                description: "Desfazer mentira/calúnia proferida",
                howTo: "Se mentiu sobre alguém, procure essa pessoa. Peça perdão. Corrija a mentira publicamente.",
                frequency: "Sempre que necessário",
                scripture: "A verdade vos libertará. (João 8:32)"
            }
        ],
        practices: [
            "Rezar antes de reuniões/conversas: 'Senhor, guarda minha língua'",
            "Defender ausentes (se alguém fala mal de quem não está, defender)",
            "Nunca participar de fofocas (mudar de assunto ou sair)"
        ],
        antidote: "Verdade - falar sempre com caridade",
        dangerSigns: []
    },

    // ============================================
    // PECADOS VENIAIS ESPECÍFICOS
    // ============================================

    FOFOCA: {
        title: "Armas Contra a Fofoca e Maledicência",
        weapons: [
            {
                name: "Mordaça de São Francisco",
                description: "Oração: 'Senhor, põe guarda em minha boca'",
                howTo: "Antes de falar algo sobre alguém, reze mentalmente essa oração. Se ainda quiser falar depois, não é de Deus.",
                frequency: "Antes de cada comentário sobre terceiros",
                scripture: "Põe guarda, Senhor, à minha boca. (Salmo 141:3)"
            },
            {
                name: "Defender o Ausente",
                description: "Falar bem de quem está sendo difamado",
                howTo: "Quando alguém fala mal de X, você diz: 'Mas X também tem qualidades, como...'",
                frequency: "Sempre que testemunhar fofoca",
                scripture: "Não faças aos outros... (Mateus 7:12)"
            }
        ],
        practices: [],
        antidote: "Discrição",
        dangerSigns: []
    },

    PREGUICA_ESPIRITUAL: {
        title: "Armas Contra a Tibieza Espiritual",
        weapons: [
            {
                name: "Plano de Vida Espiritual",
                description: "Horários fixos para oração, Missa, leitura",
                howTo: "Escreva: 'Vou orar às 6h, Missa domingo 10h, ler Bíblia às 22h'. Cole na geladeira.",
                frequency: "Rever mensalmente",
                scripture: "Sede fervorosos no espírito. (Romanos 12:11)"
            }
        ],
        practices: [],
        antidote: "Fervor",
        dangerSigns: []
    },

    MAL_USO_DO_TEMPO: {
        title: "Armas Contra o Desperdício de Tempo",
        weapons: [
            {
                name: "Auditoria de Tempo",
                description: "Rastrear para onde vai seu tempo",
                howTo: "Use app RescueTime ou planilha. Anote 1 semana: quanto tempo em cada atividade. Você vai se assustar.",
                frequency: "Trimestral",
                scripture: "Resgatai o tempo. (Efésios 5:16)"
            }
        ],
        practices: [],
        antidote: "Diligência",
        dangerSigns: []
    },

    FALTA_DE_PERDAO: {
        title: "Armas Para Perdoar",
        weapons: [
            {
                name: "Oração do Perdão de Jesus",
                description: "Repetir: 'Pai, perdoa-lhes, não sabem o que fazem'",
                howTo: "Quando lembrar da mágoa, reze essa frase 10x. Mesmo sem sentir, a graça age.",
                frequency: "Diariamente até perdoar",
                scripture: "Pai, perdoa-lhes. (Lucas 23:34)"
            }
        ],
        practices: [
            "Rezar a Coroinha da Divina Misericórdia",
            "Escrever uma carta não enviada à pessoa expressando tudo, e depois queimar entregando a Deus"
        ],
        antidote: "Misericórdia",
        dangerSigns: [
            "Ressentimento ao ouvir o nome da pessoa",
            "Desejar mal camuflado de justiça"
        ]
    },

    // ============================================
    // MANDAMENTOS FALTANTES & OUTROS
    // ============================================

    TOMAR_NOME_DE_DEUS_EM_VAO: {
        title: "Armas Pelo Santo Nome",
        weapons: [
            {
                name: "Ato de Desagravo Imediato",
                description: "Reparar a ofensa instantaneamente",
                howTo: "Sempre que ouvir ou disser o nome de Deus em vão, diga mentalmente: 'Bendito seja o nome de Jesus'.",
                frequency: "Sempre",
                scripture: "Santo e terrível é o seu nome. (Salmo 111:9)"
            },
            {
                name: "Sinal da Cruz Reverente",
                description: "Fazer o sinal da cruz com pausa e consciência",
                howTo: "Ao passar por uma igreja ou começar a orar, faça o sinal da cruz devagar, pensando em cada pessoa da Trindade.",
                frequency: "Várias vezes ao dia",
                scripture: "Em nome do Pai, do Filho e do Espírito Santo. (Mateus 28:19)"
            }
        ],
        practices: ["Inclinar a cabeça sempre que disser 'Jesus' na oração"],
        antidote: "Reverência",
        dangerSigns: ["Usar 'Meu Deus' como vírgula em conversas", "Piadas com coisas sagradas"]
    },

    NAO_COBICAR_MULHER_DO_PROXIMO: {
        title: "Armas Para a Pureza do Olhar",
        weapons: [
            {
                name: "Guarda dos Olhos e da Mente",
                description: "Não deixar o pensamento criar ninho",
                howTo: "O primeiro olhar é instinto, o segundo é pecado. Desvie no segundo. Se o pensamento vier, mude o foco imediatamente.",
                frequency: "Constante",
                scripture: "Todo aquele que olhar para uma mulher com desejo... (Mateus 5:28)"
            }
        ],
        practices: ["Rezar 3 Ave-Marias pedindo pureza de imaginação"],
        antidote: "Mortificação Interior",
        dangerSigns: ["Fantasiar situações com pessoas casadas", "Seguir perfis provocantes"]
    },

    NAO_COBICAR_BENS_DO_PROXIMO: {
        title: "Armas Para o Desapego",
        weapons: [
            {
                name: "Agradecimento pelo que se tem",
                description: "Focar na própria bênção",
                howTo: "Quando desejar o carro/casa do outro, liste mentalmente 3 coisas boas que VOCÊ tem.",
                frequency: "No momento da cobiça",
                scripture: "Onde está o teu tesouro, aí estará teu coração. (Mateus 6:21)"
            }
        ],
        practices: ["Doar algo que você gosta muito", "Alegrar-se com a conquista do outro"],
        antidote: "Desapego e Gratidão",
        dangerSigns: ["Insatisfação crônica com o que possui"]
    },

    // ============================================
    // PECADOS VENIAIS RESTANTES (Do Enum)
    // ============================================

    IMPRUDENCIA: {
        title: "Armas Contra a Imprudência",
        weapons: [{ name: "Pausa Reflexiva", description: "Pensar antes de agir", howTo: "Conte até 3 antes de tomar decisões impulsivas.", frequency: "Diário", scripture: "O homem prudente vê o mal e esconde-se. (Provérbios 22:3)" }],
        practices: ["Pedir luz ao Espírito Santo antes de decisões"],
        antidote: "Prudência",
        dangerSigns: ["Agir por impulso constantemente"]
    },
    IMPACIENCIA: { // Mapeado para IMPACIENCIA e FALTA_DE_PACIENCA
        title: "Armas Contra a Impaciência",
        weapons: [{ name: "Oração Breve", description: "Jaculatória de socorro", howTo: "Diga: 'Jesus, manso e humilde de coração, fazei meu coração semelhante ao vosso'.", frequency: "Na irritação", scripture: "A paciência tudo alcança. (Sta. Teresa D'Ávila)" }],
        practices: ["Aceitar filas e trânsito como penitência"],
        antidote: "Paciência",
        dangerSigns: ["Reclamar de tudo que demora"]
    },
    FALTA_DE_PACIENCA: { // Redireciona para o mesmo conteúdo de IMPACIENCIA
        title: "Armas Contra a Falta de Paciência",
        weapons: [{ name: "Oração Breve", description: "Jaculatória de socorro", howTo: "Diga: 'Jesus, manso e humilde de coração, fazei meu coração semelhante ao vosso'.", frequency: "Na irritação", scripture: "Sede pacientes na tribulação. (Romanos 12:12)" }],
        practices: ["Aceitar pequenos incômodos sem reclamar"],
        antidote: "Longanimidade",
        dangerSigns: []
    },
    PEQUENA_MENTIRA: {
        title: "Armas Contra a Mentira",
        weapons: [{ name: "Amor à Verdade", description: "Assumir consequências", howTo: "Prefira passar vergonha dizendo a verdade do que ser honrado por uma mentira.", frequency: "Sempre", scripture: "A boca mentirosa mata a alma. (Sabedoria 1:11)" }],
        practices: ["Corrigir-se imediatamente se soltar uma mentira"],
        antidote: "Veracidade",
        dangerSigns: ["Mentiras 'brancas' para evitar conflito"]
    },
    INVEJA_LEVE: {
        title: "Armas Contra a Inveja Leve",
        weapons: [{ name: "Bênção Oculta", description: "Abençoar o invejado", howTo: "Reze: 'Senhor, abençoai fulano mais do que a mim'.", frequency: "No sentimento", scripture: "O amor não é invejoso. (1 Coríntios 13:4)" }],
        practices: ["Elogiar a pessoa invejada publicamente"],
        antidote: "Benevolência",
        dangerSigns: []
    },
    DESATENCAO_NA_ORACAO: {
        title: "Armas Contra a Distração",
        weapons: [{ name: "Retorno Suave", description: "Voltar sem se irritar", howTo: "Não se culpe. Apenas volte o foco a Jesus suavemente, quantas vezes for preciso.", frequency: "Na oração", scripture: "Vigiai e orai. (Mateus 26:41)" }],
        practices: ["Rezar em voz alta ou sussurrando", "Usar imagens sacras"],
        antidote: "Foco e Piedade",
        dangerSigns: ["Devaneio consentido"]
    },
    ORACAO_MECANICA: {
        title: "Armas Contra a Rotina",
        weapons: [{ name: "Coração Presente", description: "Sentir o que fala", howTo: "Fale cada palavra do Pai-Nosso como se fosse a primeira vez.", frequency: "Diário", scripture: "Este povo me honra com os lábios, mas o coração está longe. (Mateus 15:8)" }],
        practices: ["Mudar a oração vocal ocasionalmente", "Meditação"],
        antidote: "Sinceridade",
        dangerSigns: ["Rezar com pressa para acabar logo"]
    },
    FALTA_DE_CARIDADE: {
        title: "Armas Contra a Falta de Caridade",
        weapons: [{ name: "O Olhar de Cristo", description: "Ver Jesus no outro", howTo: "Imagine que a pessoa chata é Jesus disfarçado pedindo paciência.", frequency: "Sempre", scripture: "Tudo o que fizestes a um destes... (Mateus 25:40)" }],
        practices: ["Pequenos serviços ocultos em casa"],
        antidote: "Caridade",
        dangerSigns: ["Grosseria", "Indiferença"]
    },
    DESRESPEITO_PEQUENO: {
        title: "Armas Contra o Desrespeito",
        weapons: [{ name: "Tratamento Formal", description: "Resgatar a cortesia", howTo: "Use 'por favor', 'obrigado', 'com licença' intencionalmente.", frequency: "Sempre", scripture: "Honrai a todos. (1 Pedro 2:17)" }],
        practices: ["Escutar sem interromper"],
        antidote: "Respeito",
        dangerSigns: []
    },
    ORGULHO_DISFARCADO: {
        title: "Armas Contra a Vaidade Oculta",
        weapons: [{ name: "Atribuição a Deus", description: "Devolver a glória", howTo: "Se foi elogiado, diga internamente: 'Glória a Ti, Senhor, não a mim'.", frequency: "Ao receber elogio", scripture: "Não a nós, Senhor, mas ao teu nome dá glória. (Salmo 115:1)" }],
        practices: ["Não se justificar quando criticado"],
        antidote: "Humildade",
        dangerSigns: ["Falsa modéstia"]
    },
    IRA_CONTIDA: {
        title: "Armas Contra a Ira Guardada",
        weapons: [{ name: "Desabafo com Deus", description: "Jogar a raiva no Céu", howTo: "Conte a Deus sua raiva na oração, não guarde nem exploda com outros.", frequency: "Na raiva", scripture: "Irai-vos, mas não pequeis. (Efésios 4:26)" }],
        practices: ["Perdoar antes do pôr do sol"],
        antidote: "Mansidão",
        dangerSigns: ["Remoer ofensas"]
    },
    EGOISMO_COTIDIANO: {
        title: "Armas Contra o Egoísmo",
        weapons: [{ name: "O Outro Primeiro", description: "Ceder a preferência", howTo: "Deixe o outro escolher o lugar, a comida, o canal de TV.", frequency: "Diário", scripture: "Ninguém busque o seu próprio interesse. (1 Coríntios 10:24)" }],
        practices: ["Servir o prato do outro antes do seu"],
        antidote: "Generosidade",
        dangerSigns: ["Pensar sempre em 'mim' primeiro"]
    },
    NEGLIGENCIA: {
        title: "Armas Contra a Negligência",
        weapons: [{ name: "Dever de Estado", description: "Cumprir o que cabe a você", howTo: "Faça o que deve ser feito, bem feito, aqui e agora.", frequency: "Constante", scripture: "Maldito o que faz a obra do Senhor relaxadamente. (Jeremias 48:10)" }],
        practices: ["Listar tarefas e cumprir"],
        antidote: "Zelo",
        dangerSigns: ["Deixar para depois", "Fazer de qualquer jeito"]
    },
    OMISSAO_NA_CARIDADE: {
        title: "Armas Contra a Omissão",
        weapons: [{ name: "Ação Imediata", description: "Não ignorar a inspiração", howTo: "Se sentir que deve ajudar, ajude em até 5 segundos. Não racionalize.", frequency: "Sempre", scripture: "Aquele que sabe fazer o bem e não o faz, comete pecado. (Tiago 4:17)" }],
        practices: ["Esmola ou ajuda física"],
        antidote: "Solicitude",
        dangerSigns: ["Fingir que não viu a necessidade"]
    },
    DESINTERESSE_PELAS_COISAS_DE_DEUS: {
        title: "Armas Contra a Frieza",
        weapons: [{ name: "Ato de Fé", description: "Rezar pedindo fé", howTo: "Reze: 'Senhor, eu creio, mas aumentai a minha fé!'.", frequency: "Diário", scripture: "Buscai as coisas do alto. (Colossenses 3:1)" }],
        practices: ["Ler biografias de santos vibrantes"],
        antidote: "Piedade",
        dangerSigns: ["Achar missa/oração uma perda de tempo"]
    },
    SEM_CATEGORIA_EXATA: {
        title: "Armas Gerais",
        weapons: [{ name: "Exame de Consciência", description: "Revisão geral", howTo: "Revise o dia e peça luz ao Espírito Santo.", frequency: "Noite", scripture: "Sonda-me, ó Deus, e conhece o meu coração. (Salmo 139:23)" }],
        practices: ["Confissão regular"],
        antidote: "Vigilância",
        dangerSigns: []
    }
};
