package vn.diepgia.mchis.konto_verwaltung.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vn.diepgia.mchis.konto_verwaltung.entities.CurrencyRateVIB;

import java.time.LocalDate;

@Repository
public interface CurrencyRateVIBRepository extends JpaRepository<CurrencyRateVIB, LocalDate> {
}
