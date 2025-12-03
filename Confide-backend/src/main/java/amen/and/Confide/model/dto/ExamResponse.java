package amen.and.Confide.model.dto;

import amen.and.Confide.model.domain.Exam;

import java.util.List;

public record ExamResponse(
        Exam exam,
        Summary summary,
        Confession confession,
        String confessionTalk,
        String actOfContrition,
        List<String> commitments,
        List<String> pastoralNotes
) {
    public record Summary(
            int totalSins,
            int graveSins,
            int venialSins
    ) {}

    public record Confession(
            List<String> graveSins,
            List<String> venialSins
    ) {}
}
