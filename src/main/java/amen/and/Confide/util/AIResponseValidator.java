package amen.and.Confide.util;

import jakarta.validation.*;

import java.util.Set;

public class AIResponseValidator {

    private static final ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
    private static final Validator validator = factory.getValidator();

    public static <T> void validate(@Valid T object) {
        Set<ConstraintViolation<@Valid T>> violations = validator.validate(object);
        if (!violations.isEmpty()) {
            throw new IllegalArgumentException("Resposta da IA inválida: " + violations);
        }
    }
}
