package com.tecforce.test.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
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
    @Column(name = "woeid", unique = true)
    protected String woeid;

    @NotNull
    @Column(name = "code")
    protected String code;
}
