package com.tecforce.test.controller;

import com.tecforce.test.dto.ForecastDto;
import com.tecforce.test.service.ForecastService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/forecast")
public class ForecastController {
    @Autowired
    protected ForecastService forecastService;

    @GetMapping("/current")
    public ForecastDto getCurrentForecastDtoByCityId(@RequestParam UUID cityId) {
        return forecastService.getCurrentForecastDtoByCityId(cityId);
    }

    @GetMapping("/period")
    public List<ForecastDto> getForecastListToPreviousPeriodByCityId(@RequestParam UUID cityId) {
        return forecastService.getForecastListToPreviousPeriodByCityId(cityId);
    }
}
