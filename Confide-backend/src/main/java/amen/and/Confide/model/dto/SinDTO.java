package amen.and.Confide.model.dto;

import amen.and.Confide.model.domain.Category;

public record SinDTO(
        String name,
        Category category,
        String frequency,
        String description
) {}
