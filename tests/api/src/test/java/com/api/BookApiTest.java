package com.api;

import static io.restassured.RestAssured.*;
import io.restassured.module.jsv.JsonSchemaValidator;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.annotations.Test;

import com.api.util.StatusCodeTest;


public class BookApiTest {
    private final String BOOK_URL = System.getenv("API_URL") + "/book";
    private final Logger LOGGER = LogManager.getLogger("bookLogger");
    private final StatusCodeTest statusCodeTest = new StatusCodeTest(BOOK_URL, LOGGER);
    
    
    /**
     * GET request to "/book" returns status 200
     */
    @Test
    public void shouldReturn200ForAllBooks() {
        LOGGER.info("== TEST Should Return 200 For All Books ==");
        statusCodeTest.getShouldReturn200("");
        LOGGER.info("PASS \"/book\" endpoint returns status code 200");
    }

    /**
     * Data returned from "/book" returns correct JSON schema
     */
    @Test
    public void shouldReturnValidSchemaForAllBooks(){
        LOGGER.info("== TEST Should REturn Valid Schema For All Books ==");
        given()
            .baseUri(BOOK_URL)
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
    public void shouldReturn200ForExistingBook(){
        LOGGER.info("== TEST Should Return 200 For Existing Book ==");
        statusCodeTest.getShouldReturn200("/Galatians");
        LOGGER.info("PASS \"/book/Galatians\" endpoint returns status code 200");
    }

    /**
     * GET request to "/book/:nonexistingBookTitle" returns 404
     */
    @Test
    public void shouldReturn404ForNonexistingBook(){
        LOGGER.info("== TEST Should REturn 404 FOr Nonexisting Book ==");
        statusCodeTest.getShouldReturn404("/BadBook");
        LOGGER.info("PASS \"/book/BadBook\" endpoint returns status code 404");
    }
}
