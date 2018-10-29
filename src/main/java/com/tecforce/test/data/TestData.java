package com.tecforce.test.data;

import com.tecforce.test.entity.City;
import com.tecforce.test.entity.Forecast;
import com.tecforce.test.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static java.time.temporal.ChronoUnit.DAYS;

@Component
public class TestData {
    @Autowired
    protected CityRepository cityRepository;

    @PostConstruct
    @Transactional
    public void initCityData() {
        List<Forecast> forecastList = new ArrayList<>();
        forecastList.add(new Forecast()
                .setCurrentTemp(-2)
                .setCurrentWind(7));
        forecastList.add(new Forecast()
                .setDate(LocalDate.now().plus(1, DAYS))
                .setCurrentTemp(-5)
                .setCurrentWind(5));

        cityRepository.save(new City("Samara", 2077746, 846).setForecastList(forecastList));
        cityRepository.save(new City("Moscow", 122265, 495));
        cityRepository.save(new City("St Petersburg", 2123260, 812));
    }

}
