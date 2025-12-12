package amen.and.Confide.util;

import amen.and.Confide.model.domain.Category;
import amen.and.Confide.model.domain.Exam;
import amen.and.Confide.model.domain.Sin;
import amen.and.Confide.model.dto.AIResponseDTO;
import amen.and.Confide.model.dto.ExamRequest;

import java.util.ArrayList;
import java.util.List;

/**
 * Utility class for building test data objects.
 * Provides builder methods for creating valid and invalid test data.
 */
public class TestDataBuilder {

    public static ExamRequest validExamRequest() {
        List<Sin> sins = new ArrayList<>();
        sins.add(new Sin(
                "Falta de paciência com familiares",
                Category.IMPACIENCIA,
                "Diariamente",
                "Perco a paciência facilmente com meus pais"));
        sins.add(new Sin(
                "Mentiras pequenas",
                Category.PEQUENA_MENTIRA,
                "Às vezes",
                "Minto para evitar conflitos"));
        sins.add(new Sin(
                "Desonrei meus pais",
                Category.DESONRAR_PAI_MAE,
                "Uma vez",
                "Gritei com minha mãe e a desrespeitei gravemente"));

        return new ExamRequest(30, sins);
    }

    public static ExamRequest examRequestWithOnlyVenialSins() {
        List<Sin> sins = new ArrayList<>();
        sins.add(new Sin(
                "Impaciência",
                Category.IMPACIENCIA,
                "Frequentemente",
                "Sou impaciente no trânsito"));
        sins.add(new Sin(
                "Fofoca",
                Category.FOFOCA,
                "Raramente",
                "Comentei sobre a vida alheia"));

        return new ExamRequest(15, sins);
    }

    public static ExamRequest examRequestWithOnlyMortalSins() {
        List<Sin> sins = new ArrayList<>();
        sins.add(new Sin(
                "Adultério",
                Category.NAO_COMETER_ADULTERIO,
                "Uma vez",
                "Traí meu cônjuge"));
        sins.add(new Sin(
                "Roubo",
                Category.NAO_ROUBAR,
                "Duas vezes",
                "Roubei dinheiro do trabalho"));

        return new ExamRequest(90, sins);
    }

    public static ExamRequest examRequestWithEmptySins() {
        return new ExamRequest(10, new ArrayList<>());
    }

    public static ExamRequest examRequestWithNullSins() {
        return new ExamRequest(10, null);
    }

    public static Exam validExam() {
        List<Sin> sins = new ArrayList<>();
        sins.add(new Sin(
                "Impaciência",
                Category.IMPACIENCIA,
                "Diariamente",
                "Perco a paciência facilmente"));
        sins.add(new Sin(
                "Desonrei meus pais",
                Category.DESONRAR_PAI_MAE,
                "Uma vez",
                "Gritei com minha mãe"));

        return new Exam(30, sins);
    }

    public static Exam examWithOnlyVenialSins() {
        List<Sin> sins = new ArrayList<>();
        sins.add(new Sin(
                "Impaciência",
                Category.IMPACIENCIA,
                "Frequentemente",
                "Sou impaciente"));
        sins.add(new Sin(
                "Fofoca",
                Category.FOFOCA,
                "Raramente",
                "Fiz fofoca"));
        sins.add(new Sin(
                "Preguiça espiritual",
                Category.PREGUICA_ESPIRITUAL,
                "Às vezes",
                "Não rezo o suficiente"));

        return new Exam(15, sins);
    }

    public static Exam examWithOnlyMortalSins() {
        List<Sin> sins = new ArrayList<>();
        sins.add(new Sin(
                "Adultério",
                Category.NAO_COMETER_ADULTERIO,
                "Uma vez",
                "Traí meu cônjuge"));
        sins.add(new Sin(
                "Blasfêmia",
                Category.TOMAR_NOME_DE_DEUS_EM_VAO,
                "Várias vezes",
                "Blasfemei contra Deus"));

        return new Exam(60, sins);
    }

