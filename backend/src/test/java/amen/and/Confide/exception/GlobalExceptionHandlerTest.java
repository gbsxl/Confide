package amen.and.Confide.exception;

import amen.and.Confide.model.dto.ApiResponse;
import amen.and.Confide.model.dto.ErrorDetails;
import amen.and.Confide.model.dto.ExamRequest;
import amen.and.Confide.util.TestDataBuilder;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@DisplayName("GlobalExceptionHandler Integration Tests")
class GlobalExceptionHandlerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    @DisplayName("Should handle MethodArgumentNotValidException and return 400")
    void shouldHandleMethodArgumentNotValidException() throws Exception {
        // Arrange - Invalid request with negative lastConfessionDays
        String invalidJson = """
                {
                    "lastConfessionDays": -5,
                    "sins": [
                        {
                            "name": "Test sin",
                            "category": "IMPACIENCIA",
                            "frequency": "Daily",
                            "description": "Test"
                        }
                    ]
                }
                """;

        // Act & Assert
        mockMvc.perform(post("/confide/api/exam")
                .contentType(MediaType.APPLICATION_JSON)
                .content(invalidJson))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.success").value(false))
                .andExpect(jsonPath("$.message").value("Dados inválidos"))
                .andExpect(jsonPath("$.errorDetails").exists())
                .andExpect(jsonPath("$.errorDetails.code").value("VALIDATION_ERROR"))
                .andExpect(jsonPath("$.errorDetails.validationErrors").isArray());
    }

    @Test
    @DisplayName("Should handle ConstraintViolationException and return 400")
    void shouldHandleConstraintViolationException() throws Exception {
        // Arrange - Request with empty sins list
        ExamRequest invalidRequest = TestDataBuilder.examRequestWithEmptySins();

        // Act & Assert
        mockMvc.perform(post("/confide/api/exam")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest());
    }

    @Test
    @DisplayName("Should include validation error details in response")
    void shouldIncludeValidationErrorDetailsInResponse() throws Exception {
        // Arrange
        String invalidJson = """
                {
                    "lastConfessionDays": 0,
                    "sins": []
                }
                """;

        // Act & Assert
        mockMvc.perform(post("/confide/api/exam")
                .contentType(MediaType.APPLICATION_JSON)
                .content(invalidJson))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.errorDetails.validationErrors").isArray())
                .andExpect(jsonPath("$.errorDetails.path").value("/confide/api/exam"));
    }

    @Test
    @DisplayName("Should handle malformed JSON and return 400")
    void shouldHandleMalformedJsonAndReturn400() throws Exception {
        // Arrange
        String malformedJson = "{ invalid json without closing brace";

        // Act & Assert
        mockMvc.perform(post("/confide/api/exam")
                .contentType(MediaType.APPLICATION_JSON)
                .content(malformedJson))
                .andExpect(status().isBadRequest());
    }

    @Test
    @DisplayName("Should return error response with correct structure")
    void shouldReturnErrorResponseWithCorrectStructure() throws Exception {
        // Arrange
        String invalidJson = """
                {
                    "lastConfessionDays": -1,
                    "sins": []
                }
                """;

        // Act & Assert
        mockMvc.perform(post("/confide/api/exam")
                .contentType(MediaType.APPLICATION_JSON)
                .content(invalidJson))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.success").exists())
                .andExpect(jsonPath("$.message").exists())
                .andExpect(jsonPath("$.errorDetails").exists())
                .andExpect(jsonPath("$.errorDetails.code").exists())
                .andExpect(jsonPath("$.errorDetails.detail").exists());
    }

    @org.springframework.boot.test.mock.mockito.MockBean
    private amen.and.Confide.service.ExamService examService;

    @Test
    @DisplayName("Should handle generic Exception and return 500")
    void shouldHandleGenericExceptionAndReturn500() throws Exception {
        // Arrange
        org.mockito.BDDMockito.given(examService.processConfessionSummary(org.mockito.ArgumentMatchers.any()))
                .willThrow(new RuntimeException("Unexpected error"));

        ExamRequest validRequest = TestDataBuilder.validExamRequest();

        // Act & Assert
        mockMvc.perform(post("/confide/api/exam")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(validRequest)))
                .andExpect(status().isInternalServerError())
                .andExpect(jsonPath("$.success").value(false))
                .andExpect(jsonPath("$.message").value("Erro interno no servidor"))
                .andExpect(jsonPath("$.errorDetails.code").value("INTERNAL_ERROR"));
    }

    @Test
    @DisplayName("Should handle Unsupported Media Type and return 415")
    void shouldHandleUnsupportedMediaTypeAndReturn415() throws Exception {
        // Act & Assert
        mockMvc.perform(post("/confide/api/exam")
                .contentType(MediaType.TEXT_PLAIN)
                .content("plain text"))
                .andExpect(status().isUnsupportedMediaType())
                .andExpect(jsonPath("$.success").value(false))
                .andExpect(jsonPath("$.message").value("Media type inválido"))
                .andExpect(jsonPath("$.errorDetails.code").value("UNSUPPORTED_MEDIA_TYPE"));
    }

    @Test
    @DisplayName("Should handle ConstraintViolation with nested path and return 400")
    void shouldHandleNestedConstraintViolation() throws Exception {
        // Arrange
        jakarta.validation.Path path = org.mockito.Mockito.mock(jakarta.validation.Path.class);
        org.mockito.BDDMockito.given(path.toString()).willReturn("data.nested.field");

        jakarta.validation.ConstraintViolation<?> violation = org.mockito.Mockito
                .mock(jakarta.validation.ConstraintViolation.class);
        org.mockito.BDDMockito.given(violation.getPropertyPath()).willReturn(path);
        org.mockito.BDDMockito.given(violation.getMessage()).willReturn("Validation failed");
        org.mockito.BDDMockito.given(violation.getInvalidValue()).willReturn("invalid");

        jakarta.validation.ConstraintViolationException exception = new jakarta.validation.ConstraintViolationException(
                java.util.Set.of(violation));

        org.mockito.BDDMockito.given(examService.processConfessionSummary(org.mockito.ArgumentMatchers.any()))
                .willThrow(exception);

        ExamRequest validRequest = TestDataBuilder.validExamRequest();

        // Act & Assert
        mockMvc.perform(post("/confide/api/exam")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(validRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.errorDetails.code").value("CONSTRAINT_VIOLATION"))
                .andExpect(jsonPath("$.errorDetails.validationErrors[0].field").value("field"));
    }
}
