package com.api.util;

import static io.restassured.RestAssured.given;

import org.apache.logging.log4j.Logger;

public class StatusCodeTest {

    private static String baseUrl;
    private static Logger logger;

    public StatusCodeTest(String baseUrl, Logger logger){
        StatusCodeTest.baseUrl= baseUrl;
        StatusCodeTest.logger = logger;
    }

    private String formatAssertionMessage(AssertionError error){
        return error.getMessage()
            .replaceFirst("\\d expectation failed.", "")
            .trim();
    }


    private void getStatusCodeTest(int statusCode, String url){
        try{
            logger.info(String.format("Sending GET request to \"%s\"", 
                    baseUrl + url));
            given()
                .baseUri(baseUrl + url)
            .when()
                .get()
            .then()
                .statusCode(statusCode);
        } catch(AssertionError error){
            logger.error(formatAssertionMessage(error));
            throw error;
        }
    }

    public void getShouldReturn200(String url){
        getStatusCodeTest(200, url);
    }

    public void getShouldReturn400(String url){
        getStatusCodeTest(400, url);
    }

    public void getShouldReturn404(String url){
        getStatusCodeTest(404, url);
    }
}
