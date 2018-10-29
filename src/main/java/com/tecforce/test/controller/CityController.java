package com.tecforce.test.controller;

import com.tecforce.test.dto.CityDto;
import com.tecforce.test.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/city")
public class CityController {
    @Autowired
    protected CityService cityService;

    @GetMapping("/all")
    public List<CityDto> getAllCities() {
        return cityService.getAllCitiesDto();
    }

    @GetMapping
    public CityDto getCityById(@RequestParam UUID id) {
        return cityService.getCityDtoById(id);
    }
}
