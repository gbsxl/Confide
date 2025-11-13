package amen.and.Confide.model.domain;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Data
@AllArgsConstructor
public class Exam {
    @Positive
    @Min(1)
    private int lastConfessionDays;

    @NotNull
    @NotEmpty
    @Valid
    private List<Sin> sins;

    public int getVenialSins(){
        var venialSins = sins.stream().filter(sin -> sin.getCategory().getSubcategory().name().equals("PECADOS_VENIAIS"));
        return Math.toIntExact(venialSins.count());
    }
    public int getMortalSins(){
        var venialSins = sins.stream().filter(sin -> !sin.getCategory().getSubcategory().name().equals("PECADOS_VENIAIS"));
        return Math.toIntExact(venialSins.count());
    }
}
