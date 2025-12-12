package amen.and.Confide.util;

import amen.and.Confide.model.dto.AIResponseDTO;
import amen.and.Confide.util.TestDataBuilder;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

@DisplayName("AIResponseValidator Unit Tests")
class AIResponseValidatorTest {

    @Test
    @DisplayName("Should validate successfully with valid DTO")
    void shouldValidateSuccessfullyWithValidDTO() {
        // Arrange
        AIResponseDTO validResponse = TestDataBuilder.validAIResponse();

        // Act & Assert
        assertDoesNotThrow(() -> AIResponseValidator.validate(validResponse));
    }

    @Test
    @DisplayName("Should throw exception when graveSins is null")
    void shouldThrowExceptionWhenGraveSinsIsNull() {
        // Arrange
        AIResponseDTO invalidResponse = new AIResponseDTO(
                null, // graveSins is null
                List.of("Impaciência"),
                "Confession talk",
                "Act of contrition",
                List.of("Commitment"),
                List.of("Note"));

        // Act & Assert
        assertThatThrownBy(() -> AIResponseValidator.validate(invalidResponse))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("Resposta da IA inválida");
    }

    @Test
    @DisplayName("Should throw exception when venialSins is null")
    void shouldThrowExceptionWhenVenialSinsIsNull() {
        // Arrange
        AIResponseDTO invalidResponse = new AIResponseDTO(
                List.of("Grave sin"),
                null, // venialSins is null
                "Confession talk",
                "Act of contrition",
                List.of("Commitment"),
                List.of("Note"));

        // Act & Assert
        assertThatThrownBy(() -> AIResponseValidator.validate(invalidResponse))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("Resposta da IA inválida");
    }

    @Test
    @DisplayName("Should throw exception when confessionTalk is null")
    void shouldThrowExceptionWhenConfessionTalkIsNull() {
        // Arrange
        AIResponseDTO invalidResponse = new AIResponseDTO(
                List.of("Grave sin"),
                List.of("Venial sin"),
                null, // confessionTalk is null
                "Act of contrition",
                List.of("Commitment"),
                List.of("Note"));

        // Act & Assert
        assertThatThrownBy(() -> AIResponseValidator.validate(invalidResponse))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("Resposta da IA inválida");
    }

    @Test
    @DisplayName("Should throw exception when actOfContrition is null")
    void shouldThrowExceptionWhenActOfContritionIsNull() {
        // Arrange
        AIResponseDTO invalidResponse = new AIResponseDTO(
                List.of("Grave sin"),
                List.of("Venial sin"),
                "Confession talk",
                null, // actOfContrition is null
                List.of("Commitment"),
                List.of("Note"));

        // Act & Assert
        assertThatThrownBy(() -> AIResponseValidator.validate(invalidResponse))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("Resposta da IA inválida");
    }

    @Test
    @DisplayName("Should throw exception when commitments is null")
    void shouldThrowExceptionWhenCommitmentsIsNull() {
        // Arrange
        AIResponseDTO invalidResponse = new AIResponseDTO(
                List.of("Grave sin"),
                List.of("Venial sin"),
                "Confession talk",
                "Act of contrition",
                null, // commitments is null
                List.of("Note"));

        // Act & Assert
        assertThatThrownBy(() -> AIResponseValidator.validate(invalidResponse))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("Resposta da IA inválida");
    }

    @Test
    @DisplayName("Should throw exception when pastoralNotes is null")
    void shouldThrowExceptionWhenPastoralNotesIsNull() {
        // Arrange
        AIResponseDTO invalidResponse = new AIResponseDTO(
                List.of("Grave sin"),
                List.of("Venial sin"),
                "Confession talk",
                "Act of contrition",
                List.of("Commitment"),
                null // pastoralNotes is null
        );

        // Act & Assert
        assertThatThrownBy(() -> AIResponseValidator.validate(invalidResponse))
                .isInstanceOf(IllegalArgumentException.class)
                .hasMessageContaining("Resposta da IA inválida");
    }

    @Test
    @DisplayName("Should validate DTO with empty lists")
    void shouldValidateDTOWithEmptyLists() {
        // Arrange - Empty lists are valid, just not null
        AIResponseDTO responseWithEmptyLists = new AIResponseDTO(
                List.of(),
                List.of(),
                "Confession talk",
                "Act of contrition",
                List.of(),
                List.of());

        // Act & Assert
        assertDoesNotThrow(() -> AIResponseValidator.validate(responseWithEmptyLists));
    }
}
