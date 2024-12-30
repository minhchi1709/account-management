package vn.diepgia.mchis.konto_verwaltung.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Comparator;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Transaction {
    @Id
    @GeneratedValue
    private Long id;
    private float value;
    private LocalDate date;
    private LocalDateTime lastModified;
    private String description;

}
