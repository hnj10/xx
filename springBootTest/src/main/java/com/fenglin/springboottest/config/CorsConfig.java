package com.fenglin.springboottest.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

/**
 * 跨域配置。
 * <p>
 * 前端 vite dev server 在 5173，后端在 8081。虽然 vite.config.js 已配置 /api 代理，
 * 但保留 CORS 可以在直接用浏览器 / 其他端口调试接口时不被拦截。
 */
@Configuration
public class CorsConfig {

    @Bean
    public FilterRegistrationBean<CorsFilter> corsFilter() {
        CorsConfiguration config = new CorsConfiguration();
        // 使用 allowedOriginPattern 而不是 allowedOrigins，才能配合 allowCredentials 使用通配
        config.addAllowedOriginPattern("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
        bean.setOrder(FilterRegistrationBean.LOWEST_PRECEDENCE);
        return bean;
    }
}
