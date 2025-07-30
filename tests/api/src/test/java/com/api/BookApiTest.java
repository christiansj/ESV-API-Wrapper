package com.api;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

import org.testng.annotations.Test;

import com.example.ConsoleLogger;

public class BookApiTest {
    private final String API_URL = System.getenv("API_URL");

    @Test
    public void BookEndpointShouldBeHealthy(){
        get(API_URL + "/book")
            .then()
            .statusCode(200);  
        ConsoleLogger.LogPassMessage("\"/book\" endpoint returns status code 200");
    }
}
