package amen.and.Confide.service;

import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.dto.AIResponseDTO;
import amen.and.Confide.model.dto.ExamRequest;
import amen.and.Confide.model.dto.ExamResponse;
import amen.and.Confide.util.ExamMapper;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ExamService {
    final private AIService aiService;
    final private ReportService reportService;

    public ExamResponse processConfessionSummary(@Valid ExamRequest examRequest) {
        Exam exam = convertToDomain(examRequest);

        AIResponseDTO aiResponse = aiService.generateFeedbacks(exam);

        return reportService.buildReport(exam, aiResponse);
    }

    private Exam convertToDomain(@Valid ExamRequest examRequest) {
        return ExamMapper.INSTANCE.toExam(examRequest);
    }
}
