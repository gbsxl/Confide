package amen.and.Confide.model.domain;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Valid
public class Sin {
    @NotNull
    private String name;
    private Category category;
    private Subcategory subcategory;
    private String frequency;
    private String description;

    public Sin(String name, Category category, String frequency, String description) {
        this.name = name;
        this.category = category;
        this.subcategory = category.getSubcategory();
        this.frequency = frequency;
        this.description = description;
    }
}
