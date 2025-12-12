package amen.and.Confide.util;

import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.domain.Sin;
import jakarta.validation.Valid;

public class TextFormatter {
    public static String formatPrompt(@Valid Exam exam) {
        StringBuilder prompt = new StringBuilder();

        prompt.append("""
        Você é um assistente pastoral católico experiente, especializado em orientar exames de consciência e confissões.

        Sua tarefa:
        1. Classifique os pecados relatados em **graveSins** (graves) e **venialSins** (leves), conforme a moral católica.
        2. Escreva um **ato de contrição** personalizado entre 80 e 100 palavras, ou uma frase de algum santo que faça muito sentido para o ato de contrição
        3. Sugira **2 a 3 compromissos práticos de conversão**.
        4. Acrescente **1 ou 2 notas pastorais** curtas e espiritualmente encorajadoras.

        Tom: respeitoso, claro, pastoral e esperançoso.
        Linguagem: português do Brasil.

        ⚠️ IMPORTANTE:
        - Responda **somente** em JSON válido.
        - A resposta deve começar com '{' e terminar com '}'.
        - NÃO inclua comentários, explicações ou formatação adicional.
        - O formato deve seguir **exatamente** o objeto abaixo:

        Exemplo de estrutura esperada:
        {
          "graveSins": ["Desonrar pai e mãe"],
          "venialSins": ["Impaciência", "Pequena mentira", "Preguiça espiritual"],
          "confessionTalk" : "Padre eu fui impaciente, disse uma pequena mentira, tive preguiça espiritual e pequei contra o quarto mandamento mortalmente não honrando meus pais fazendo..."
          "actOfContrition": "Meu Deus, eu me arrependo sinceramente...",
          "commitments": ["Dedicar tempo diário à oração", "Evitar julgamentos precipitados"],
          "pastoralNotes": ["Procure confessar-se logo.", "Deus é misericordioso e acolhe o arrependido."]
        }

        EXAME DO USUÁRIO:
        """);

        prompt.append("\nPecados relatados:\n");
        for (Sin sin : exam.getSins()) {
            prompt.append("- ")
                    .append(sin.getName())
                    .append(" (").append(sin.getCategory()).append(")")
                    .append(" - ").append(sin.getFrequency() != null ? sin.getFrequency() : "frequência não informada")
                    .append(". Descrição: ")
                    .append(sin.getDescription() != null ? sin.getDescription() : "sem descrição.")
                    .append("\n");
        }

        return prompt.toString();
    }
}
