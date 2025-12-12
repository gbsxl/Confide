package amen.and.Confide.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public class JsonUtils {
    private static final ObjectMapper mapper = new ObjectMapper();

    public static <T> T fromJson(@NotEmpty @NotNull @NotBlank @Valid String json, @Valid Class<T> clazz) {
        try {
            return mapper.readValue(json, clazz);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao converter JSON para objeto: " + e.getMessage(), e);
        }
    }
}
