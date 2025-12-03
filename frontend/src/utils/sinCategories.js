/**
 * Categorias de pecados graves.
 * Usado para classificar pecados na ficha de confissão.
 */
export const GRAVE_SIN_CATEGORIES = [
    'LUXURIA',
    'AMAR_A_DEUS_SOBRE_TODAS_AS_COISAS',
    'NAO_MATAR',
    'NAO_COMETER_ADULTERIO',
    'NAO_GUARDAR_DOMINGO',
    'NAO_ROUBAR',
    'NAO_LEVANTAR_FALSO_TESTEMUNHO',
    'TOMAR_NOME_DE_DEUS_EM_VAO',
    'SOBERBA',
    'AVAREZA',
    'IRA',
    'GULA',
    'INVEJA',
    'PREGUICA'
];

/**
 * Verifica se um pecado é grave baseado na sua categoria.
 * @param {string} category - A categoria do pecado.
 * @returns {boolean} - Verdadeiro se for grave.
 */
export const isGraveSin = (category) => {
    return GRAVE_SIN_CATEGORIES.includes(category);
};
