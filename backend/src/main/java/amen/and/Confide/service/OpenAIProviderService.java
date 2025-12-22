package amen.and.Confide.service;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

/**
 * OpenAI Provider Service using the new Responses API (/v1/responses)
 * with gpt-5-nano and reasoning.effort: minimal for ultra-fast responses.
 */
@Service
public class OpenAIProviderService {

    private static final Logger log = LoggerFactory.getLogger(OpenAIProviderService.class);
    private static final String OPENAI_RESPONSES_URL = "https://api.openai.com/v1/responses";

    private final WebClient webClient;
    private final ObjectMapper objectMapper;

    @Value("${spring.ai.openai.api-key}")
    private String apiKey;

    @Value("${confide.ai.openai.model:gpt-5-nano}")
    private String modelName;

    @Value("${confide.ai.openai.reasoning-effort:minimal}")
    private String reasoningEffort;

    @Value("${confide.ai.openai.price.input-million:0.15}")
    private double pricePer1MInputTokens;

    @Value("${confide.ai.openai.price.output-million:0.60}")
    private double pricePer1MOutputTokens;

    public OpenAIProviderService(WebClient.Builder webClientBuilder, ObjectMapper objectMapper) {
        this.webClient = webClientBuilder.build();
        this.objectMapper = objectMapper;
    }

    public String getAIChatResponse(String examPrompt) {
        if (!StringUtils.hasText(examPrompt)) {
            log.warn("Tentativa de chamar a IA com prompt vazio ou nulo.");
            throw new IllegalArgumentException("O prompt não pode estar vazio.");
        }

        log.info("Iniciando requisição OpenAI Responses API. Modelo: {}, Reasoning Effort: {}", modelName,
                reasoningEffort);

        try {
            // Build request body for Responses API
            Map<String, Object> requestBody = Map.of(
                    "model", modelName,
                    "reasoning", Map.of("effort", reasoningEffort),
                    "input", examPrompt);

            long start = System.currentTimeMillis();

            String responseJson = webClient.post()
                    .uri(OPENAI_RESPONSES_URL)
                    .header(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey)
                    .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            long duration = System.currentTimeMillis() - start;

            if (responseJson == null) {
                log.error("Resposta da OpenAI nula.");
                throw new RuntimeException("Resposta inválida do provedor de IA.");
            }

            // Parse response
            JsonNode root = objectMapper.readTree(responseJson);
            String responseText = extractTextFromResponse(root);

            if (!StringUtils.hasText(responseText)) {
                throw new RuntimeException("IA retornou conteúdo de texto vazio.");
            }

            // Log usage and cost
            logUsageAndCost(root, duration);

            return responseText;

        } catch (Exception e) {
            log.error("Falha crítica ao comunicar com OpenAI: {}", e.getMessage());
            throw new RuntimeException("Erro ao processar resposta da IA: " + e.getMessage(), e);
        }
    }

    /**
     * Extracts text content from the Responses API response structure.
     * Expected structure:
     * {
     * "output": [
     * { "type": "message", "content": [{ "type": "output_text", "text": "..." }] }
     * ]
     * }
     */
    private String extractTextFromResponse(JsonNode root) {
        JsonNode output = root.path("output");
        if (output.isArray()) {
            for (JsonNode item : output) {
                if ("message".equals(item.path("type").asText())) {
                    JsonNode content = item.path("content");
                    if (content.isArray()) {
                        for (JsonNode contentItem : content) {
                            if ("output_text".equals(contentItem.path("type").asText())) {
                                return contentItem.path("text").asText();
                            }
                        }
                    }
                }
            }
        }
        // Fallback: try direct text field
        return root.path("text").asText(null);
    }

    private void logUsageAndCost(JsonNode root, long duration) {
        JsonNode usage = root.path("usage");
        if (!usage.isMissingNode()) {
            long inputTokens = usage.path("input_tokens").asLong(0);
            long outputTokens = usage.path("output_tokens").asLong(0);
            long totalTokens = inputTokens + outputTokens;

            double costInput = (inputTokens / 1_000_000.0) * pricePer1MInputTokens;
            double costOutput = (outputTokens / 1_000_000.0) * pricePer1MOutputTokens;
            double totalCost = costInput + costOutput;

            String stats = String.format(
                    "IA Stats (OpenAI Responses API) | Tempo: %dms | Tokens: In=%d, Out=%d, Total=%d | Custo Est.: $%s",
                    duration, inputTokens, outputTokens, totalTokens, String.format("%.6f", totalCost));

            log.info(stats);
        } else {
            log.info("IA OpenAI finalizada em {}ms (sem dados de uso)", duration);
        }
    }
}