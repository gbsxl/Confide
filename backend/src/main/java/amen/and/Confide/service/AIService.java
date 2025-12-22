package amen.and.Confide.service;

import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.dto.AIResponseDTO;
import amen.and.Confide.util.AIResponseValidator;
import amen.and.Confide.util.JsonUtils;
import amen.and.Confide.util.TextFormatter;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

/**
 * Serviço de IA que utiliza o OpenAIProviderService (Responses API)
 * para gerar feedback espiritual baseado no exame de consciência.
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class AIService {
    private final OpenAIProviderService aiProvider;

    public AIResponseDTO generateFeedbacks(@Valid Exam exam) {
        String prompt = TextFormatter.formatPrompt(exam);
        log.debug("Enviando prompt para IA: {} caracteres", prompt.length());

        String iaResult = aiProvider.getAIChatResponse(prompt);

        if (!validateResponse(iaResult)) {
            log.error("Resposta da IA inválida ou não passou na validação");
            throw new RuntimeException("Resposta da IA não atendeu aos critérios de validação");
        }

        return parseResponse(iaResult);
    }

    private AIResponseDTO parseResponse(String iaResult) {
        return JsonUtils.fromJson(iaResult, AIResponseDTO.class);
    }

    private boolean validateResponse(String iaResult) {
        try {
            AIResponseDTO dto = parseResponse(iaResult);
            AIResponseValidator.validate(dto);
            return true;
        } catch (Exception e) {
            log.warn("Validação da resposta falhou: {}", e.getMessage());
            return false;
        }
    }
}