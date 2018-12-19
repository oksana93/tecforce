package com.tecforce.test.controller;

import com.tecforce.test.dto.ForecastDto;
import com.tecforce.test.service.ForecastService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/forecast")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ForecastController {
    private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(ForecastController.class);

    @Autowired
    protected ForecastService forecastService;

    @GetMapping("/current")
    public ForecastDto getCurrentForecastDtoByCityId(@RequestParam UUID cityId) {
        LOG.debug("Get current forecast");
        return forecastService.getCurrentForecastDtoByCityId(cityId);
    }

    @GetMapping("/previous")
    public List<ForecastDto> getForecastListToPreviousPeriodByCityId(@RequestParam UUID cityId) {
        LOG.debug("Get previous forecast");
        return forecastService.getForecastListToPreviousPeriodByCityId(cityId);
    }
}
