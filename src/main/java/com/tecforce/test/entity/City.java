package com.tecforce.test.entity;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "city")
public class City {
    @Id
    @GeneratedValue
    protected UUID id;

    @NotNull
    @Column(name = "name")
    protected String name;

    @NotNull
    @Column(name = "woeid")
    protected Integer woeid;

    @NotNull
    @Column(name = "code")
    protected Integer code;

    @OneToMany(mappedBy = "city") // default LAZY
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    protected List<Forecast> forecastList = new ArrayList<>();

    public City() {
    }

    public City(String name, Integer woeid, Integer code) {
        this.name = name;
        this.woeid = woeid;
        this.code = code;
    }

    public City(String name, Integer woeid, Integer code, List<Forecast> forecastList) {
        this.name = name;
        this.woeid = woeid;
        this.code = code;
        this.forecastList = forecastList;
    }

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

    public List<Forecast> getForecastList() {
        return forecastList;
    }

    public void setForecastList(List<Forecast> forecastList) {
        this.forecastList = forecastList;
    }

    public void addForecast(Forecast forecast) {
        forecastList.add(forecast);
    }

    public String toString() {
        StringBuilder stringBuilder = new StringBuilder()
                .append("Id")
                .append(id)
                .append("\nName: ")
                .append(name)
                .append("\nWoeid: ")
                .append(woeid)
                .append("\nCode")
                .append(code);
        if (forecastList.isEmpty())
            stringBuilder.append("\nForecast")
                    .append(forecastList.toString());
        return stringBuilder.toString();
    }
}
