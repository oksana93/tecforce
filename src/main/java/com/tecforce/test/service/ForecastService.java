package com.tecforce.test.service;

import com.tecforce.test.dto.ForecastDto;
import com.tecforce.test.entity.City;
import com.tecforce.test.entity.Forecast;
import com.tecforce.test.mapper.ForecastMapper;
import com.tecforce.test.repository.ForeсastRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class ForecastService {
    @Autowired
    protected ForeсastRepository foreсastRepository;

    @Transactional
    public ForecastDto getCurrentForecastDtoByCityId(UUID cityId) {
        return ForecastMapper.INSTANCE.getForecastJpaToDto(
                foreсastRepository.getForecastByCityIdAndCurrentDate(cityId));
    }

    @Transactional
    public List<ForecastDto> getForecastListToPreviousPeriodByCityId(UUID cityId) {
        return ForecastMapper.INSTANCE.getForecastListJpaToDto(
                foreсastRepository.getAllForecastToPreviousPeriodByCityId(cityId));
    }

    @Transactional
    public void updateCurrentDate(Forecast forecast, City city) {
        if (forecast != null) {
            Forecast currentForecast = foreсastRepository.getForecastByCityIdAndCurrentDate(city.getId());
            if (currentForecast != null)
                updateExistForecast(currentForecast, forecast);
            else
                insertForecast(forecast, city);
        }
    }

    protected void updateExistForecast(Forecast currentForecast, Forecast forecast) {
        Integer currentTemp = forecast.getCurrentTemp();
        Integer currentWind = forecast.getCurrentWind();
        currentForecast.setCurrentTemp(currentTemp)
                .setCurrentWind(currentWind)
                .setText(forecast.getText())
                .setImageUrl(forecast.getImageUrl());
        if (currentForecast.getMaxTemp() < currentTemp)
            currentForecast.setMaxTemp(currentTemp);
        else if (currentForecast.getMinTemp() > currentTemp)
            currentForecast.setMinTemp(currentTemp);
        if (currentForecast.getMaxWind() < currentWind)
            currentForecast.setMaxWind(currentWind);
        else if (currentForecast.getMinWind() > currentWind)
            currentForecast.setMinWind(currentWind);
        foreсastRepository.save(currentForecast); // merge
    }

    protected void insertForecast(Forecast forecast, City city) {
        Integer currentTemp = forecast.getCurrentTemp();
        Integer currentWind = forecast.getCurrentWind();
        forecast.setMaxTemp(currentTemp)
                .setMinTemp(currentTemp)
                .setMaxWind(currentWind)
                .setMinWind(currentWind)
                .setCity(city);
        foreсastRepository.save(forecast); // save
    }
}
