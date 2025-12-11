package com.api;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.annotations.Test;

import com.api.util.SchemaTest;
import com.api.util.StatusCodeTest;

public class PingApiTest {
    private final String PING_URL = System.getenv("API_URL") + "/ping";
    private final Logger LOGGER = LogManager.getLogger("pingLogger");
    private final StatusCodeTest statusCodeTest = new StatusCodeTest(PING_URL, LOGGER);

    /**
     * GET request to "/ping" returns status 200
     */
    @Test
    public void shouldReturn200ForAllBooks() {
        LOGGER.info("== TEST Should Return 200 ==");
        statusCodeTest.getShouldReturn200("");
        LOGGER.info("PASS \"/ping\" endpoint returns status code 200");
    }
}