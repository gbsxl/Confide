package amen.and.Confide.controller;

import amen.and.Confide.model.dto.ExamRequest;
import amen.and.Confide.model.dto.ExamResponse;
import amen.and.Confide.service.ExamService;
import amen.and.Confide.service.ValidationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("confide/api/exam")
@Validated
public class ExamController {
    private final ExamService examService;

    @PostMapping
    public ResponseEntity<ExamResponse> processConfessionSummary(@Valid @RequestBody ExamRequest examRequest){
        ValidationService.isValid(examRequest);
        ExamResponse examResponse = examService.processConfessionSummary(examRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(examResponse);
    }
}
