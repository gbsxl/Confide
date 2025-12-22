package amen.and.Confide.service;

import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.dto.AIResponseDTO;
import amen.and.Confide.service.AIService;
import amen.and.Confide.service.OpenAIProviderService;
import amen.and.Confide.util.TestDataBuilder;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;
import static org.mockito.Mockito.times;

@ExtendWith(MockitoExtension.class)
@DisplayName("AIService Unit Tests")
class AIServiceTest {

    @Mock
    private OpenAIProviderService openAIProviderService;

    @InjectMocks
    private AIService aiService;

    private Exam validExam;
    private String validJsonResponse;

    @BeforeEach
    void setUp() {
        validExam = TestDataBuilder.validExam();
        validJsonResponse = TestDataBuilder.validAIResponseJson();
    }

    @Test
    @DisplayName("Should generate feedbacks successfully with valid exam")
    void shouldGenerateFeedbacksSuccessfully() {
        // Given
        given(openAIProviderService.getAIChatResponse(anyString())).willReturn(validJsonResponse);

        // When
        AIResponseDTO result = aiService.generateFeedbacks(validExam);

        // Then
        assertThat(result).isNotNull();
        assertThat(result.graveSins()).isNotEmpty();
        assertThat(result.venialSins()).isNotEmpty();
        assertThat(result.confessionTalk()).isNotBlank();
        assertThat(result.actOfContrition()).isNotBlank();
        assertThat(result.commitments()).isNotEmpty();
        assertThat(result.pastoralNotes()).isNotEmpty();

        then(openAIProviderService).should(times(1)).getAIChatResponse(anyString());
    }

    @Test
    @DisplayName("Should throw RuntimeException when AI response is invalid")
    void shouldThrowExceptionWhenAIResponseIsInvalid() {
        // Given
        String invalidResponse = TestDataBuilder.invalidAIResponseJson();
        given(openAIProviderService.getAIChatResponse(anyString())).willReturn(invalidResponse);

        // When & Then
        assertThatThrownBy(() -> aiService.generateFeedbacks(validExam))
                .isInstanceOf(RuntimeException.class);

        then(openAIProviderService).should(times(1)).getAIChatResponse(anyString());
    }

    @Test
    @DisplayName("Should throw RuntimeException when AI response is malformed JSON")
    void shouldThrowExceptionWhenResponseIsMalformedJson() {
        // Given
        String malformedJson = TestDataBuilder.malformedJson();
        given(openAIProviderService.getAIChatResponse(anyString())).willReturn(malformedJson);

        // When & Then
        assertThatThrownBy(() -> aiService.generateFeedbacks(validExam))
                .isInstanceOf(RuntimeException.class);

        then(openAIProviderService).should(times(1)).getAIChatResponse(anyString());
    }

    @Test
    @DisplayName("Should validate response correctly with valid data")
    void shouldValidateResponseCorrectly() {
        // Given
        given(openAIProviderService.getAIChatResponse(anyString())).willReturn(validJsonResponse);

        // When
        AIResponseDTO result = aiService.generateFeedbacks(validExam);

        // Then - if no exception is thrown, validation passed
        assertThat(result).isNotNull();
    }

    @Test
    @DisplayName("Should handle exam with multiple sins")
    void shouldHandleExamWithMultipleSins() {
        // Given
        Exam examWithMixedSins = TestDataBuilder.examWithMixedSins();
        given(openAIProviderService.getAIChatResponse(anyString())).willReturn(validJsonResponse);

        // When
        AIResponseDTO result = aiService.generateFeedbacks(examWithMixedSins);

        // Then
        assertThat(result).isNotNull();
        then(openAIProviderService).should(times(1)).getAIChatResponse(anyString());
    }

    @Test
    @DisplayName("Should propagate exception from OpenAI service")
    void shouldPropagateExceptionFromOpenAIService() {
        // Given
        given(openAIProviderService.getAIChatResponse(anyString()))
                .willThrow(new RuntimeException("OpenAI API error"));

        // When & Then
        assertThatThrownBy(() -> aiService.generateFeedbacks(validExam))
                .isInstanceOf(RuntimeException.class)
                .hasMessageContaining("OpenAI API error");

        then(openAIProviderService).should(times(1)).getAIChatResponse(anyString());
    }
}
