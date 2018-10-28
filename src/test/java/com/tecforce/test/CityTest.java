package com.tecforce.test;

import com.tecforce.test.service.ForecastInformation;
import com.tecforce.test.repository.CityRepository;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

@RunWith(SpringRunner.class)
@SpringBootTest
@TestPropertySource(locations = "classpath:application-test.properties")
public class CityTest extends TestApplicationTests {
    private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(CityTest.class);
    @Autowired
    protected CityRepository cityRepository;
    @Autowired
    protected ForecastInformation forecastInformation;

    @Test
    @Transactional
    public void testCityRepository() {
        cityRepository.findAll().forEach(tournament -> LOG.debug(tournament.toString()));
    }

    @Test
    public void testYahooRequest() throws JSONException {
        JSONObject jsonObject = forecastInformation.getCurrentForecastByCityWoeid(2077746);
        LOG.debug(jsonObject.toString());
    }

}
