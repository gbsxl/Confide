package amen.and.Confide.controller;

import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.dto.ExamRequest;
import amen.and.Confide.model.dto.ExamResponse;
import amen.and.Confide.service.ExamService;
import amen.and.Confide.service.ValidationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("confide/api/exam")
public class ExamController {
    private ExamService examService;

    @PostMapping
    public ResponseEntity<ExamResponse> processConfessionSummary(@RequestBody ExamRequest examRequest){
        var isValid = ValidationService.isValid(examRequest);
        ExamResponse examResponse = examService.processConfessionSummary(examRequest);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(examResponse);
    }
}
