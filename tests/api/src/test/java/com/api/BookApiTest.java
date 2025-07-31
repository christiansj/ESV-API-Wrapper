package com.api;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.annotations.Test;

import io.restassured.module.jsv.JsonSchemaValidator;

public class BookApiTest {
    private final String API_URL = System.getenv("API_URL");
    private final Logger LOGGER = LogManager.getLogger("bookLogger");

    @Test
    public void bookEndpointHealthCheck() {
        LOGGER.info("== TEST Book Endpoint Health Check ==");
        given()
            .baseUri(API_URL + "/book")
        .when() 
            .get()
        .then() 
            .statusCode(200);
        LOGGER.info("\"/book\" endpoint returns status code 200");
    }

    @Test
    public void bookGetAllSchema(){
        LOGGER.info("== TEST Get All \"/book\" Schema ==");
        given()
            .baseUri(API_URL + "/book")
        .when() 
            .get()
        .then()
            .assertThat()
            .body(JsonSchemaValidator.matchesJsonSchemaInClasspath("schemas/books.json"))
            .log().ifValidationFails();
        LOGGER.info("Get All \"/book\" returns correct schema");
    }
}
