import axios from 'axios';

// Use environment variable, fallback to empty string (offline mode)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

// Only create axios instance if API URL is configured
const api = API_BASE_URL ? axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000, // 60 seconds
    headers: {
        'Content-Type': 'application/json',
    },
}) : null;

export const processExam = async (examRequest) => {
    // If no API is configured, go straight to mock response
    if (!api) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Brief delay for UX
        return {
            success: true,
            isFallback: true,
            data: generateMockResponse(examRequest),
        };
    }

    try {
        const response = await api.post('', examRequest);

        // Handle Standardized ApiResponse (if wrapper exists)
        if (response.data && response.data.success !== undefined && response.data.data) {
            return { success: true, data: response.data.data };
        }

        // Handle Direct Response (Standard Swagger 201)
        return { success: true, data: response.data };
    } catch (error) {
        console.error('API Error:', error);

        // Check for Standardized Error Response
        if (error.response && error.response.data) {
            const errorData = error.response.data;

            // If we have a standardized error structure
            if (errorData.success === false || errorData.errorDetails || errorData.message) {
                return {
                    success: false,
                    error: {
                        message: errorData.message || 'Erro desconhecido no servidor',
                        details: errorData.errorDetails,
                        validationErrors: errorData.errorDetails?.validationErrors
                    }
                };
            }
        }

        // FALLBACK ONLY ON NETWORK ERROR OR 500 WITHOUT STRUCTURE
        // Fallback: Retornar Mock após 3 segundos
        await new Promise(resolve => setTimeout(resolve, 3000));

        return {
            success: false, // Mark as false success but provide data for fallback
            isFallback: true,
            data: generateMockResponse(examRequest),
        };
    }
};

export const generateMockResponse = (examRequest) => {
    const { lastConfessionDays, sins } = examRequest;

    // Separar pecados graves e veniais baseado na categoria
    const graveSins = sins.filter(sin =>
        ['LUXURIA', 'AMAR_A_DEUS_SOBRE_TODAS_AS_COISAS', 'NAO_MATAR',
            'NAO_COMETER_ADULTERIO', 'NAO_GUARDAR_DOMINGO', 'NAO_ROUBAR',
            'NAO_LEVANTAR_FALSO_TESTEMUNHO', 'TOMAR_NOME_DE_DEUS_EM_VAO',
            'SOBERBA', 'AVAREZA', 'IRA', 'GULA', 'INVEJA', 'PREGUICA'].includes(sin.category)
    );

    const venialSins = sins.filter(sin => !graveSins.includes(sin));

    return {
        exam: {
            lastConfessionDays,
            sins,
            venialSins: venialSins.length,
            mortalSins: graveSins.length,
        },
        summary: {
            totalSins: sins.length,
            graveSins: graveSins.length,
            venialSins: venialSins.length,
        },
        confession: {
            graveSins: graveSins.map(s =>
                `${s.name}${s.frequency ? ` (${s.frequency})` : ''}`
            ),
            venialSins: venialSins.map(s => s.name),
        },
        confessionTalk: `Padre, perdoe-me porque pequei. Faz ${lastConfessionDays} dias desde minha última confissão. Durante este tempo, cometi ${graveSins.length > 0 ? `os seguintes pecados graves: ${graveSins.map(s => s.name.toLowerCase()).join(', ')}` : 'nenhum pecado grave'}. ${venialSins.length > 0 ? `Também cometi pecados veniais como: ${venialSins.map(s => s.name.toLowerCase()).join(', ')}` : ''}. Arrependo-me de coração e peço perdão a Deus e à Igreja.`,
        actOfContrition: "Meu Deus, eu me arrependo de todo o coração de vos ter ofendido, porque sois infinitamente bom e o pecado vos desagrada. Com a ajuda da vossa graça, proponho firmemente não mais pecar, fugir das ocasiões de pecado e confessar-me. Meu Jesus, misericórdia! Amém.",
        commitments: [
            "Rezar diariamente o terço ou ao menos uma dezena",
            "Estabelecer horário fixo para oração (15 minutos mínimo)",
            "Buscar acompanhamento espiritual regular com um padre",
            "Fazer exame de consciência todas as noites antes de dormir",
        ],
        pastoralNotes: [
            "Considere fazer uma consagração a Nossa Senhora para fortalecer sua vida espiritual.",
            "A confissão frequente (mensal ou quinzenal) é um remédio poderoso contra a recaída.",
            "Reflita sobre os Santos padroeiros das virtudes que você precisa cultivar.",
        ],
    };
};

export default api;
