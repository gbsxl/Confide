package amen.and.Confide.controller;

import amen.and.Confide.model.dto.ApiResponse;
import amen.and.Confide.model.dto.ExamRequest;
import amen.and.Confide.model.dto.ExamResponse;
import amen.and.Confide.service.ExamService;
import amen.and.Confide.util.TestDataBuilder;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ExamController.class)
@DisplayName("ExamController Unit Tests")
class ExamControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private ExamService examService;

    private ExamRequest validRequest;
    private ExamResponse expectedResponse;

    @BeforeEach
    void setUp() {
        validRequest = TestDataBuilder.validExamRequest();
        expectedResponse = new ExamResponse(
                TestDataBuilder.validExam(),
                new ExamResponse.Summary(3, 1, 2),
                new ExamResponse.Confession(
                        TestDataBuilder.validAIResponse().graveSins(),
                        TestDataBuilder.validAIResponse().venialSins()),
                "Confession talk",
                "Act of contrition",
                TestDataBuilder.validAIResponse().commitments(),
                TestDataBuilder.validAIResponse().pastoralNotes());
    }

    @Test
    @DisplayName("Should process confession summary successfully and return 201 Created")
    void shouldProcessConfessionSummarySuccessfully() throws Exception {
        // Given
        given(examService.processConfessionSummary(any(ExamRequest.class)))
                .willReturn(expectedResponse);

        // When & Then
        mockMvc.perform(post("/confide/api/exam")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(validRequest)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.data.confession.graveSins").isArray())
                .andExpect(jsonPath("$.data.confession.venialSins").isArray());

        then(examService).should(times(1)).processConfessionSummary(any(ExamRequest.class));
    }

    @Test
    @DisplayName("Should return 400 Bad Request when sins list is empty")
    void shouldReturnBadRequestWhenSinsIsEmpty() throws Exception {
        // Given
        ExamRequest invalidRequest = TestDataBuilder.examRequestWithEmptySins();

        // When & Then
        mockMvc.perform(post("/confide/api/exam")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(invalidRequest)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.success").value(false));
        // .andExpect(jsonPath("$.error.code").value("VALIDATION_ERROR")); // Adjust
        // based on your GlobalExceptionHandler

        then(examService).should(never()).processConfessionSummary(any());
    }

    @Test
    @DisplayName("Should return 400 Bad Request when lastConfessionDays is invalid")
    void shouldReturnBadRequestWhenLastConfessionDaysIsInvalid() throws Exception {
        // Given
        String invalidJson = """
                {
                    "lastConfessionDays": 0,
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

        // When & Then
        mockMvc.perform(post("/confide/api/exam")
                .contentType(MediaType.APPLICATION_JSON)
                .content(invalidJson))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.success").value(false));

        then(examService).should(never()).processConfessionSummary(any());
    }

    @Test
    @DisplayName("Should return 400 Bad Request when request body is malformed")
    void shouldReturnBadRequestWhenRequestBodyIsMalformed() throws Exception {
        // Given
        String malformedJson = "{ invalid json }";

        // When & Then
        mockMvc.perform(post("/confide/api/exam")
                .contentType(MediaType.APPLICATION_JSON)
                .content(malformedJson))
                .andExpect(status().isBadRequest());

        then(examService).should(never()).processConfessionSummary(any());
    }

    @Test
    @DisplayName("Should return 500 Internal Server Error when service throws exception")
    void shouldReturnInternalServerErrorWhenServiceThrowsException() throws Exception {
        // Given
        given(examService.processConfessionSummary(any(ExamRequest.class)))
                .willThrow(new RuntimeException("Service error"));

        // When & Then
        mockMvc.perform(post("/confide/api/exam")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(validRequest)))
                .andExpect(status().isInternalServerError())
                .andExpect(jsonPath("$.success").value(false));

        then(examService).should(times(1)).processConfessionSummary(any(ExamRequest.class));
    }

    @Test
    @DisplayName("Should validate request content type")
    void shouldValidateRequestContentType() throws Exception {
        // When & Then
        mockMvc.perform(post("/confide/api/exam")
                .contentType(MediaType.TEXT_PLAIN)
                .content("plain text"))
                .andExpect(status().isUnsupportedMediaType());

        then(examService).should(never()).processConfessionSummary(any());
    }
}
