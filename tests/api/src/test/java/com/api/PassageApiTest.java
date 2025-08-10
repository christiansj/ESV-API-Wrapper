package com.api;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.testng.annotations.Test;

import com.api.util.StatusCodeTest;


public class PassageApiTest {
    private final String PASSAGE_URL = System.getenv("API_URL") + "/passage";
    private final Logger LOGGER = LogManager.getLogger("passageLogger");

    @Test
    public void shouldReturn200ForOneVerse(){
        LOGGER.info("== TEST Should Return 200 For One Verse ==");
        StatusCodeTest.getShouldReturn200(PASSAGE_URL + "/John%203:16", LOGGER);
        LOGGER.info("PASS One Verse Returns Status 200");
    }


    @Test
    public void shouldReturn200ForMultipleVerses(){
        LOGGER.info("== TEST Should Return 200 For Mulitple Verses ==");
        StatusCodeTest.getShouldReturn200(PASSAGE_URL + "/John%201:14-18", LOGGER);
        LOGGER.info("PASS Multiple Verses Returns Status 200");
    }


    @Test
    public void shouldReturn404ForNonexistingBook(){
        LOGGER.info("== TEST Should Return 404 For Nonexisting Book ==");
        StatusCodeTest.getShouldReturn404(PASSAGE_URL + "/BadBook%204:4", LOGGER);
        LOGGER.info("PASS Nonexisting Book Returns Status 404");
    }

    
    @Test
    public void shouldReturn400ForChapterOutOfRange(){
        LOGGER.info("== TEST Should Return 400 For Chapter Out Of Range ==");
        StatusCodeTest.getShouldReturn400(PASSAGE_URL + "/John%2033:4", LOGGER);
        LOGGER.info("PASS Out of Range Chapter Returns Status 400");
    }


    @Test
    public void shouldReturn400ForVerseOutOfRange(){
        LOGGER.info("== TEST Should Return 400 For Verse Out Of Range ==");
        StatusCodeTest.getShouldReturn400(PASSAGE_URL + "/John%205:99", LOGGER);
        LOGGER.info("PASS Out of Range Verse Returns Status 400");
    }

    @Test
    public void shouldReturn400ForInvalidVerseRange(){
        LOGGER.info("== TEST Should Return 400 For Invalid Verse Range ==");
        StatusCodeTest.getShouldReturn400(PASSAGE_URL + "/John%207:4-2", LOGGER);
        LOGGER.info("PASS Invalid Verse Range Returns Status 400");
    }
}
