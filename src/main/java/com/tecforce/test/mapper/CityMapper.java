package com.tecforce.test.mapper;

import com.tecforce.test.dto.CityDto;
import com.tecforce.test.dto.ForecastDto;
import com.tecforce.test.entity.City;
import com.tecforce.test.entity.Forecast;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface CityMapper {
    CityMapper INSTANCE = Mappers.getMapper(CityMapper.class);

    @Mappings({
            @Mapping(target = "forecastDtoList", source = "forecastList")
    })
    CityDto getCityJpaToDto(City city);

    List<CityDto> getCityListJpaToDto(List<City> cityList);

    default List<ForecastDto> getForecastListJpaToDto(List<Forecast> forecastList) {
        return ForecastMapper.INSTANCE.getForecastListJpaToDto(forecastList);
    }
}
