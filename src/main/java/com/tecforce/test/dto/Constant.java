package com.tecforce.test.dto;

public interface Constant {
    String URL = "https://query.yahooapis.com/v1/public/yql?q=select units, location, item.condition, wind, image from weather.forecast " +
            "where woeid = %d&format=json&env=storej__datatables.org Falltableswithkeys";
}
