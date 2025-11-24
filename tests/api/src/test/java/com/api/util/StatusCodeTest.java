package com.api.util;

import static io.restassured.RestAssured.given;

import org.apache.logging.log4j.Logger;

public class StatusCodeTest {

    private String baseUrl;
    private Logger logger;

    
    public StatusCodeTest(String baseUrl, Logger logger){
        this.baseUrl= baseUrl;
        this.logger = logger;
    }


    private String formatAssertionMessage(AssertionError error){
        return error.getMessage()
            .replaceFirst("\\d expectation failed.", "")
            .trim();
    }

    private void getStatusCodeTest(int statusCode, String url){
        try{
            final String logUrl = url.replaceAll("%20", " ");
            logger.info(String.format("Sending GET request to \"%s\"", 
                    baseUrl + logUrl));
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
