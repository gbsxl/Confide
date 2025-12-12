package amen.and.Confide.service;

import amen.and.Confide.model.dto.ExamRequest;
import amen.and.Confide.util.TestDataBuilder;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

@DisplayName("ValidationService Unit Tests")
class ValidationServiceTest {

    @Test
    @DisplayName("Should validate successfully with valid ExamRequest")
    void shouldValidateSuccessfullyWithValidRequest() {
        // Arrange
        ExamRequest validRequest = TestDataBuilder.validExamRequest();

        // Act & Assert
        assertDoesNotThrow(() -> ValidationService.isValid(validRequest));
    }

    @Test
    @DisplayName("Should throw exception when sins list is null")
    void shouldThrowExceptionWhenSinsIsNull() {
        // Arrange
        ExamRequest requestWithNullSins = TestDataBuilder.examRequestWithNullSins();

        // Act & Assert
        assertThatThrownBy(() -> ValidationService.isValid(requestWithNullSins))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("sins must not be empty");
    }

    @Test
    @DisplayName("Should throw exception when sins list is empty")
    void shouldThrowExceptionWhenSinsIsEmpty() {
        // Arrange
        ExamRequest requestWithEmptySins = TestDataBuilder.examRequestWithEmptySins();

        // Act & Assert
        assertThatThrownBy(() -> ValidationService.isValid(requestWithEmptySins))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("sins must not be empty");
    }

    @Test
    @DisplayName("Should throw exception when sin name is null")
    void shouldThrowExceptionWhenSinNameIsNull() {
        // Arrange
        ExamRequest request = TestDataBuilder.validExamRequest();
        request.sins().get(0).setName(null);

        // Act & Assert
        assertThatThrownBy(() -> ValidationService.isValid(request))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("sin name must not be empty");
    }

    @Test
    @DisplayName("Should throw exception when sin name is empty")
    void shouldThrowExceptionWhenSinNameIsEmpty() {
        // Arrange
        ExamRequest request = TestDataBuilder.validExamRequest();
        request.sins().get(0).setName("");

        // Act & Assert
        assertThatThrownBy(() -> ValidationService.isValid(request))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("sin name must not be empty");
    }

    @Test
    @DisplayName("Should validate all sins in the list")
    void shouldValidateAllSinsInList() {
        // Arrange
        ExamRequest request = TestDataBuilder.validExamRequest();
        request.sins().get(2).setName(null); // Third sin has null name

        // Act & Assert
        assertThatThrownBy(() -> ValidationService.isValid(request))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("sin name must not be empty");
    }
}
