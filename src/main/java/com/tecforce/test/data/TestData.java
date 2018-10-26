package com.tecforce.test.data;

import com.tecforce.test.entity.City;
import com.tecforce.test.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class TestData {
    @Autowired
    protected CityRepository cityRepository;

    @PostConstruct
    public void initCityData() {
        cityRepository.save(new City("Samara", 2077746, 846));
        cityRepository.save(new City("Moscow", 122265, 495));
        cityRepository.save(new City("St Petersburg", 2123260, 812));
    }

}
