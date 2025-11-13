package amen.and.Confide.model.dto;

import amen.and.Confide.model.domain.Sin;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;

import java.util.List;

public record ExamRequest(
    @Positive
    @Min(1)
    int lastConfessionDays,

    @NotNull
    @NotEmpty
    @Valid
    List<Sin>sins
) {}
