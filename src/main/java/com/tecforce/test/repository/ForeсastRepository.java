package com.tecforce.test.repository;

import com.tecforce.test.entity.Forecast;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ForeсastRepository extends JpaRepository<Forecast, UUID> {
}
