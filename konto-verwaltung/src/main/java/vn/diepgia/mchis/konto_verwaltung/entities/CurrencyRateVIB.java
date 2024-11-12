package vn.diepgia.mchis.konto_verwaltung.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class CurrencyRateVIB {
    @Id
    private LocalDate date;
    private float rate;
}
