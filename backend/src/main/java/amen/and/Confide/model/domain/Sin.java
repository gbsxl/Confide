package amen.and.Confide.model.domain;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
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
    @Size(max = 2000)
    private String description;

    public Sin(String name, Category category, String frequency, String description) {
        this.name = name;
        this.category = category;
        this.subcategory = category.getSubcategory();
        this.frequency = frequency;
        this.description = description;
    }
}
