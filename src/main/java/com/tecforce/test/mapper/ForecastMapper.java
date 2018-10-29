package com.tecforce.test.mapper;

import com.tecforce.test.dto.ForecastDto;
import com.tecforce.test.entity.Forecast;
import org.json.JSONObject;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface ForecastMapper {
    ForecastMapper INSTANCE = Mappers.getMapper(ForecastMapper.class);

    default Forecast getCityByJsonObject(JSONObject jsonObject) {
        String speed = null;
        String url = null;
        String created = null;
        String temp = null;
        String text = null;
        JSONObject queryJsonObject = jsonObject.getJSONObject("query");
        if (queryJsonObject != null) {
            created = queryJsonObject.getString("created");
            JSONObject resultJsonObject = queryJsonObject.getJSONObject("results");
            if (resultJsonObject != null) {
                JSONObject channelJsonObject = resultJsonObject.getJSONObject("channel");
                if (channelJsonObject != null) {
                    JSONObject windJsonObject = channelJsonObject.getJSONObject("wind");
                    if (windJsonObject != null)
                        speed = windJsonObject.getString("speed");
                    JSONObject imageJsonObject = channelJsonObject.getJSONObject("image");
                    if (imageJsonObject != null)
                        url = imageJsonObject.getString("url");
                    JSONObject itemJsonObject = channelJsonObject.getJSONObject("item");
                    if (itemJsonObject != null) {
                        JSONObject conditionJsonObject = itemJsonObject.getJSONObject("condition");
                        if (conditionJsonObject != null) {
                            temp = conditionJsonObject.getString("temp");
                            text = conditionJsonObject.getString("text");
                        }
                    }
                    return INSTANCE.getForecastByStr(speed, url, created, temp, text);
                }
            }
        }
        return new Forecast();
    }

    Forecast getForecastByStr(String currentWind, String imageUrl, String date, String currentTemp, String text);

    ForecastDto getForecastJpaToDto(Forecast forecast);

    List<ForecastDto> getForecastListJpaToDto(List<Forecast> forecast);
}
