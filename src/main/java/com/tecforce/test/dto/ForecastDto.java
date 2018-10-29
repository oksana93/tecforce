package com.tecforce.test.dto;

import java.time.LocalDate;
import java.util.UUID;

public class ForecastDto {
    protected UUID id;
    protected String imageUrl;
    protected LocalDate date;
    protected String day;
    protected Integer maxWind;
    protected Integer minWind;
    protected Integer currentWind;
    protected Integer maxTemp;
    protected Integer minTemp;
    protected Integer currentTemp;
    protected String text;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public Integer getMaxWind() {
        return maxWind;
    }

    public void setMaxWind(Integer maxWind) {
        this.maxWind = maxWind;
    }

    public Integer getMinWind() {
        return minWind;
    }

    public void setMinWind(Integer minWind) {
        this.minWind = minWind;
    }

    public Integer getCurrentWind() {
        return currentWind;
    }

    public void setCurrentWind(Integer currentWind) {
        this.currentWind = currentWind;
    }

    public Integer getMaxTemp() {
        return maxTemp;
    }

    public void setMaxTemp(Integer maxTemp) {
        this.maxTemp = maxTemp;
    }

    public Integer getMinTemp() {
        return minTemp;
    }

    public void setMinTemp(Integer minTemp) {
        this.minTemp = minTemp;
    }

    public Integer getCurrentTemp() {
        return currentTemp;
    }

    public void setCurrentTemp(Integer currentTemp) {
        this.currentTemp = currentTemp;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
