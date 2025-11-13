package amen.and.Confide.model.dto;

import java.util.List;

public record AIResponseDTO(
        List<String> graveSins,
        List<String> venialSins,
        String confessionTalk,
        String actOfContrition,
        List<String> commitments,
        List<String> pastoralNotes
) {}