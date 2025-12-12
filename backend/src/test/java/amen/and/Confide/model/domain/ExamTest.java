package amen.and.Confide.model.domain;

import amen.and.Confide.util.TestDataBuilder;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Exam Domain Model Tests")
class ExamTest {

    @Test
    @DisplayName("Should count venial sins correctly")
    void shouldCountVenialSinsCorrectly() {
        // Arrange
        Exam exam = TestDataBuilder.examWithOnlyVenialSins();

        // Act
        int venialCount = exam.getVenialSins();

        // Assert
        assertThat(venialCount).isEqualTo(3);
    }

    @Test
    @DisplayName("Should count mortal sins correctly")
    void shouldCountMortalSinsCorrectly() {
        // Arrange
        Exam exam = TestDataBuilder.examWithOnlyMortalSins();

        // Act
        int mortalCount = exam.getMortalSins();

        // Assert
        assertThat(mortalCount).isEqualTo(2);
    }

    @Test
    @DisplayName("Should count mixed sins correctly")
    void shouldCountMixedSinsCorrectly() {
        // Arrange
        Exam exam = TestDataBuilder.examWithMixedSins();

        // Act
        int venialCount = exam.getVenialSins();
        int mortalCount = exam.getMortalSins();

        // Assert
        assertThat(venialCount).isEqualTo(2);
        assertThat(mortalCount).isEqualTo(2);
        assertThat(venialCount + mortalCount).isEqualTo(exam.getSins().size());
    }

    @Test
    @DisplayName("Should return zero for venial sins when all are mortal")
    void shouldReturnZeroForVenialSinsWhenAllAreMortal() {
        // Arrange
        Exam exam = TestDataBuilder.examWithOnlyMortalSins();

        // Act
        int venialCount = exam.getVenialSins();

        // Assert
        assertThat(venialCount).isZero();
    }

    @Test
    @DisplayName("Should return zero for mortal sins when all are venial")
    void shouldReturnZeroForMortalSinsWhenAllAreVenial() {
        // Arrange
        Exam exam = TestDataBuilder.examWithOnlyVenialSins();

        // Act
        int mortalCount = exam.getMortalSins();

        // Assert
        assertThat(mortalCount).isZero();
    }

    @Test
    @DisplayName("Should store lastConfessionDays correctly")
    void shouldStoreLastConfessionDaysCorrectly() {
        // Arrange & Act
        Exam exam = TestDataBuilder.validExam();

        // Assert
        assertThat(exam.getLastConfessionDays()).isEqualTo(30);
    }

    @Test
    @DisplayName("Should store sins list correctly")
    void shouldStoreSinsListCorrectly() {
        // Arrange & Act
        Exam exam = TestDataBuilder.validExam();

        // Assert
        assertThat(exam.getSins()).isNotNull();
        assertThat(exam.getSins()).isNotEmpty();
        assertThat(exam.getSins()).hasSize(2);
    }
}
