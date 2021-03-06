package com.tecforce.test.mapper;

import com.tecforce.test.dto.ForecastDto;
import com.tecforce.test.entity.Forecast;
import com.tecforce.test.helper.StringHelper;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONObject;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Mapper
public interface ForecastMapper {
    ForecastMapper INSTANCE = Mappers.getMapper(ForecastMapper.class);

    default Forecast getForecastByJsonObject(JSONObject jsonObject) {
        String speed = null;
        Double currentWind = null;
        String temp = null;
        Double currentTemp = null;
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
                            currentWind = StringUtils.isEmpty(speed) ? null : (Double.valueOf(speed) * 0.44704);
                        }
                    }
                    if (channelJsonObject.has("item")) {
                        JSONObject itemJsonObject = channelJsonObject.getJSONObject("item");
                        if (itemJsonObject.has("description")) {
                            String description = itemJsonObject.getString("description");
                            url = StringHelper.parseDescription(description);
                        }
                        if (itemJsonObject.has("condition")) {
                            JSONObject conditionJsonObject = itemJsonObject.getJSONObject("condition");
                            if (conditionJsonObject.has("temp")) {
                                temp = conditionJsonObject.getString("temp");
                                currentTemp = StringUtils.isEmpty(temp) ? null : ((Double.valueOf(temp) - 32) / 1.8);
                            }
                            if (conditionJsonObject.has("text"))
                                text = conditionJsonObject.getString("text");
                            return INSTANCE.getForecastByStr(currentWind.intValue(), url, currentTemp.intValue(), text);
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
