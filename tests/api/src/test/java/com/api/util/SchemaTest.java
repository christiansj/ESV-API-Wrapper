package com.api.util;

import static io.restassured.RestAssured.given;

import org.apache.logging.log4j.Logger;

import io.restassured.module.jsv.JsonSchemaValidator;

public class SchemaTest {
    private String baseUrl;
    private Logger logger;

    public SchemaTest(String baseUrl, Logger logger){
        this.baseUrl = baseUrl;
        this.logger = logger;
    }

    public void getReturnsValidSchema(String url, String schemaFilePath){
        logger.info(String.format("Sending GET request to \"%s\"", 
                    baseUrl + url));
        given()
            .baseUri(baseUrl + url)
        .when() 
            .get()
        .then()
            .assertThat()
            .body(JsonSchemaValidator.matchesJsonSchemaInClasspath(schemaFilePath))
            .log().ifValidationFails();
    }
}
