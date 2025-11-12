package amen.and.Confide.model.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Sin {
    private String name;
    private Category category;
    private String frequency;
    private String description;
}
