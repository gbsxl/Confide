package amen.and.Confide.util;

import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.dto.ExamRequest;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.validation.annotation.Validated;

@Mapper
public interface ExamMapper {
    ExamMapper INSTANCE = Mappers.getMapper(ExamMapper.class);

    Exam toExam(ExamRequest examRequest);
    ExamRequest toExamRequest(Exam exam);

}