    public static Exam examWithMixedSins() {
        List<Sin> sins = new ArrayList<>();
        sins.add(new Sin(
                "Impaciência",
                Category.IMPACIENCIA,
                "Diariamente",
                "Perco a paciência"));
        sins.add(new Sin(
                "Fofoca",
                Category.FOFOCA,
                "Às vezes",
                "Falo mal dos outros"));
        sins.add(new Sin(
                "Roubo",
                Category.NAO_ROUBAR,
                "Uma vez",
                "Roubei algo"));
        sins.add(new Sin(
                "Desonrei meus pais",
                Category.DESONRAR_PAI_MAE,
                "Uma vez",
                "Desrespeitei meus pais"));

        return new Exam(45, sins);
    }

    public static AIResponseDTO validAIResponse() {
        return new AIResponseDTO(
                List.of("Desonrar pai e mãe", "Roubo"),
                List.of("Impaciência", "Fofoca", "Preguiça espiritual"),
                "Padre, eu pequei contra o quarto mandamento desonrando meus pais, cometi roubo, fui impaciente, fiz fofoca e tive preguiça espiritual.",
                "Meu Deus, eu me arrependo sinceramente de todos os meus pecados. Pequei contra Vós que sois tão bom e digno de ser amado. Com a ajuda da Vossa graça, proponho firmemente não mais pecar e fugir das ocasiões de pecado. Senhor, tende piedade de mim.",
                List.of(
                        "Dedicar 15 minutos diários à oração e leitura da Bíblia",
                        "Pedir perdão aos meus pais e demonstrar amor através de ações concretas",
                        "Praticar a paciência contando até 10 antes de reagir em situações difíceis"),
                List.of(
                        "A confissão é um sacramento de cura e reconciliação. Deus sempre acolhe o coração arrependido.",
                        "Procure confessar-se regularmente, pelo menos uma vez por mês, para fortalecer sua vida espiritual."));
    }

    public static AIResponseDTO aiResponseWithOnlyVenialSins() {
        return new AIResponseDTO(
                List.of(),
                List.of("Impaciência", "Fofoca", "Desatenção na oração"),
                "Padre, fui impaciente, fiz fofoca e tive desatenção durante a oração.",
                "Senhor, reconheço minhas falhas e peço perdão. Ajuda-me a crescer em paciência e caridade.",
                List.of("Praticar a escuta ativa", "Evitar conversas que levem à fofoca"),
                List.of("Continue se esforçando. Pequenos passos levam a grandes mudanças."));
    }

    public static AIResponseDTO aiResponseWithOnlyMortalSins() {
        return new AIResponseDTO(
                List.of("Adultério", "Blasfêmia", "Assassinato"),
                List.of(),
                "Padre, cometi adultério, blasfemei contra Deus e tirei uma vida.",
                "Meu Deus, pequei gravemente contra Vós. Arrependo-me profundamente e peço Vossa misericórdia infinita.",
                List.of(
                        "Buscar acompanhamento espiritual regular",
                        "Fazer reparação pelos danos causados",
                        "Afastar-se completamente das ocasiões de pecado"),
                List.of(
                        "Procure confessar-se imediatamente. Pecados graves exigem arrependimento urgente.",
                        "Considere buscar direção espiritual com um sacerdote de confiança."));
    }

    public static String validAIResponseJson() {
        return """
                {
                  "graveSins": ["Desonrar pai e mãe"],
                  "venialSins": ["Impaciência", "Pequena mentira"],
                  "confessionTalk": "Padre, desonrei meus pais, fui impaciente e disse pequenas mentiras.",
                  "actOfContrition": "Meu Deus, eu me arrependo de todos os meus pecados.",
                  "commitments": ["Orar diariamente", "Honrar meus pais"],
                  "pastoralNotes": ["Deus é misericordioso."]
                }
                """;
    }

    public static String invalidAIResponseJson() {
        return """
                {
                  "graveSins": [],
                  "venialSins": [],
                  "invalid": "missing required fields"
                }
                """;
    }

    public static String malformedJson() {
        return "{ invalid json without closing brace";
    }
}
