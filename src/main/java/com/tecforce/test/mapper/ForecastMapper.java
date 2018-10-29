package com.tecforce.test.mapper;

import com.tecforce.test.dto.ForecastDto;
import com.tecforce.test.entity.Forecast;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONObject;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.factory.Mappers;

import java.time.LocalDate;
import java.util.List;

@Mapper
public interface ForecastMapper {
    ForecastMapper INSTANCE = Mappers.getMapper(ForecastMapper.class);

    default Forecast getForecastByJsonObject(JSONObject jsonObject) {
        String speed = null;
        Integer currentWind = null;
        String temp = null;
        Integer currentTemp = null;
        String url = null;
        String text = null;
        if (jsonObject.has("query")) {
            JSONObject queryJsonObject = jsonObject.getJSONObject("query");
            if (queryJsonObject.has("results")) {
                JSONObject resultJsonObject = queryJsonObject.getJSONObject("results");
                if (resultJsonObject.has("channel")) {
                    JSONObject channelJsonObject = resultJsonObject.getJSONObject("channel");
                    if (channelJsonObject.has("wind")) {
                        JSONObject windJsonObject = channelJsonObject.getJSONObject("wind");
                        if (windJsonObject != null) {
                            speed = windJsonObject.getString("speed");
                            currentWind = StringUtils.isEmpty(speed) ? null : Integer.valueOf(speed);
                        }
                    }
                    if (channelJsonObject.has("image")) {
                        JSONObject imageJsonObject = channelJsonObject.getJSONObject("image");
                        if (imageJsonObject != null)
                            url = imageJsonObject.getString("url");
                    }
                    if (channelJsonObject.has("item")) {
                        JSONObject itemJsonObject = channelJsonObject.getJSONObject("item");
                        if (itemJsonObject.has("condition")) {
                            JSONObject conditionJsonObject = itemJsonObject.getJSONObject("condition");
                            if (conditionJsonObject.has("temp")) {
                                temp = conditionJsonObject.getString("temp");
                                currentTemp = StringUtils.isEmpty(temp) ? null : Integer.valueOf(temp);
                            }
                            if (conditionJsonObject.has("text"))
                                text = conditionJsonObject.getString("text");
                            return INSTANCE.getForecastByStr(currentWind, url, currentTemp, text);
                        }
                    }
                }
            }
        }
        return null;
    }

    Forecast getForecastByStr(Integer currentWind, String imageUrl, Integer currentTemp, String text);

    ForecastDto getForecastJpaToDto(Forecast forecast);

    List<ForecastDto> getForecastListJpaToDto(List<Forecast> forecast);
}
