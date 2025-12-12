package amen.and.Confide.service;

import amen.and.Confide.model.dto.ExamRequest;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;

@Service
public class ValidationService {
    public static void isValid(@Valid ExamRequest examRequest) {
        if (examRequest.sins() == null || examRequest.sins().isEmpty()) {
            throw new IllegalArgumentException("sins must not be empty");
        }

        examRequest.sins().forEach(sin -> {
            if (sin.getName() == null || sin.getName().isEmpty()) {
                throw new IllegalArgumentException("sin name must not be empty");
            }
        });
    }
}
