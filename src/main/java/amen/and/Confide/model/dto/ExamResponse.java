package amen.and.Confide.model.dto;

import java.util.List;

public record ExamResponse(
        Summary summary,
        Confession confession,
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
