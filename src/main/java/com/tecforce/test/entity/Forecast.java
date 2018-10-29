package com.tecforce.test.entity;

import lombok.Data;
import org.apache.commons.lang3.StringUtils;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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

    public void setCurrentWind(String currentWind) {
        if (!StringUtils.isEmpty(currentWind))
            this.currentWind = Integer.valueOf(currentWind);
    }

    public void setCurrentTemp(String currentTemp) {
        if (!StringUtils.isEmpty(currentTemp))
            this.currentTemp = Integer.valueOf(currentTemp);

    }

    public void setDate(String date) {
        this.date = LocalDate.parse(date, DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss'Z'"));
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setCity(City city) {
        this.city = city;
    }
}
