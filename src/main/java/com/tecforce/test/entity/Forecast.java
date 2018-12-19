package com.tecforce.test.entity;

import org.apache.commons.lang3.StringUtils;
import org.hibernate.annotations.Cascade;
import org.hibernate.validator.constraints.UniqueElements;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Locale;
import java.util.UUID;

@Entity
@Table(name = "forecast")
public class Forecast {
    private final static SimpleDateFormat dateFormat = new SimpleDateFormat("EEE", Locale.ENGLISH);

    @Id
    @GeneratedValue
    protected UUID id;

    @Column(name = "image_url")
    protected String imageUrl;

    @Column(name = "date")
    protected LocalDate date = LocalDate.now();

    @Column(name = "day", nullable = false)
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

    @ManyToOne // default eager
    @JoinColumn(name = "city_id")
    @Cascade(org.hibernate.annotations.CascadeType.MERGE)
    protected City city;

    @PrePersist
    public void prePersist() {
        if (day == null)
            day = dateFormat.format(new Date());
        if (date == null)
            date = LocalDate.now();
    }

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

    public Forecast setId(UUID id) {
        this.id = id;
        return this;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public Forecast setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }

    public LocalDate getDate() {
        return date;
    }

    public Forecast setDate(LocalDate date) {
        this.date = date;
        return this;
    }


    public String getDay() {
        return day;
    }

    public Forecast setDay(String day) {
        this.day = day;
        return this;
    }

    public Integer getMaxWind() {
        return maxWind;
    }

    public Forecast setMaxWind(Integer maxWind) {
        this.maxWind = maxWind;
        return this;
    }

    public Integer getMinWind() {
        return minWind;
    }

    public Forecast setMinWind(Integer minWind) {
        this.minWind = minWind;
        return this;
    }

    public Integer getCurrentWind() {
        return currentWind;
    }

    public Forecast setCurrentWind(Integer currentWind) {
        this.currentWind = currentWind;
        return this;
    }

    public Integer getMaxTemp() {
        return maxTemp;
    }

    public Forecast setMaxTemp(Integer maxTemp) {
        this.maxTemp = maxTemp;
        return this;
    }

    public Integer getMinTemp() {
        return minTemp;
    }

    public Forecast setMinTemp(Integer minTemp) {
        this.minTemp = minTemp;
        return this;
    }

    public Integer getCurrentTemp() {
        return currentTemp;
    }

    public Forecast setCurrentTemp(Integer currentTemp) {
        this.currentTemp = currentTemp;
        return this;
    }

    public String getText() {
        return text;
    }

    public Forecast setText(String text) {
        this.text = text;
        return this;
    }

    public City getCity() {
        return city;
    }

    public Forecast setCity(City city) {
        this.city = city;
        return this;
    }
}
