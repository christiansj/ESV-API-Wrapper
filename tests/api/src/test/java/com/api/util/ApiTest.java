package com.api.util;

import static io.restassured.RestAssured.given;

import org.apache.logging.log4j.Logger;

public class ApiTest {

    private static String formatAssertionMessage(AssertionError error){
        return error.getMessage()
            .replaceFirst("\\d expectation failed.", "")
            .trim();
    }


    private static void getStatusCodeTest(int statusCode, String url, Logger logger){
        try{
            logger.info(String.format("Sending GET request to \"%s\"", url));
            given()
                .baseUri(url)
            .when()
                .get()
            .then()
                .statusCode(statusCode);
        } catch(AssertionError error){
            logger.error(formatAssertionMessage(error));
            throw error;
        }
    }

    public static void getShouldReturn200(String url, Logger logger){
        getStatusCodeTest(200, url, logger);
    }

    public static void getShouldReturn400(String url, Logger logger){
        getStatusCodeTest(400, url, logger);
    }

    public static void getShouldReturn404(String url, Logger logger){
        getStatusCodeTest(404, url, logger);
    }
}
