package com.wysso.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@SpringBootApplication
@ServletComponentScan
public class WyssoServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(WyssoServerApplication.class, args);
	}
}
