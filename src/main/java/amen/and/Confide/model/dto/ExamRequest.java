package amen.and.Confide.model.dto;

import amen.and.Confide.model.domain.Sin;

import java.util.List;

public record ExamRequest(
    int lastConfessionDays,
    List<Sin>sins
) {}
