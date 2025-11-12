package amen.and.Confide.model.domain;

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
    private int lastConfessionDays;
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
