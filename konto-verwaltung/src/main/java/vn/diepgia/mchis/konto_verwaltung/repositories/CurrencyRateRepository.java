package vn.diepgia.mchis.konto_verwaltung.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.diepgia.mchis.konto_verwaltung.entities.CurrencyRate;

import java.time.LocalDate;

@Repository
public interface CurrencyRateRepository extends JpaRepository<CurrencyRate, LocalDate> {
}
