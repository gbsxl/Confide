package amen.and.Confide.service;

import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.dto.AIResponseDTO;
import amen.and.Confide.model.dto.ExamResponse;
import org.springframework.stereotype.Service;

@Service
public class ReportService {
    public ExamResponse buildReport(Exam exam, AIResponseDTO aiResponse) {
        ExamResponse.Summary summary = new ExamResponse.Summary(
                exam.getSins().size(),
                aiResponse.graveSins().size(),
                aiResponse.venialSins().size()
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
}
