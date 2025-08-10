package com.youtube.crud.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;

import java.time.Duration;

//This is optional but recommended for configuring Redis cache in a Spring Boot application.
// It allows you to customize cache settings such as TTL (Time To Live) and other cache
// properties. The configuration class defines a bean for RedisCacheManager, which is used
// to manage the caching behavior in the application. The cache manager is configured to
// use a default cache configuration with a TTL of 30 minutes and to disable caching of null
// values. This setup helps in efficiently managing cache entries and improving application performance.
@Configuration
public class CacheConfig {

    @Bean
    public RedisCacheManager cacheManager(RedisConnectionFactory connectionFactory){
        RedisCacheConfiguration cacheConfiguration = RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofMinutes(30))
                .disableCachingNullValues();
        return RedisCacheManager.builder(connectionFactory)
                .cacheDefaults(cacheConfiguration)
                .transactionAware()
                .build();
    }
}
