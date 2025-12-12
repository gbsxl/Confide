package amen.and.Confide.service;

import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.dto.AIResponseDTO;
import amen.and.Confide.util.AIResponseValidator;
import amen.and.Confide.util.JsonUtils;
import amen.and.Confide.util.TextFormatter;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AIService {
    private final OpenAIChatService client;

    public AIResponseDTO generateFeedbacks(@Valid Exam exam) {
        String prompt = TextFormatter.formatPrompt(exam);
        String iaResult = client.getAIChatResponse(prompt);
        boolean iaResponse = validateResponse(iaResult);

        if (!iaResponse) {
            throw new RuntimeException();
        }

        return parseResponse(iaResult);
    }

    private AIResponseDTO parseResponse(@NotEmpty @NotNull @NotBlank @Valid String iaResult) {
        return JsonUtils.fromJson(iaResult, AIResponseDTO.class);
    }

    private boolean validateResponse(@NotEmpty @NotNull @NotBlank @Valid String iaResult){
        AIResponseDTO dto = parseResponse(iaResult);
        try{
            AIResponseValidator.validate(dto);
        } catch (IllegalArgumentException e) {
            return false;
        }
        return true;
    }
}
//implementar Resilience4j posteriormente