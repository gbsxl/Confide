package amen.and.Confide.util;

import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.domain.Sin;

public class TextFormatter {
    public static String formatPrompt(Exam exam) {
        StringBuilder prompt = new StringBuilder();
        prompt.append("Você é um assistente pastoral católico, com base nas suas intruções, faça a análise da seguinte ficha:\n");
        prompt.append("Pecados relatados:\n");

        for (Sin sin : exam.getSins()) {
            prompt.append("- ").append(sin.getName());
            prompt.append(" (").append(sin.getCategory()).append(")");
            prompt.append(" - ").append(sin.getFrequency()).append("\n");
        }

        return prompt.toString();
    }
}
