package vn.diepgia.mchis.konto_verwaltung.config;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import vn.diepgia.mchis.konto_verwaltung.dto.TransactionRequest;
import vn.diepgia.mchis.konto_verwaltung.entities.BankName;
import vn.diepgia.mchis.konto_verwaltung.entities.CurrencyExchangeRate;
import vn.diepgia.mchis.konto_verwaltung.entities.CurrencyExchangeRateId;
import vn.diepgia.mchis.konto_verwaltung.repositories.CurrencyExchangeRateRepository;
import vn.diepgia.mchis.konto_verwaltung.services.TransactionService;

import java.io.BufferedReader;
import java.io.FileReader;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Component
@RequiredArgsConstructor
public class StartupApplicationRunner implements ApplicationRunner {

    private final CurrencyExchangeRateRepository repository;
    private final TransactionService transactionService;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        try (BufferedReader br = new BufferedReader(new FileReader("transactions.csv"))) {
            String[] header = {"date", "description", "value"};
            String line;

            while ((line = br.readLine()) != null) {
                if (line.equals(String.join(",", header))) {
                    continue;
                }
                String[] values = line.split(",");
                transactionService.createTransaction(
                        TransactionRequest.builder()
                                .date(values[0])
                                .description(values[1])
                                .value(Float.parseFloat(values[2])).build()
                );
            }
        }
        System.out.println("Transactions imported from transactions.csv");

        try (BufferedReader br = new BufferedReader(new FileReader("rates.csv"))) {
            String[] header = {"bank", "rate", "date"};
            String line;

            while ((line = br.readLine()) != null) {
                if (line.equals(String.join(",", header))) {
                    continue;
                }
                String[] values = line.split(",");
                BankName bank = BankName.valueOf(values[0].toUpperCase());
                repository.save(
                        CurrencyExchangeRate.builder()
                                .id(
                                        CurrencyExchangeRateId.builder()
                                                .bank(bank)
                                                .date(LocalDate.parse(values[2], DateTimeFormatter.ofPattern("yyyy-MM-dd"))).build()
                                )
                                .rate(Float.parseFloat(values[1]))
                                .lastUpdated(LocalDateTime.now())
                                .build());
            }
        }
        System.out.println("Rates imported from rates.csv");
    }
}
