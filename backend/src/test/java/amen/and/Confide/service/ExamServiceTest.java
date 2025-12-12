package amen.and.Confide.service;

import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.dto.AIResponseDTO;
import amen.and.Confide.model.dto.ExamRequest;
import amen.and.Confide.model.dto.ExamResponse;
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
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.argThat;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;

@ExtendWith(MockitoExtension.class)
@DisplayName("ExamService Unit Tests")
class ExamServiceTest {

        @Mock
        private AIService aiService;

        @Mock
        private ReportService reportService;

        @InjectMocks
        private ExamService examService;

        private ExamRequest validExamRequest;
        private AIResponseDTO validAIResponse;
        private ExamResponse expectedResponse;

        @BeforeEach
        void setUp() {
                validExamRequest = TestDataBuilder.validExamRequest();
                validAIResponse = TestDataBuilder.validAIResponse();
                expectedResponse = new ExamResponse(
                                TestDataBuilder.validExam(),
                                new ExamResponse.Summary(3, 1, 2),
                                new ExamResponse.Confession(
                                                validAIResponse.graveSins(),
                                                validAIResponse.venialSins()),
                                validAIResponse.confessionTalk(),
                                validAIResponse.actOfContrition(),
                                validAIResponse.commitments(),
                                validAIResponse.pastoralNotes());
        }

        @Test
        @DisplayName("Should process confession summary successfully with valid request")
        void shouldProcessConfessionSummarySuccessfully() {
                // Given
                given(aiService.generateFeedbacks(any(Exam.class))).willReturn(validAIResponse);
                given(reportService.buildReport(any(Exam.class), any(AIResponseDTO.class)))
                                .willReturn(expectedResponse);

                // When
                ExamResponse result = examService.processConfessionSummary(validExamRequest);

                // Then
                assertThat(result).isNotNull();
                assertThat(result).isEqualTo(expectedResponse);

                then(aiService).should(times(1)).generateFeedbacks(any(Exam.class));
                then(reportService).should(times(1)).buildReport(any(Exam.class), any(AIResponseDTO.class));
        }

        @Test
        @DisplayName("Should convert ExamRequest to Exam domain correctly")
        void shouldConvertExamRequestToExamDomain() {
                // Given
                given(aiService.generateFeedbacks(any(Exam.class))).willReturn(validAIResponse);
                given(reportService.buildReport(any(Exam.class), any(AIResponseDTO.class)))
                                .willReturn(expectedResponse);

                // When
                examService.processConfessionSummary(validExamRequest);

                // Then
                then(aiService).should().generateFeedbacks(
                                argThat(exam -> exam.getLastConfessionDays() == validExamRequest.lastConfessionDays() &&
                                                exam.getSins().size() == validExamRequest.sins().size()));
        }

        @Test
        @DisplayName("Should handle exam with only venial sins")
        void shouldHandleExamWithOnlyVenialSins() {
                // Given
                ExamRequest venialSinsRequest = TestDataBuilder.examRequestWithOnlyVenialSins();
                AIResponseDTO venialResponse = TestDataBuilder.aiResponseWithOnlyVenialSins();

                given(aiService.generateFeedbacks(any(Exam.class))).willReturn(venialResponse);
                given(reportService.buildReport(any(Exam.class), any(AIResponseDTO.class)))
                                .willReturn(expectedResponse); // Simplified for this test context (or use separate
                                                               // expectedResponse)

                // When
                ExamResponse result = examService.processConfessionSummary(venialSinsRequest);

                // Then
                assertThat(result).isNotNull();
                then(aiService).should(times(1)).generateFeedbacks(any(Exam.class));
        }

        @Test
        @DisplayName("Should handle exam with only mortal sins")
        void shouldHandleExamWithOnlyMortalSins() {
                // Given
                ExamRequest mortalSinsRequest = TestDataBuilder.examRequestWithOnlyMortalSins();
                AIResponseDTO mortalResponse = TestDataBuilder.aiResponseWithOnlyMortalSins();

                given(aiService.generateFeedbacks(any(Exam.class))).willReturn(mortalResponse);
                given(reportService.buildReport(any(Exam.class), any(AIResponseDTO.class)))
                                .willReturn(expectedResponse);

                // When
                ExamResponse result = examService.processConfessionSummary(mortalSinsRequest);

                // Then
                assertThat(result).isNotNull();
                then(aiService).should(times(1)).generateFeedbacks(any(Exam.class));
        }

        @Test
        @DisplayName("Should propagate exception from AIService")
        void shouldPropagateExceptionFromAIService() {
                // Given
                given(aiService.generateFeedbacks(any(Exam.class)))
                                .willThrow(new RuntimeException("AI service error"));

                // When & Then
                assertThatThrownBy(() -> examService.processConfessionSummary(validExamRequest))
                                .isInstanceOf(RuntimeException.class)
                                .hasMessage("AI service error");

                then(aiService).should(times(1)).generateFeedbacks(any(Exam.class));
                then(reportService).should(never()).buildReport(any(), any());
        }
}
