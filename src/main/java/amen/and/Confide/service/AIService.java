package amen.and.Confide.service;

import amen.and.Confide.integration.OpenAIClient;
import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.dto.AIResponseDTO;
import amen.and.Confide.util.TextFormatter;
import org.springframework.stereotype.Service;

@Service
public class AIService {
    OpenAIClient client;
    ReportService reportService;
    public AIResponseDTO sendIARequest(Exam examRequest) {
        String formatted = TextFormatter.formatPrompt(examRequest);
        String iaResult = client.requestOpenaiAPI(formatted);
        AIResponseDTO responseDTO = parseResponse(iaResult);

        if (!validateResponse(responseDTO)) {
            return getFallbackResponse();
        }

        return responseDTO;
    }

    private AIResponseDTO getFallbackResponse() {
        return null;
    }

    private AIResponseDTO parseResponse(String iaResult) {
        return null;
    }

    private boolean validateResponse(AIResponseDTO IAResponse){
        return false;
    }
}
