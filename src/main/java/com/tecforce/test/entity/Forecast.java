package com.tecforce.test.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Date;
import java.util.UUID;

@Data
@Entity
@Table(name = "forecast")
public class Forecast {
    @Id
    @GeneratedValue
    protected UUID id;

    @Column(name = "image_url")
    protected String imageUrl;

    @Column(name = "date")
    protected Date date;

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

    @NotNull
    @ManyToOne // default eager
    @JoinColumn(name = "city_id")
    protected City city;

    public Forecast() {
    }

    public Forecast(String imageUrl, Date date, String day, Integer maxWind, Integer minWind, Integer currentWind, Integer maxTemp, Integer minTemp, Integer currentTemp, City city) {
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
    }
}
