package amen.and.Confide.service;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;
import java.util.Map;

@Service
public class OpenAIChatService {

    private final RestClient restClient;
    private final String assistantId;

    public OpenAIChatService(
            @Value("${spring.ai.openai.api-key}") String apiKey,
            @Value("${spring.ai.openai.assistant.id}") String assistantId) {
        this.assistantId = assistantId;
        this.restClient = RestClient.builder()
                .baseUrl("https://api.openai.com/v1")
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey)
                .defaultHeader("OpenAI-Beta", "assistants=v2")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();
    }

    public String getAIChatResponse(@NotEmpty @NotNull @NotBlank @Valid String userMessage) {
        try {
            var threadResponse = restClient.post()
                    .uri("/threads")
                    .body(Map.of())
                    .retrieve()
                    .body(ThreadResponse.class);

            assert threadResponse != null;
            String threadId = threadResponse.id();

            restClient.post()
                    .uri("/threads/{thread_id}/messages", threadId)
                    .body(Map.of(
                            "role", "user",
                            "content", userMessage
                    ))
                    .retrieve()
                    .toBodilessEntity();

            var runResponse = restClient.post()
                    .uri("/threads/{thread_id}/runs", threadId)
                    .body(Map.of("assistant_id", assistantId))
                    .retrieve()
                    .body(RunResponse.class);

            assert runResponse != null;
            String runId = runResponse.id();

            RunResponse run = waitForCompletion(threadId, runId);

            if (!"completed".equals(run.status())) {
                throw new RuntimeException("Run falhou com status: " + run.status());
            }

            // 5. Recuperar mensagens
            var messagesResponse = restClient.get()
                    .uri("/threads/{thread_id}/messages?order=desc&limit=1", threadId)
                    .retrieve()
                    .body(MessagesResponse.class);

            // 6. Extrair resposta do assistant
            assert messagesResponse != null;
            return messagesResponse.data().stream()
                    .filter(msg -> "assistant".equals(msg.role()))
                    .flatMap(msg -> msg.content().stream())
                    .filter(content -> "text".equals(content.type()))
                    .map(content -> content.text().value())
                    .findFirst()
                    .orElse("Sem resposta do assistant");

        } catch (Exception e) {
            throw new RuntimeException("Erro ao chamar assistant: " + e.getMessage(), e);
        }
    }

    private RunResponse waitForCompletion(String threadId, String runId) {
        int maxAttempts = 60;
        int attempt = 0;

        while (attempt < maxAttempts) {
            var run = restClient.get()
                    .uri("/threads/{thread_id}/runs/{run_id}", threadId, runId)
                    .retrieve()
                    .body(RunResponse.class);

            assert run != null;
            if ("completed".equals(run.status()) ||
                    "failed".equals(run.status()) ||
                    "cancelled".equals(run.status()) ||
                    "expired".equals(run.status())) {
                return run;
            }

            try {
                Thread.sleep(attempt < 5 ? 500 : 1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                throw new RuntimeException("Polling interrompido", e);
            }

            attempt++;
        }

        throw new RuntimeException("Timeout esperando conclusão do run");
    }
    record ThreadResponse(String id) {}

    record RunResponse(String id, String status) {}

    record MessagesResponse(List<Message> data) {}

    record Message(
            String role,
            List<Content> content
    ) {}

    record Content(
            String type,
            @JsonProperty("text") TextContent text
    ) {}

    record TextContent(String value) {}
}