package com.api;

import static io.restassured.RestAssured.*;
import io.restassured.module.jsv.JsonSchemaValidator;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.annotations.Test;


public class BookApiTest {
    private final String API_URL = System.getenv("API_URL");
    private final Logger LOGGER = LogManager.getLogger("bookLogger");
    
    /**
     * GET request to "/book" returns status 200
     */
    @Test
    public void getAll200Check() {
        LOGGER.info("== TEST Book Endpoint 200 Check ==");
        given()
            .baseUri(API_URL + "/book")
        .when() 
            .get()
        .then() 
            .statusCode(200);
        LOGGER.info("PASS \"/book\" endpoint returns status code 200");
    }

    /**
     * Data returned from "/book" returns correct JSON schema
     */
    @Test
    public void validateGetAllSchema(){
        LOGGER.info("== TEST Get All \"/book\" Schema ==");
        given()
            .baseUri(API_URL + "/book")
        .when() 
            .get()
        .then()
            .assertThat()
            .body(JsonSchemaValidator.matchesJsonSchemaInClasspath("schemas/books.json"))
            .log().ifValidationFails();
        LOGGER.info("PASS Get All \"/book\" returns correct schema");
    }

    /**
     * GET request to "/book/:existingBookTitle" returns 200
     */
    @Test
    public void getExistingBook200Check(){
        LOGGER.info("== TEST Existing Book 200 Check ==");
        given()
            .baseUri(API_URL + "/book/Galatians")
        .when() 
            .get()
        .then() 
            .statusCode(200);
        LOGGER.info("PASS \"/book/Galatians\" endpoint returns status code 200");
    }

    /**
     * GET request to "/book/:nonexistingBookTitle" returns 404
     */
    @Test
    public void getNonExistingBook404Check(){
        LOGGER.info("== TEST Nonexisting Book 404 Check ==");
        given()
            .baseUri(API_URL + "/book/BadBook")
        .when() 
            .get()
        .then() 
            .statusCode(404)
            .assertThat()
            .body(JsonSchemaValidator.matchesJsonSchemaInClasspath("schemas/error-message.json"))
            .log().ifValidationFails();
        LOGGER.info("PASS \"/book/BadBook\" endpoint returns status code 404");
    }
}
