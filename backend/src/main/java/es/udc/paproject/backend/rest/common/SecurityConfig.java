package es.udc.paproject.backend.rest.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Autowired
	private JwtGenerator jwtGenerator;


	
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.cors().and().csrf().disable()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
			.addFilter(new JwtFilter(authenticationManager(), jwtGenerator))
			.authorizeRequests()
			.antMatchers(HttpMethod.POST, "/users/signUp").permitAll()
			.antMatchers(HttpMethod.POST, "/users/login").permitAll()
			.antMatchers(HttpMethod.POST, "/users/loginFromServiceToken").permitAll()
			.antMatchers(HttpMethod.GET, "/users/userList").permitAll()
			.antMatchers(HttpMethod.GET, "/quotes/**").authenticated()
			.antMatchers(HttpMethod.POST, "/quotes/**").authenticated()
			.antMatchers(HttpMethod.POST, "/quotes/create").authenticated()
			.antMatchers(HttpMethod.DELETE, "/quotes/delete/**").authenticated()

			// .antMatchers(HttpMethod.PUT, "/users/*").hasAnyRole("VIEWER", "TICKET_SELLER")
			// .antMatchers(HttpMethod.POST, "/users/*/changePassword").hasAnyRole("VIEWER", "TICKET_SELLER")
			// .antMatchers(HttpMethod.GET, "/catalog/billboard").permitAll()
			// .antMatchers(HttpMethod.GET, "/catalog/movies/*").permitAll()
			// .antMatchers(HttpMethod.GET, "/catalog/sessions/*").permitAll()
			// .antMatchers(HttpMethod.GET, "/buying/orders").hasRole("VIEWER")
			// .antMatchers(HttpMethod.POST, "/buying/buy/*").hasRole("VIEWER")
			// .antMatchers(HttpMethod.POST, "/buying/deliver").hasRole("TICKET_SELLER")
			.anyRequest().denyAll();
	}
	
	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		
		CorsConfiguration config = new CorsConfiguration();
	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		
		config.setAllowCredentials(true);
	    //config.setAllowedOriginPatterns(Arrays.asList("*"));
		config.addAllowedOrigin("http://localhost:3000");
		config.addAllowedOrigin("http://192.168.1.36:3000");
	    config.addAllowedHeader("*");
	    config.addAllowedMethod("*");
	
	    source.registerCorsConfiguration("/**", config);
		
	    
	    return source;
	    
	 }

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
			throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}


}