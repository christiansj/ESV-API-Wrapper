package com.api;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.annotations.Test;

import com.api.util.SchemaTest;
import com.api.util.StatusCodeTest;


public class PassageApiTest {
    private final String PASSAGE_URL = System.getenv("API_URL") + "/passage";
    private final Logger LOGGER = LogManager.getLogger("passageLogger");
    private final StatusCodeTest statusCodeTest = new StatusCodeTest(PASSAGE_URL, LOGGER);
    private final SchemaTest schemaTest = new SchemaTest(PASSAGE_URL, LOGGER);

    @Test
    public void shouldReturn200ForOneVerse(){
        LOGGER.info("== TEST Should Return 200 For One Verse ==");
        statusCodeTest.getShouldReturn200("/John%203:16");
        LOGGER.info("PASS One Verse Returns Status 200\n");
    }


    @Test
    public void shouldReturn200ForMultipleVerses(){
        LOGGER.info("== TEST Should Return 200 For Mulitple Verses ==");
        statusCodeTest.getShouldReturn200("/John%201:14-18");
        LOGGER.info("PASS Multiple Verses Returns Status 200\n");
    }


    @Test
    public void shouldReturn200ForOneChapter(){
        LOGGER.info("== TEST Should Return 200 For One Chapter ==");
        statusCodeTest.getShouldReturn200("/John%203");
        LOGGER.info("PASS One Chapter Returns Status 200\n");
    }


    @Test
    public void shouldReturn404ForNonexistingBook(){
        LOGGER.info("== TEST Should Return 404 For Nonexisting Book ==");
        statusCodeTest.getShouldReturn404("/BadBook%204:4");
        statusCodeTest.getShouldReturn404("/12%204:4");
        LOGGER.info("PASS Nonexisting Book Returns Status 404\n");
    }
    
    @Test
    public void shouldReturn400ForAlphabeticVerse(){
        LOGGER.info("== TEST Should Return 400 For Missing Verse 2 ==");
        statusCodeTest.getShouldReturn400("/John%20abc:");
        statusCodeTest.getShouldReturn400("/John%20abc:def");
        LOGGER.info("PASS Out of Range Chapter Returns Status 400\n");
    }

    @Test
    public void shouldReturn400ForMissingVerse2(){
        LOGGER.info("== TEST Should Return 400 For Missing Verse 2 ==");
        statusCodeTest.getShouldReturn400("/John%2011:");
        LOGGER.info("PASS Out of Range Chapter Returns Status 400\n");
    }


    @Test
    public void shouldReturn400ForChapterOutOfRange(){
        LOGGER.info("== TEST Should Return 400 For Chapter Out Of Range ==");
        statusCodeTest.getShouldReturn400("/John%2060");
        statusCodeTest.getShouldReturn400("/John%2033:4");
        LOGGER.info("PASS Out of Range Chapter Returns Status 400\n");
    }


    @Test
    public void shouldReturn400ForVerseOutOfRange(){
        LOGGER.info("== TEST Should Return 400 For Verse Out Of Range ==");
        statusCodeTest.getShouldReturn400("/John%205:99");
        LOGGER.info("PASS Out of Range Verse Returns Status 400\n");
    }

    
    @Test
    public void shouldReturn400ForInvalidVerseRange(){
        LOGGER.info("== TEST Should Return 400 For Invalid Verse Range ==");
        statusCodeTest.getShouldReturn400("/John%207:4-2");
        LOGGER.info("PASS Invalid Verse Range Returns Status 400\n");
    }

    
    @Test 
    public void shouldReturn400ForNegativeVerseStart(){
        LOGGER.info("== TEST Should Return 400 For Negative Verse Start ==");
        statusCodeTest.getShouldReturn400(("/John%201:-1"));
        LOGGER.info("PASS Negative Verse Start Returns Status 400\n");
    }

    @Test
    public void shouldReturnValidSchema(){
        LOGGER.info("== TEST Should Return Valid Schema for Passage ==");
        schemaTest.getReturnsValidSchema("/John%201:1", "schemas/passage.json");
        LOGGER.info("PASS Get Passage \"/passage\" returns correct schema");
    }
}
