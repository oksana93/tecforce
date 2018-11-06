package com.tecforce.test;

import com.tecforce.test.dto.CityDto;
import com.tecforce.test.entity.City;
import com.tecforce.test.mapper.CityMapper;
import com.tecforce.test.repository.CityRepository;
import com.tecforce.test.service.YahooService;
import org.json.JSONException;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@TestPropertySource(locations = "classpath:application-test.properties")
public class CityTests extends TestApplicationTests {
    private static final org.slf4j.Logger LOG = LoggerFactory.getLogger(SpringRunner.class);

    @Autowired
    protected CityRepository cityRepository;
    @Autowired
    protected YahooService yahooService;

    @Test
    @Transactional
    public void testCityRepository() {
        List<City> cityList = cityRepository.findAll();
        if (cityList != null) {
            List<CityDto> cityDtoList = CityMapper.INSTANCE.getCityListJpaToDto(cityList);
            cityDtoList.forEach(cityDto -> LOG.debug(cityDto.toString()));
        }
    }

    @Test
    public void testYahooRequest() throws JSONException {
        LOG.debug(yahooService.getCurrentForecastByCityWoeid(2077746).toString());
    }
}
