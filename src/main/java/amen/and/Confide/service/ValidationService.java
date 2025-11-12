package amen.and.Confide.service;

import amen.and.Confide.model.dto.ExamRequest;
import org.springframework.stereotype.Service;

@Service
public class ValidationService {
    public static Boolean isValid(ExamRequest examRequest){
        //validar campos obrigatórios preenchidos,
        //verifica se tem pelo menos um pecado
        return true;
    }
}
