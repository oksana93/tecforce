package com.tecforce.test.mapper;

import com.tecforce.test.dto.CityDto;
import com.tecforce.test.dto.ForecastDto;
import com.tecforce.test.entity.City;
import com.tecforce.test.entity.Forecast;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Mapper
public interface CityMapper {
    CityMapper INSTANCE = Mappers.getMapper(CityMapper.class);

    CityDto getCityJpaToDto(City city);

    List<CityDto> getCityListJpaToDto(List<City> cityList);

    default List<CityDto> getCityListJpaToDtoWithCurrentForecast(List<City> cityList) {
        List<CityDto> cityDtoList = new ArrayList<>();
        cityList.forEach(city -> {
            CityDto cityDto = getCityJpaToDto(city);
            Optional<Forecast> currentForecastOptional = city.getForecastList().stream()
                    .filter(forecast -> forecast.getDate().equals(LocalDate.now())).findFirst();
            Forecast currentForecast = currentForecastOptional.isPresent()? currentForecastOptional.get(): null;
            ForecastDto currentForecastDto = ForecastMapper.INSTANCE.getForecastJpaToDto(currentForecast);
            cityDto.setCurrentForecast(currentForecastDto);
            cityDtoList.add(cityDto);
        });
        return cityDtoList;
    }
}
