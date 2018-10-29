package com.tecforce.test.entity;

import org.apache.commons.lang3.StringUtils;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@Entity
@Table(name = "forecast")
public class Forecast {
    @Id
    @GeneratedValue
    protected UUID id;

    @Column(name = "image_url")
    protected String imageUrl;

    @Column(name = "date")
    protected LocalDate date;

    @Column(name = "day")
    protected String day;

    @Column(name = "max_wind")
    protected Integer maxWind;

    @Column(name = "min_wind")
    protected Integer minWind;

    @Column(name = "current_wind")
    protected Integer currentWind;

    @Column(name = "max_temp")
    protected Integer maxTemp;

    @Column(name = "min_temp")
    protected Integer minTemp;

    @Column(name = "current_temp")
    protected Integer currentTemp;

    @Column(name = "text")
    protected String text;

    @NotNull
    @ManyToOne // default eager
    @JoinColumn(name = "city_id")
    protected City city;

    public Forecast() {
    }

    public Forecast(String imageUrl, LocalDate date, String day, Integer maxWind, Integer minWind, Integer currentWind,
                    Integer maxTemp, Integer minTemp, Integer currentTemp, City city, String text) {
        this.date = date;
        this.imageUrl = imageUrl;
        this.day = day;
        this.maxWind = maxWind;
        this.minWind = minWind;
        this.currentWind = currentWind;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.currentTemp = currentTemp;
        this.city = city;
        this.text = text;
    }

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

    public void setDate(String date) {
        this.date = LocalDate.parse(date, DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'Z'"));
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

    public void setCurrentWind(String currentWind) {
        if (StringUtils.isEmpty(currentWind))
            this.currentWind = Integer.valueOf(currentWind);
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

    public void setCurrentTemp(String currentTemp) {
        if (StringUtils.isEmpty(currentTemp))
            this.currentTemp = Integer.valueOf(currentTemp);
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }
}
