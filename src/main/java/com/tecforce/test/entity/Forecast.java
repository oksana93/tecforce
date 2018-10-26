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

    @Column(name = "date")
    protected Date date;

    @Column(name = "max_wind")
    protected Integer maxWind;

    @Column(name = "min_wind")
    protected Integer minWind;

    @Column(name = "max_temp")
    protected Integer maxTemp;

    @Column(name = "min_temp")
    protected Integer minTemp;

    @NotNull
    @ManyToOne // default eager
    @JoinColumn(name = "city_id")
    protected City city;

    public Forecast() {
    }

    public Forecast(Date date, Integer maxWind, Integer minWind, Integer maxTemp, Integer minTemp, City city) {
	this.date = date;
	this.maxWind = maxWind;
	this.minWind = minWind;
	this.maxTemp = maxTemp;
	this.minTemp = minTemp;
	this.city = city;
    }
}
