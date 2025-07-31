package com.api;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.annotations.Test;

public class BookApiTest {
    private final String API_URL = System.getenv("API_URL");
    private final Logger LOGGER = LogManager.getLogger("bookLogger");

    @Test
    public void bookEndpointHealthCheck() {
        LOGGER.info("Book Endpoint Health Check Test");
        given()
            .baseUri(API_URL + "/book")
        .when() 
            .get()
        .then() 
            .statusCode(200);
        LOGGER.info("\"/book\" endpoint returns status code 200");
    }
}
