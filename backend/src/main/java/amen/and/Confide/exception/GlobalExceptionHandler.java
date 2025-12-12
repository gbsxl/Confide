package amen.and.Confide.exception;

import amen.and.Confide.model.dto.ApiResponse;
import amen.and.Confide.model.dto.ErrorDetails;
import amen.and.Confide.model.dto.ValidationError;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.ConstraintViolationException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {
    //erros de bean validation
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<ErrorDetails>> handleValidationErrors(MethodArgumentNotValidException exception, HttpServletRequest request){
        log.warn("ERROS DE VALIDAÇÃO: {}", exception.getBindingResult().getErrorCount());
        List<ValidationError> validationErrors = exception.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(fieldError -> ValidationError.builder()
                        .field(fieldError.getField())
                        .message(fieldError.getDefaultMessage())
                        .rejectedValue(fieldError.getRejectedValue())
                        .build())
                .toList();

        ErrorDetails errorDetails = ErrorDetails.builder()
                .code("VALIDATION_ERROR")
                .detail("Errros de validação nos campos enviados")
                .validationErrors(validationErrors)
                .path(request.getRequestURI())
                .build();

        ApiResponse<ErrorDetails> response = ApiResponse.error(
                "Dados inválidos",
                errorDetails
        );

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(response);
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<ApiResponse<ErrorDetails>> handleConstraintViolation(ConstraintViolationException ex, HttpServletRequest request) {

        log.warn("Violação de constraints: {}", ex.getMessage());

        List<ValidationError> validationErrors = ex.getConstraintViolations()
                .stream()
                .map(violation -> ValidationError.builder()
                        .field(getFieldName(violation))
                        .message(violation.getMessage())
                        .rejectedValue(violation.getInvalidValue())
                        .build())
                .collect(Collectors.toList());

        ErrorDetails errorDetails = ErrorDetails.builder()
                .code("CONSTRAINT_VIOLATION")
                .detail("Violação de constraints de validação")
                .validationErrors(validationErrors)
                .path(request.getRequestURI())
                .build();

        ApiResponse<ErrorDetails> response = ApiResponse.error(
                "Dados inválidos",
                errorDetails
        );

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(response);
    }
    private String getFieldName(ConstraintViolation<?> violation) {
        String propertyPath = violation.getPropertyPath().toString();
        String[] parts = propertyPath.split("\\.");
        return parts[parts.length - 1];
    }

    //exceptions genericas
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiResponse<ErrorDetails>> handleGenericException(Exception ex, HttpServletRequest request) {

        log.error("Erro não tratado: ", ex);

        ErrorDetails errorDetails = ErrorDetails.builder()
                .code("INTERNAL_ERROR")
                .detail("Erro interno no servidor")
                .path(request.getRequestURI())
                .build();

        log.error("Detalhes do erro: {}", errorDetails);

        ApiResponse<ErrorDetails> response = ApiResponse.error(
                "Erro interno no servidor",
                errorDetails
        );

        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(response);
    }
}
