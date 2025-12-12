package amen.and.Confide.service;

import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.dto.AIResponseDTO;
import amen.and.Confide.model.dto.ExamResponse;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;

@Service
public class ReportService {
    public ExamResponse buildReport(@Valid Exam exam, @Valid AIResponseDTO aiResponse) {
        ExamResponse.Summary summary = new ExamResponse.Summary(
                exam.getSins().size(),
                countGraveSins(exam),
                countVenialSins(exam)
        );

        ExamResponse.Confession confession = new ExamResponse.Confession(
                aiResponse.graveSins(),
                aiResponse.venialSins()
        );

        return new ExamResponse(
                exam,
                summary,
                confession,
                aiResponse.confessionTalk(),
                aiResponse.actOfContrition(),
                aiResponse.commitments(),
                aiResponse.pastoralNotes()
        );
    }

    private int countVenialSins(@Valid Exam exam) {
        return exam.getVenialSins();
    }

    private int countGraveSins(@Valid Exam exam) {
        return exam.getMortalSins();
    }
}
