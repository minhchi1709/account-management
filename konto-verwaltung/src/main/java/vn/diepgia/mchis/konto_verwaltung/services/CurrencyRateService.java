package vn.diepgia.mchis.konto_verwaltung.services;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import vn.diepgia.mchis.konto_verwaltung.dto.Rates;
import vn.diepgia.mchis.konto_verwaltung.entities.*;
import vn.diepgia.mchis.konto_verwaltung.repositories.CurrencyExchangeRateRepository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.logging.Logger;

@Service
@RequiredArgsConstructor
public class CurrencyRateService {

    @Value("${application.currency.paypal-url}")
    private String paypalUrl;

    @Value("${application.currency.vib-url}")
    private String vibUrl;

    @Value("${application.currency.vcb-url}")
    private String vcbUrl;

    private final CurrencyExchangeRateRepository repository;
    private final CurrencyExchangeRateSorter sorter;
    private static final Logger LOGGER = Logger.getLogger(CurrencyRateService.class.getName());
    
    private String getUrl(String bank) {
        return switch (bank) {
            case "paypal" -> paypalUrl;
            case "vib" -> vibUrl;
            case "vcb" -> vcbUrl;
            default -> null;
        };
    }

    private BankName getBank(String bank) {
        return BankName.valueOf(bank.toUpperCase());
    }

    private float extractRate(String response, String bank) {
        switch (bank) {
            case "paypal": {
                int index = Objects.requireNonNull(response).indexOf("fxRate");
                index = response.indexOf(":", index); // index of > of the tag <input ... value="...">
                // find the index of second "
                while(!(response.charAt(index) == '2')) {
                    index++;
                }
                // find index of first "
                return Float.parseFloat(response.substring(index, index + 11).replaceFirst(",", ""));
            }
            case "vib": {
                int index = Objects.requireNonNull(response).indexOf("EUR: {buy_transfer");
                index = response.indexOf("1/", index); // index of > of the tag <input ... value="...">
                // find the index of second "
                while(!(response.charAt(index) == '2')) {
                    index++;
                }
                // find index of first "
                return Float.parseFloat(response.substring(index, index + 5).replaceFirst(",", ""));
            }
            case "vcb": {
                int index = Objects.requireNonNull(response).indexOf("CurrencyName=\"EURO ");
                index = response.indexOf("Transfer", index); // index of > of the tag <input ... value="...">
                // find the index of second "
                while(!(response.charAt(index) == '2')) {
                    index++;
                }
                // find index of first "
                return Float.parseFloat(response.substring(index, index + 8).replaceFirst(",", ""));
            }
            default: {
                return 0f;
            }
        }
    }

    public CurrencyExchangeRate getTodayRate(String bank) {
        LocalDate now = LocalDate.now();
        BankName bankName = getBank(bank);
        var currencyOpt = repository.findById(
                CurrencyExchangeRateId.builder()
                        .bank(bankName)
                        .date(now).build()
        );
        if (currencyOpt.isPresent() && LocalDateTime.now().isBefore(currencyOpt.get().getLastUpdated().plusHours(2))) {
            return currencyOpt.get();
        }
        String url = getUrl(bank);
        LOGGER.info("Make request to " + bankName.name() + " URL: " + url);
        RestClient restClient = RestClient.create();
        String response = restClient.get()
                .uri(Objects.requireNonNull(url))
                .retrieve()
                .body(String.class);

        float result = extractRate(response, bank);
        LOGGER.info(bankName.name() + " Rate: 1 EUR = " + result + " VND");
        if (currencyOpt.isPresent()) {
            var currency = currencyOpt.get();
            currency.setRate(result);
            currency.setLastUpdated(LocalDateTime.now());
            repository.save(currency);
            return currency;
        }
        return repository.save(
                CurrencyExchangeRate.builder()
                        .id(
                                CurrencyExchangeRateId.builder()
                                        .date(LocalDate.now())
                                        .bank(bankName)
                                        .build()
                        )
                        .lastUpdated(LocalDateTime.now())
                        .rate(result)
                        .build()
        );
    }

    public Rates getAllRates() {
        return Rates.builder()
                .paypalRates(getAllRates("paypal"))
                .vibRates(getAllRates("vib"))
                .vcbRates(getAllRates("vcb"))
                .build();
    }

    private List<CurrencyExchangeRate> getAllRates(String bank) {
        try {
            getTodayRate(bank);
        } catch(Exception e) {
            LOGGER.severe("Problem at retrieving " + getBank(bank).name() + " rate, exception: " + e.getMessage());
        }
        return repository.findAll()
                .stream()
                .filter(r -> r.getId().getBank() == getBank(bank))
                .sorted(sorter)
                .toList();
    }
}
