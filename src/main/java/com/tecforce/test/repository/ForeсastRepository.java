package com.tecforce.test.repository;

import com.tecforce.test.entity.Forecast;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface ForeсastRepository extends JpaRepository<Forecast, UUID> {
    @Query(" select forecast from Forecast forecast where forecast.date = current_date and forecast.city.id = :cityId ")
    Forecast getForecastByCityIdAndCurrentDate(@Param("cityId") UUID cityId);

    @Query(value = " select forecast from Forecast forecast where forecast.date <=  current_date " +
            " and forecast.date >= (current_date - 28) and forecast.city.id = :cityId ", nativeQuery = true)
    List<Forecast> getAllForecastToPreviousPeriodByCityId(@Param("cityId") UUID cityId);
}
