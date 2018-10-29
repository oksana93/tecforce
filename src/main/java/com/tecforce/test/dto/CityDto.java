package com.tecforce.test.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class CityDto implements Serializable {
    protected UUID id;
    protected String name;
    protected Integer woeid;
    protected Integer code;
    protected List<ForecastDto> forecastDtoList = new ArrayList<>();

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getWoeid() {
        return woeid;
    }

    public void setWoeid(Integer woeid) {
        this.woeid = woeid;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public List<ForecastDto> getForecastDtoList() {
        return forecastDtoList;
    }

    public void setForecastDtoList(List<ForecastDto> forecastDtoList) {
        this.forecastDtoList = forecastDtoList;
    }
}
