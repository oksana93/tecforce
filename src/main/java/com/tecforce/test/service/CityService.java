package com.tecforce.test.service;

import com.tecforce.test.dto.CityDto;
import com.tecforce.test.entity.City;
import com.tecforce.test.mapper.CityMapper;
import com.tecforce.test.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CityService {

    @Autowired
    protected CityRepository cityRepository;

    @Transactional
    public List<CityDto> getAllCitiesDto() {
        return CityMapper.INSTANCE.getCityListJpaToDto(
                cityRepository.findAll());
    }

    @Transactional
    public CityDto getCityDtoById(UUID id) {
        Optional<City> cityOptional = cityRepository.findById(id);
        return cityOptional.isPresent() ? CityMapper.INSTANCE.getCityJpaToDto(cityOptional.get()) : new CityDto();
    }

    @Transactional
    public List<City> getAllCity() {
        return cityRepository.findAll();
    }
}
