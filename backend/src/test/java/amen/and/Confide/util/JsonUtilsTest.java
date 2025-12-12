package amen.and.Confide.util;

import amen.and.Confide.model.dto.AIResponseDTO;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

@DisplayName("JsonUtils Unit Tests")
class JsonUtilsTest {

    @Test
    @DisplayName("Should parse valid JSON to AIResponseDTO successfully")
    void shouldParseValidJsonSuccessfully() {
        // Arrange
        String validJson = TestDataBuilder.validAIResponseJson();

        // Act
        AIResponseDTO result = JsonUtils.fromJson(validJson, AIResponseDTO.class);

        // Assert
        assertThat(result).isNotNull();
        assertThat(result.graveSins()).isNotEmpty();
        assertThat(result.venialSins()).isNotEmpty();
        assertThat(result.confessionTalk()).isNotBlank();
        assertThat(result.actOfContrition()).isNotBlank();
        assertThat(result.commitments()).isNotEmpty();
        assertThat(result.pastoralNotes()).isNotEmpty();
    }

    @Test
    @DisplayName("Should throw RuntimeException for malformed JSON")
    void shouldThrowExceptionForMalformedJson() {
        // Arrange
        String malformedJson = TestDataBuilder.malformedJson();

        // Act & Assert
        assertThatThrownBy(() -> JsonUtils.fromJson(malformedJson, AIResponseDTO.class))
                .isInstanceOf(RuntimeException.class)
                .hasMessageContaining("Erro ao converter JSON para objeto");
    }

    @Test
    @DisplayName("Should throw RuntimeException for empty JSON")
    void shouldThrowExceptionForEmptyJson() {
        // Arrange
        String emptyJson = "";

        // Act & Assert
        assertThatThrownBy(() -> JsonUtils.fromJson(emptyJson, AIResponseDTO.class))
                .isInstanceOf(RuntimeException.class)
                .hasMessageContaining("Erro ao converter JSON para objeto");
    }

    @Test
    @DisplayName("Should parse JSON with empty arrays")
    void shouldParseJsonWithEmptyArrays() {
        // Arrange
        String jsonWithEmptyArrays = """
                {
                  "graveSins": [],
                  "venialSins": [],
                  "confessionTalk": "Talk",
                  "actOfContrition": "Act",
                  "commitments": [],
                  "pastoralNotes": []
                }
                """;

        // Act
        AIResponseDTO result = JsonUtils.fromJson(jsonWithEmptyArrays, AIResponseDTO.class);

        // Assert
        assertThat(result).isNotNull();
        assertThat(result.graveSins()).isEmpty();
        assertThat(result.venialSins()).isEmpty();
        assertThat(result.commitments()).isEmpty();
        assertThat(result.pastoralNotes()).isEmpty();
    }

    @Test
    @DisplayName("Should parse JSON with special characters")
    void shouldParseJsonWithSpecialCharacters() {
        // Arrange
        String jsonWithSpecialChars = """
                {
                  "graveSins": ["Pecado com 'aspas'"],
                  "venialSins": ["Pecado com \\"aspas duplas\\""],
                  "confessionTalk": "Texto com \\n quebra de linha",
                  "actOfContrition": "Ato de contrição",
                  "commitments": ["Compromisso 1"],
                  "pastoralNotes": ["Nota pastoral"]
                }
                """;

        // Act
        AIResponseDTO result = JsonUtils.fromJson(jsonWithSpecialChars, AIResponseDTO.class);

        // Assert
        assertThat(result).isNotNull();
        assertThat(result.graveSins()).hasSize(1);
    }

    @Test
    @DisplayName("Should handle JSON with null values")
    void shouldHandleJsonWithNullValues() {
        // Arrange
        String jsonWithNulls = """
                {
                  "graveSins": null,
                  "venialSins": null,
                  "confessionTalk": null,
                  "actOfContrition": null,
                  "commitments": null,
                  "pastoralNotes": null
                }
                """;

        // Act
        AIResponseDTO result = JsonUtils.fromJson(jsonWithNulls, AIResponseDTO.class);

        // Assert - parsing succeeds but validation would fail
        assertThat(result).isNotNull();
    }

    @Test
    @DisplayName("Should parse nested JSON structures")
    void shouldParseNestedJsonStructures() {
        // Arrange
        String validJson = TestDataBuilder.validAIResponseJson();

        // Act
        AIResponseDTO result = JsonUtils.fromJson(validJson, AIResponseDTO.class);

        // Assert
        assertThat(result.graveSins()).isInstanceOf(List.class);
        assertThat(result.venialSins()).isInstanceOf(List.class);
    }
}
