package amen.and.Confide.model.domain;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Category Enum Tests")
class CategoryTest {

    @Test
    @DisplayName("Should have correct subcategory for capital sins")
    void shouldHaveCorrectSubcategoryForCapitalSins() {
        // Assert
        assertThat(Category.SOBERBA.getSubcategory()).isEqualTo(Subcategory.PECADOS_CAPITAIS);
        assertThat(Category.AVAREZA.getSubcategory()).isEqualTo(Subcategory.PECADOS_CAPITAIS);
        assertThat(Category.LUXURIA.getSubcategory()).isEqualTo(Subcategory.PECADOS_CAPITAIS);
        assertThat(Category.IRA.getSubcategory()).isEqualTo(Subcategory.PECADOS_CAPITAIS);
        assertThat(Category.GULA.getSubcategory()).isEqualTo(Subcategory.PECADOS_CAPITAIS);
        assertThat(Category.INVEJA.getSubcategory()).isEqualTo(Subcategory.PECADOS_CAPITAIS);
        assertThat(Category.PREGUICA.getSubcategory()).isEqualTo(Subcategory.PECADOS_CAPITAIS);
    }

    @Test
    @DisplayName("Should have correct subcategory for ten commandments")
    void shouldHaveCorrectSubcategoryForTenCommandments() {
        // Assert
        assertThat(Category.AMAR_A_DEUS_SOBRE_TODAS_AS_COISAS.getSubcategory())
                .isEqualTo(Subcategory.DEZ_MANDAMENTOS);
        assertThat(Category.TOMAR_NOME_DE_DEUS_EM_VAO.getSubcategory())
                .isEqualTo(Subcategory.DEZ_MANDAMENTOS);
        assertThat(Category.NAO_GUARDAR_DOMINGO.getSubcategory())
                .isEqualTo(Subcategory.DEZ_MANDAMENTOS);
        assertThat(Category.DESONRAR_PAI_MAE.getSubcategory())
                .isEqualTo(Subcategory.DEZ_MANDAMENTOS);
        assertThat(Category.NAO_MATAR.getSubcategory())
                .isEqualTo(Subcategory.DEZ_MANDAMENTOS);
        assertThat(Category.NAO_COMETER_ADULTERIO.getSubcategory())
                .isEqualTo(Subcategory.DEZ_MANDAMENTOS);
        assertThat(Category.NAO_ROUBAR.getSubcategory())
                .isEqualTo(Subcategory.DEZ_MANDAMENTOS);
        assertThat(Category.NAO_LEVANTAR_FALSO_TESTEMUNHO.getSubcategory())
                .isEqualTo(Subcategory.DEZ_MANDAMENTOS);
        assertThat(Category.NAO_COBICAR_MULHER_DO_PROXIMO.getSubcategory())
                .isEqualTo(Subcategory.DEZ_MANDAMENTOS);
        assertThat(Category.NAO_COBICAR_BENS_DO_PROXIMO.getSubcategory())
                .isEqualTo(Subcategory.DEZ_MANDAMENTOS);
    }

    @Test
    @DisplayName("Should have correct subcategory for venial sins")
    void shouldHaveCorrectSubcategoryForVenialSins() {
        // Assert
        assertThat(Category.IMPRUDENCIA.getSubcategory()).isEqualTo(Subcategory.PECADOS_VENIAIS);
        assertThat(Category.IMPACIENCIA.getSubcategory()).isEqualTo(Subcategory.PECADOS_VENIAIS);
        assertThat(Category.FOFOCA.getSubcategory()).isEqualTo(Subcategory.PECADOS_VENIAIS);
        assertThat(Category.PEQUENA_MENTIRA.getSubcategory()).isEqualTo(Subcategory.PECADOS_VENIAIS);
        assertThat(Category.PREGUICA_ESPIRITUAL.getSubcategory()).isEqualTo(Subcategory.PECADOS_VENIAIS);
    }

    @Test
    @DisplayName("Should have SEM_CATEGORIA_EXATA with correct subcategory")
    void shouldHaveSemCategoriaExataWithCorrectSubcategory() {
        // Assert
        assertThat(Category.SEM_CATEGORIA_EXATA.getSubcategory())
                .isEqualTo(Subcategory.SEM_CATEGORIA_EXATA);
    }

    @Test
    @DisplayName("Should have all categories defined")
    void shouldHaveAllCategoriesDefined() {
        // Assert - verify enum has expected number of values
        Category[] categories = Category.values();
        assertThat(categories).hasSizeGreaterThan(30); // At least 7 capital + 10 commandments + 20 venial + 1 sem
                                                       // categoria
    }
}
