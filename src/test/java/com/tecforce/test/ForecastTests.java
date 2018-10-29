package com.tecforce.test;

import com.tecforce.test.entity.Forecast;
import com.tecforce.test.mapper.ForecastMapper;
import com.tecforce.test.service.YahooService;
import org.json.JSONObject;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@TestPropertySource(locations = "classpath:application-test.properties")
public class ForecastTests {
    private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(SpringRunner.class);

    @Autowired
    protected YahooService yahooService;

    @Test
    public void testYahooMapper() {
        JSONObject jsonObject = new JSONObject("{\"query\":{\"created\":\"2018-10-29T05:08:10Z\",\"count\":1,\"lang\":\"en-US\",\"results\":{\"channel\":{\"image\":{\"width\":\"142\",\"link\":\"http://weather.yahoo.com\",\"title\":\"Yahoo! Weather\",\"url\":\"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif\",\"height\":\"18\"},\"item\":{\"condition\":{\"date\":\"Mon, 29 Oct 2018 08:00 AM SAMT\",\"temp\":\"40\",\"code\":\"30\",\"text\":\"Partly Cloudy\"}},\"location\":{\"country\":\"Russia\",\"city\":\"Samara\",\"region\":\" Samara Oblast\"},\"units\":{\"distance\":\"mi\",\"temperature\":\"F\",\"pressure\":\"in\",\"speed\":\"mph\"},\"wind\":{\"chill\":\"36\",\"speed\":\"10\",\"direction\":\"315\"}}}}}");
        ForecastMapper forecastMapper = ForecastMapper.INSTANCE;
        Forecast forecast = forecastMapper.getCityByJsonObject(jsonObject);
        LOG.debug(forecast.toString());
    }
}
