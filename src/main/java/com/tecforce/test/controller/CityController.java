package com.tecforce.test.controller;

import com.tecforce.test.dto.CityDto;
import com.tecforce.test.service.CityService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/city")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CityController {
    private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(CityController.class);

    @Autowired
    protected CityService cityService;

    @GetMapping(value = "/all", produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<CityDto> getAllCities() {
        LOG.debug("Get all cities");
        return cityService.getAllCitiesDto();
    }

    @GetMapping(value = "/cities/current", produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<CityDto> getAllCitiesWithCurrentForecast() {
        LOG.debug("Get all cities with current forecast");
        return cityService.getAllCitiesWithCurrentForecast();
    }

    @GetMapping
    public CityDto getCityById(@RequestParam UUID id) {
        LOG.debug("Get all city id");
        return cityService.getCityDtoById(id);
    }
}
