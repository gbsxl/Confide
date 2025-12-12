package amen.and.Confide.util;

import amen.and.Confide.model.domain.Exam;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("TextFormatter Unit Tests")
class TextFormatterTest {

    @Test
    @DisplayName("Should format prompt with complete exam data")
    void shouldFormatPromptWithCompleteExamData() {
        // Arrange
        Exam exam = TestDataBuilder.validExam();

        // Act
        String result = TextFormatter.formatPrompt(exam);

        // Assert
        assertThat(result).isNotBlank();
        assertThat(result).contains("Você é um assistente pastoral católico");
        assertThat(result).contains("Pecados relatados:");
        assertThat(result).contains("graveSins");
        assertThat(result).contains("venialSins");
        assertThat(result).contains("actOfContrition");
        assertThat(result).contains("commitments");
        assertThat(result).contains("pastoralNotes");
    }

    @Test
    @DisplayName("Should include all sins in prompt")
    void shouldIncludeAllSinsInPrompt() {
        // Arrange
        Exam exam = TestDataBuilder.examWithMixedSins();

        // Act
        String result = TextFormatter.formatPrompt(exam);

        // Assert
        exam.getSins().forEach(sin -> {
            assertThat(result).contains(sin.getName());
            assertThat(result).contains(sin.getCategory().toString());
        });
    }

    @Test
    @DisplayName("Should handle sins with null descriptions")
    void shouldHandleSinsWithNullDescriptions() {
        // Arrange
        Exam exam = TestDataBuilder.validExam();
        exam.getSins().get(0).setDescription(null);

        // Act
        String result = TextFormatter.formatPrompt(exam);

        // Assert
        assertThat(result).isNotBlank();
        assertThat(result).contains("sem descrição");
    }

    @Test
    @DisplayName("Should handle sins with null frequencies")
    void shouldHandleSinsWithNullFrequencies() {
        // Arrange
        Exam exam = TestDataBuilder.validExam();
        exam.getSins().get(0).setFrequency(null);

        // Act
        String result = TextFormatter.formatPrompt(exam);

        // Assert
        assertThat(result).isNotBlank();
        assertThat(result).contains("frequência não informada");
    }

    @Test
    @DisplayName("Should format prompt with venial sins only")
    void shouldFormatPromptWithVenialSinsOnly() {
        // Arrange
        Exam exam = TestDataBuilder.examWithOnlyVenialSins();

        // Act
        String result = TextFormatter.formatPrompt(exam);

        // Assert
        assertThat(result).isNotBlank();
        assertThat(result).contains("Pecados relatados:");
        assertThat(exam.getSins()).allMatch(sin -> result.contains(sin.getName()));
    }

    @Test
    @DisplayName("Should format prompt with mortal sins only")
    void shouldFormatPromptWithMortalSinsOnly() {
        // Arrange
        Exam exam = TestDataBuilder.examWithOnlyMortalSins();

        // Act
        String result = TextFormatter.formatPrompt(exam);

        // Assert
        assertThat(result).isNotBlank();
        assertThat(result).contains("Pecados relatados:");
    }

    @Test
    @DisplayName("Should include JSON structure example in prompt")
    void shouldIncludeJsonStructureExampleInPrompt() {
        // Arrange
        Exam exam = TestDataBuilder.validExam();

        // Act
        String result = TextFormatter.formatPrompt(exam);

        // Assert
        assertThat(result).contains("Exemplo de estrutura esperada:");
        assertThat(result).contains("\"graveSins\":");
        assertThat(result).contains("\"venialSins\":");
        assertThat(result).contains("\"confessionTalk\"");
    }

    @Test
    @DisplayName("Should include instructions for AI in prompt")
    void shouldIncludeInstructionsForAIInPrompt() {
        // Arrange
        Exam exam = TestDataBuilder.validExam();

        // Act
        String result = TextFormatter.formatPrompt(exam);

        // Assert
        assertThat(result).contains("Sua tarefa:");
        assertThat(result).contains("Classifique os pecados");
        assertThat(result).contains("ato de contrição");
        assertThat(result).contains("compromissos práticos");
        assertThat(result).contains("notas pastorais");
    }
}
