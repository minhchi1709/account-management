package vn.diepgia.mchis.konto_verwaltung.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import vn.diepgia.mchis.konto_verwaltung.entities.CurrencyRate;
import vn.diepgia.mchis.konto_verwaltung.entities.CurrencyRateVIB;
import vn.diepgia.mchis.konto_verwaltung.repositories.CurrencyRateRepository;
import vn.diepgia.mchis.konto_verwaltung.repositories.CurrencyRateVIBRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.logging.Logger;

@Service
@RequiredArgsConstructor
public class CurrencyRateService {

    private final CurrencyRateRepository paypalRepository;
    private final CurrencyRateVIBRepository vibRepository;
    private final SortPaypalRateByAscendingDate paypalSorter;
    private final SortVIBRateByAscendingDate vibSorter;
    private static final Logger LOGGER = Logger.getLogger(CurrencyRateService.class.getName());

    public CurrencyRate getRate(String url) {
        var currency = paypalRepository.findById(LocalDate.now());
        if(currency.isPresent()) {
            return currency.get();
        }
        LOGGER.info("Make request to: " + url);
        RestClient restClient = RestClient.create();
        String response = restClient.get()
                .uri(url)
                .retrieve()
                .body(String.class);
        int index = response.indexOf("fxRate");
        index = response.indexOf(":", index); // index of > of the tag <input ... value="...">
        // find the index of second "
        while(!(response.charAt(index) == '2')) {
            index++;
        }
        // find index of first "
        float result = Float.parseFloat(response.substring(index, index + 11).replaceFirst(",", ""));
        return paypalRepository.save(
                CurrencyRate.builder()
                        .date(LocalDate.now())
                        .rate(result).build()
        );
    }

    public CurrencyRateVIB getRateVIB(String url) {
        var currency = vibRepository.findById(LocalDate.now());
        if(currency.isPresent()) {
            return currency.get();
        }
        LOGGER.info("Make request to: " + url);
        RestClient restClient = RestClient.create();
        String response = restClient.get()
                .uri(url)
                .retrieve()
                .body(String.class);
        int index = response.indexOf("EUR: {buy_transfer");
        index = response.indexOf("1/", index); // index of > of the tag <input ... value="...">
        // find the index of second "
        while(!(response.charAt(index) == '2')) {
            index++;
        }
        // find index of first "
        float result = Float.parseFloat(response.substring(index, index + 5).replaceFirst(",", ""));
        return vibRepository.save(
                CurrencyRateVIB.builder()
                        .date(LocalDate.now())
                        .rate(result).build()
        );

    }

    public List<CurrencyRate> getAllRates() {
        return paypalRepository.findAll().stream().sorted(paypalSorter).toList();
    }

    public List<CurrencyRateVIB> getAllVIBRates() {
        return vibRepository.findAll().stream().sorted(vibSorter).toList();
    }
}
