package com.maxotics.digitiler;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class DigitilerApplication extends WebMvcConfigurerAdapter {

	public static void main(String[] args) {
		SpringApplication.run(DigitilerApplication.class, args);
	}

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
			registry.addViewController("/sample").setViewName("about/sample");
			registry.addViewController("/").setViewName("index");
			registry.addViewController("/study").setViewName("study");
	}

}
