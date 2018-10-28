package com.tecforce.test.entity;

import lombok.Data;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Data
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
