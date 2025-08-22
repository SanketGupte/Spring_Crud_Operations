package com.youtube.crud.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI myCustomConfig(){
        return new OpenAPI()
                .info(
                        new Info().title("CRUD API")
                                .description("By Sanket")
                )
                .servers(List.of(new Server().url("http://localhost:9090").description("Local server"),
                        new Server().url("http://localhost:9090").description("Local server")));
    }
}
