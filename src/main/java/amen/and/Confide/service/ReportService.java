package amen.and.Confide.service;

import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.dto.AIResponseDTO;
import amen.and.Confide.model.dto.ExamResponse;

public class ReportService {
    public ExamResponse buildReport(Exam exam, AIResponseDTO aiResponse) {
        ExamResponse.Summary summary = new ExamResponse.Summary(
                exam.getSins().size(),
                countGraveSins(exam),
                countVenialSins(exam)
        );

        // Monta Confession
        ExamResponse.Confession confession = new ExamResponse.Confession(
                aiResponse.graveSins(),
                aiResponse.venialSins()
        );

        return new ExamResponse(
                summary,
                confession,
                aiResponse.actOfContrition(),
                aiResponse.commitments(),
                aiResponse.pastoralNotes()
        );
    }

    private int countVenialSins(Exam exam) {
        return exam.getVenialSins();
    }

    private int countGraveSins(Exam exam) {
        return exam.getMortalSins();
    }
}
