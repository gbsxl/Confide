package amen.and.Confide.configuration;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.ArrayList;
import java.util.List;

@ConfigurationProperties(prefix = "spring.cors")
@Setter
@Getter
public class CorsProperties {
    private List<String> allowedOrigins = new ArrayList<>();
}

