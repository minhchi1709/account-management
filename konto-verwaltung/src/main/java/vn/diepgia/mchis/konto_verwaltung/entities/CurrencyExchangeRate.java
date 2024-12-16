package vn.diepgia.mchis.konto_verwaltung.entities;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class CurrencyExchangeRate {
    @EmbeddedId
    private CurrencyExchangeRateId id;
    private float rate;
    private LocalDateTime lastUpdated;
}
