package amen.and.Confide.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public record AIResponseDTO(
                @NotNull List<String> graveSins,
                @NotNull List<String> venialSins,
                @NotNull @NotBlank String confessionTalk,
                @NotNull @NotBlank String actOfContrition,
                @NotNull List<String> commitments,
                @NotNull List<String> pastoralNotes) {
}