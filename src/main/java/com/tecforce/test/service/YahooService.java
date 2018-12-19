package com.tecforce.test.service;

import com.tecforce.test.dto.Constant;
import com.tecforce.test.entity.Forecast;
import com.tecforce.test.mapper.ForecastMapper;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class YahooService {

    public Forecast getCurrentForecastByCityWoeid(Integer woeid) throws JSONException {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json;charset=utf-8");
        HttpEntity<String> entity = new HttpEntity<>(headers);
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> jsonResponse = restTemplate.exchange(String.format(Constant.URL, woeid), HttpMethod.GET, entity, String.class);
        return jsonResponse.getBody() != null? ForecastMapper.INSTANCE.getForecastByJsonObject(new JSONObject(jsonResponse.getBody())): null;
    }
}
