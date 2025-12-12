package amen.and.Confide.service;

import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.dto.AIResponseDTO;
import amen.and.Confide.model.dto.ExamResponse;
import amen.and.Confide.util.TestDataBuilder;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("ReportService Unit Tests")
class ReportServiceTest {

    private ReportService reportService;
    private AIResponseDTO validAIResponse;

    @BeforeEach
    void setUp() {
        reportService = new ReportService();
        validAIResponse = TestDataBuilder.validAIResponse();
    }

    @Test
    @DisplayName("Should build report successfully with mixed sins")
    void shouldBuildReportWithMixedSins() {
        // Arrange
        Exam exam = TestDataBuilder.examWithMixedSins();

        // Act
        ExamResponse result = reportService.buildReport(exam, validAIResponse);

        // Assert
        assertThat(result).isNotNull();
        assertThat(result.exam()).isEqualTo(exam);
        assertThat(result.summary()).isNotNull();
        assertThat(result.summary().totalSins()).isEqualTo(4);
        assertThat(result.summary().graveSins()).isEqualTo(2);
        assertThat(result.summary().venialSins()).isEqualTo(2);
        assertThat(result.confession()).isNotNull();
        assertThat(result.confession().graveSins()).isEqualTo(validAIResponse.graveSins());
        assertThat(result.confession().venialSins()).isEqualTo(validAIResponse.venialSins());
        assertThat(result.confessionTalk()).isEqualTo(validAIResponse.confessionTalk());
        assertThat(result.actOfContrition()).isEqualTo(validAIResponse.actOfContrition());
        assertThat(result.commitments()).isEqualTo(validAIResponse.commitments());
        assertThat(result.pastoralNotes()).isEqualTo(validAIResponse.pastoralNotes());
    }

    @Test
    @DisplayName("Should count only venial sins correctly")
    void shouldCountOnlyVenialSinsCorrectly() {
        // Arrange
        Exam exam = TestDataBuilder.examWithOnlyVenialSins();
        AIResponseDTO aiResponse = TestDataBuilder.aiResponseWithOnlyVenialSins();

        // Act
        ExamResponse result = reportService.buildReport(exam, aiResponse);

        // Assert
        assertThat(result.summary().totalSins()).isEqualTo(3);
        assertThat(result.summary().graveSins()).isEqualTo(0);
        assertThat(result.summary().venialSins()).isEqualTo(3);
    }

    @Test
    @DisplayName("Should count only mortal sins correctly")
    void shouldCountOnlyMortalSinsCorrectly() {
        // Arrange
        Exam exam = TestDataBuilder.examWithOnlyMortalSins();
        AIResponseDTO aiResponse = TestDataBuilder.aiResponseWithOnlyMortalSins();

        // Act
        ExamResponse result = reportService.buildReport(exam, aiResponse);

        // Assert
        assertThat(result.summary().totalSins()).isEqualTo(2);
        assertThat(result.summary().graveSins()).isEqualTo(2);
        assertThat(result.summary().venialSins()).isEqualTo(0);
    }

    @Test
    @DisplayName("Should handle exam with single sin")
    void shouldHandleExamWithSingleSin() {
        // Arrange
        Exam exam = TestDataBuilder.validExam();

        // Act
        ExamResponse result = reportService.buildReport(exam, validAIResponse);

        // Assert
        assertThat(result).isNotNull();
        assertThat(result.summary().totalSins()).isEqualTo(2);
    }

    @Test
    @DisplayName("Should map AI response fields correctly to ExamResponse")
    void shouldMapAIResponseFieldsCorrectly() {
        // Arrange
        Exam exam = TestDataBuilder.validExam();

        // Act
        ExamResponse result = reportService.buildReport(exam, validAIResponse);

        // Assert
        assertThat(result.confessionTalk()).isEqualTo(validAIResponse.confessionTalk());
        assertThat(result.actOfContrition()).isEqualTo(validAIResponse.actOfContrition());
        assertThat(result.commitments()).hasSize(validAIResponse.commitments().size());
        assertThat(result.pastoralNotes()).hasSize(validAIResponse.pastoralNotes().size());
    }

    @Test
    @DisplayName("Should create summary with correct statistics")
    void shouldCreateSummaryWithCorrectStatistics() {
        // Arrange
        Exam exam = TestDataBuilder.examWithMixedSins();

        // Act
        ExamResponse result = reportService.buildReport(exam, validAIResponse);

        // Assert
        ExamResponse.Summary summary = result.summary();
        assertThat(summary.totalSins()).isEqualTo(exam.getSins().size());
        assertThat(summary.graveSins()).isEqualTo(exam.getMortalSins());
        assertThat(summary.venialSins()).isEqualTo(exam.getVenialSins());
        assertThat(summary.totalSins()).isEqualTo(summary.graveSins() + summary.venialSins());
    }
}
