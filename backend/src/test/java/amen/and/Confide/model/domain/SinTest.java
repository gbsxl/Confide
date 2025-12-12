package amen.and.Confide.model.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Sin Domain Model Tests")
class SinTest {

    @Test
    @DisplayName("Should create sin with all fields correctly")
    void shouldCreateSinWithAllFieldsCorrectly() {
        // Arrange & Act
        Sin sin = new Sin(
                "Impaciência",
                Category.IMPACIENCIA,
                "Diariamente",
                "Perco a paciência facilmente");

        // Assert
        assertThat(sin.getName()).isEqualTo("Impaciência");
        assertThat(sin.getCategory()).isEqualTo(Category.IMPACIENCIA);
        assertThat(sin.getFrequency()).isEqualTo("Diariamente");
        assertThat(sin.getDescription()).isEqualTo("Perco a paciência facilmente");
    }

    @Test
    @DisplayName("Should set subcategory from category automatically")
    void shouldSetSubcategoryFromCategoryAutomatically() {
        // Arrange & Act
        Sin sin = new Sin(
                "Impaciência",
                Category.IMPACIENCIA,
                "Diariamente",
                "Descrição");

        // Assert
        assertThat(sin.getSubcategory()).isEqualTo(Category.IMPACIENCIA.getSubcategory());
        assertThat(sin.getSubcategory()).isEqualTo(Subcategory.PECADOS_VENIAIS);
    }

    @Test
    @DisplayName("Should handle mortal sin category correctly")
    void shouldHandleMortalSinCategoryCorrectly() {
        // Arrange & Act
        Sin sin = new Sin(
                "Desonrar pais",
                Category.DESONRAR_PAI_MAE,
                "Uma vez",
                "Descrição");

        // Assert
        assertThat(sin.getCategory()).isEqualTo(Category.DESONRAR_PAI_MAE);
        assertThat(sin.getSubcategory()).isEqualTo(Subcategory.DEZ_MANDAMENTOS);
    }

    @Test
    @DisplayName("Should handle capital sin category correctly")
    void shouldHandleCapitalSinCategoryCorrectly() {
        // Arrange & Act
        Sin sin = new Sin(
                "Soberba",
                Category.SOBERBA,
                "Frequentemente",
                "Descrição");

        // Assert
        assertThat(sin.getCategory()).isEqualTo(Category.SOBERBA);
        assertThat(sin.getSubcategory()).isEqualTo(Subcategory.PECADOS_CAPITAIS);
    }
}
