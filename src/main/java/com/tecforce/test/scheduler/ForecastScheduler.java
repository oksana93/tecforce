package com.tecforce.test.scheduler;

import com.tecforce.test.entity.City;
import com.tecforce.test.entity.Forecast;
import com.tecforce.test.service.CityService;
import com.tecforce.test.service.ForecastService;
import com.tecforce.test.service.YahooService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ForecastScheduler {
    @Autowired
    protected YahooService yahooService;
    @Autowired
    protected CityService cityService;
    @Autowired
    protected ForecastService forecastService;

    @Scheduled(cron = "* * */12 * * *")
    public void updateDatabase() {
        List<City> cityList = cityService.getAllCity();
        if (cityList != null)
            cityList.forEach(city -> {
                Forecast forecast = yahooService.getCurrentForecastByCityWoeid(city.getWoeid());
                forecastService.updateCurrentDate(forecast, city);
            });
    }
}
