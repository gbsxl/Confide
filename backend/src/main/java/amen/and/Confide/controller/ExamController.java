package amen.and.Confide.controller;

import amen.and.Confide.model.dto.ApiResponse;
import amen.and.Confide.model.dto.ExamRequest;
import amen.and.Confide.model.dto.ExamResponse;
import amen.and.Confide.service.ExamService;
import amen.and.Confide.service.ValidationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Exam", description = "Examination of Conscience API")
@RestController
@RequiredArgsConstructor
@RequestMapping("confide/api/exam")
@Validated
public class ExamController {
    private final ExamService examService;

    @Operation(summary = "Process confession examination", description = "Processes an examination of conscience request and generates AI-powered spiritual guidance including sin classification, act of contrition, commitments, and pastoral notes.")
    @ApiResponses(value = {
            @io.swagger.v3.oas.annotations.responses.ApiResponse(responseCode = "201", description = "Confession examination processed successfully", content = @Content(schema = @Schema(implementation = ExamResponse.class))),
            @io.swagger.v3.oas.annotations.responses.ApiResponse(responseCode = "400", description = "Invalid request data - validation errors", content = @Content(schema = @Schema(implementation = ApiResponse.class))),
            @io.swagger.v3.oas.annotations.responses.ApiResponse(responseCode = "500", description = "Internal server error", content = @Content(schema = @Schema(implementation = ApiResponse.class)))
    })
    @PostMapping
    public ResponseEntity<ApiResponse<?>> processConfessionSummary(@Valid @RequestBody ExamRequest examRequest) {

        ValidationService.isValid(examRequest);
        ExamResponse examResponse = examService.processConfessionSummary(examRequest);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(ApiResponse.success(examResponse));
    }
}
