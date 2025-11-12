package amen.and.Confide.service;

import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.dto.AIResponseDTO;
import amen.and.Confide.model.dto.ExamRequest;
import amen.and.Confide.model.dto.ExamResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ExamService {
    final private AIService aiService;
    final private ReportService reportService;

    public ExamResponse processConfessionSummary(ExamRequest examRequest) {
        //Converte ExamRequest em Exam,
        //categoriza pecados, graves e veniais
        //prepara dados para a IA
        Exam exam = convertToDomain(examRequest);
        categorizeSins(exam);

        AIResponseDTO aiResponse = aiService.sendIARequest(exam);

        return reportService.buildReport(exam, aiResponse);

    }

    private void categorizeSins(Exam exam) {

    }

    private Exam convertToDomain(ExamRequest examRequest) {
        return null;
    }
}
