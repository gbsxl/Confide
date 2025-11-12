package amen.and.Confide.model.domain;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Sin {
    @NotBlank(message = "Sin's name is required")
    @NotNull
    private String name;
    @NotBlank(message = "Sin's category is required")
    private Category category;
    private String frequency;
    private String description;
}
