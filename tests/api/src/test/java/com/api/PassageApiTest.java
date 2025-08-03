package com.api;

import static io.restassured.RestAssured.*;
import io.restassured.module.jsv.JsonSchemaValidator;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.annotations.Test;


public class PassageApiTest {
    private final String PASSAGE_URL = System.getenv("API_URL") + "/passage";
    private final Logger LOGGER = LogManager.getLogger("passageLogger");

    @Test
    public void shouldReturn200ForOneVerse(){
        LOGGER.info("== TEST Should Return 200 For One Verse ==");
        LOGGER.info("Sending GET request to \"/passage/John 3:16\"");
        given()
            .baseUri(PASSAGE_URL + "/John 3:16")
        .when()
            .get()
        .then()
            .statusCode(200);
        LOGGER.info("== PASS One Verse Returns Status 200 ==");
    }


    @Test
    public void shouldReturn200ForMultipleVerses(){
        LOGGER.info("== TEST Should Return 200 For Mulitple Verses ==");
        LOGGER.info("Sending GET request to \"/passage/John 1:14-18\"");
        given()
            .baseUri(PASSAGE_URL + "/John 1:14-18")
        .when()
            .get()
        .then()
            .statusCode(200);
        LOGGER.info("== PASS Multiple Verses Returns Status 200 ==");
    }


    @Test
    public void shouldReturn404ForNonexistingBook(){
        LOGGER.info("== TEST Should Return 404 For Nonexisting Book ==");
        LOGGER.info("Sending GET request to \"/passage/BadBook 4:4\"");
        given()
            .baseUri(PASSAGE_URL + "/BadBook 4:4")
        .when()
            .get()
        .then()
            .statusCode(404);
        LOGGER.info("== PASS Nonexisting Book Returns Status 404 ==");
    }

    
    @Test
    public void shouldReturn400ForChapterOutOfRange(){
        LOGGER.info("== TEST Should Return 400 For Chapter Out Of Range ==");
        LOGGER.info("Sending GET request to \"/passage/John 33:4\"");
        given()
            .baseUri(PASSAGE_URL + "/John 33:4")
        .when()
            .get()
        .then()
            .statusCode(400);
        LOGGER.info("== PASS Out of Range Chapter Returns Status 400 ==");
    }


    @Test
    public void shouldReturn400ForVerseOutOfRange(){
        LOGGER.info("== TEST Should Return 400 For Verse Out Of Range ==");
        LOGGER.info("Sending GET request to \"/passage/John 33:4\"");
        given()
            .baseUri(PASSAGE_URL + "/John 5:100")
        .when()
            .get()
        .then()
            .statusCode(400);
        LOGGER.info("== PASS Out of Range Verse Returns Status 400 ==");
    }

    @Test
    public void shouldReturn400ForInvalidVerseRange(){
        LOGGER.info("== TEST Should Return 400 For Invalid Verse Range ==");
        LOGGER.info("Sending GET request to \"/passage/John 33:4\"");
        given()
            .baseUri(PASSAGE_URL + "/John 7:4-2")
        .when()
            .get()
        .then()
            .statusCode(400);
        LOGGER.info("== PASS Invalid Verse Range Returns Status 400 ==");
    }
}
