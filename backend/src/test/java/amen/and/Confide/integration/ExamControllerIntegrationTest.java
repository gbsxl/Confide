package amen.and.Confide.integration;

import amen.and.Confide.model.dto.ExamRequest;
import amen.and.Confide.util.TestDataBuilder;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.tomakehurst.wiremock.WireMockServer;
import com.github.tomakehurst.wiremock.client.WireMock;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;

import static com.github.tomakehurst.wiremock.client.WireMock.*;
import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.options;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.notNullValue;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@DisplayName("Exam Controller Integration Tests")
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class ExamControllerIntegrationTest {

  @LocalServerPort
  private int port;

  @Autowired
  private ObjectMapper objectMapper;

  private static WireMockServer wireMockServer;

  @DynamicPropertySource
  static void configureProperties(DynamicPropertyRegistry registry) {
    registry.add("spring.ai.openai.base-url", () -> "http://localhost:8089/v1");
    registry.add("spring.ai.openai.api-key", () -> "test-api-key");
    registry.add("spring.ai.openai.assistant.id", () -> "test-assistant-id");
  }

  @BeforeAll
  static void setupWireMock() {
    wireMockServer = new WireMockServer(options().port(8089));
    wireMockServer.start();
    WireMock.configureFor("localhost", 8089);
  }

  @AfterAll
  static void tearDownWireMock() {
    if (wireMockServer != null) {
      wireMockServer.stop();
    }
  }

  @BeforeEach
  void setUp() {
    wireMockServer.resetAll();
    RestAssured.port = port;
  }

  @Test
  @Order(1)
  @DisplayName("Should process confession successfully end-to-end")
  void shouldProcessConfessionSuccessfullyEndToEnd() throws Exception {
    // Arrange - Mock OpenAI API responses
    setupSuccessfulOpenAIMocks();

    ExamRequest request = TestDataBuilder.validExamRequest();

    // Act & Assert
    given()
        .contentType(ContentType.JSON)
        .body(request)
        .when()
        .post("/confide/api/exam")
        .then()
        .statusCode(HttpStatus.CREATED.value())
        .body("success", equalTo(true))
        .body("data", notNullValue());

    // Verify WireMock interactions
    verify(postRequestedFor(urlEqualTo("/v1/threads")));
    verify(postRequestedFor(urlMatching("/v1/threads/.*/messages")));
    verify(postRequestedFor(urlMatching("/v1/threads/.*/runs")));
  }

  @Test
  @Order(2)
  @DisplayName("Should return 400 for invalid request")
  void shouldReturn400ForInvalidRequest() {
    // Arrange
    ExamRequest invalidRequest = TestDataBuilder.examRequestWithEmptySins();

    // Act & Assert
    given()
        .contentType(ContentType.JSON)
        .body(invalidRequest)
        .when()
        .post("/confide/api/exam")
        .then()
        .statusCode(HttpStatus.BAD_REQUEST.value())
        .body("success", equalTo(false));
  }

  @Test
  @Order(3)
  @DisplayName("Should handle OpenAI API timeout gracefully")
  void shouldHandleOpenAITimeoutGracefully() {
    // Arrange - Mock OpenAI to delay response
    stubFor(post(urlEqualTo("/v1/threads"))
        .willReturn(aResponse()
            .withStatus(200)
            .withHeader("Content-Type", "application/json")
            .withBody("{\"id\":\"thread_123\"}")
            .withFixedDelay(60000))); // 60 second delay

    ExamRequest request = TestDataBuilder.validExamRequest();

    // Act & Assert
    given()
        .contentType(ContentType.JSON)
        .body(request)
        .when()
        .post("/confide/api/exam")
        .then()
        .statusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
  }

  private void setupSuccessfulOpenAIMocks() throws Exception {
    // Mock thread creation
    stubFor(post(urlEqualTo("/v1/threads"))
        .willReturn(aResponse()
            .withStatus(200)
            .withHeader("Content-Type", "application/json")
            .withBody("{\"id\":\"thread_123\"}")));

    // Mock message creation
    stubFor(post(urlMatching("/v1/threads/.*/messages"))
        .willReturn(aResponse()
            .withStatus(200)
            .withHeader("Content-Type", "application/json")
            .withBody("{\"id\":\"msg_123\"}")));

    // Mock run creation
    stubFor(post(urlMatching("/v1/threads/.*/runs"))
        .willReturn(aResponse()
            .withStatus(200)
            .withHeader("Content-Type", "application/json")
            .withBody("{\"id\":\"run_123\",\"status\":\"queued\"}")));

    // Mock run status check - return completed
    stubFor(get(urlMatching("/v1/threads/.*/runs/.*"))
        .willReturn(aResponse()
            .withStatus(200)
            .withHeader("Content-Type", "application/json")
            .withBody("{\"id\":\"run_123\",\"status\":\"completed\"}")));

    // Mock messages retrieval
    String aiResponseJson = TestDataBuilder.validAIResponseJson();
    stubFor(get(urlMatching("/v1/threads/.*/messages.*"))
        .willReturn(aResponse()
            .withStatus(200)
            .withHeader("Content-Type", "application/json")
            .withBody(String.format("""
                {
                  "data": [
                    {
                      "role": "assistant",
                      "content": [
                        {
                          "type": "text",
                          "text": {
                            "value": %s
                          }
                        }
                      ]
                    }
                  ]
                }
                """, objectMapper.writeValueAsString(aiResponseJson)))));
  }
}
