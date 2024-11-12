package vn.diepgia.mchis.konto_verwaltung.controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vn.diepgia.mchis.konto_verwaltung.entities.CurrencyRate;
import vn.diepgia.mchis.konto_verwaltung.entities.CurrencyRateVIB;
import vn.diepgia.mchis.konto_verwaltung.services.CurrencyRateService;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/app/AccountManagement/api/v1/currency")
@RequiredArgsConstructor
@Tag(name = "Currency")
public class CurrencyController {

    private static final Logger LOGGER = Logger.getLogger(CurrencyController.class.getName());
    private final CurrencyRateService service;

    @Value("${application.currency.paypal-url}")
    private String paypalUrl;

    @Value("${application.currency.vib-url}")
    private String vibUrl;

    @GetMapping("/today")
    public ResponseEntity<CurrencyRate> getTodayCurrency(){
        CurrencyRate result = service.getRate(paypalUrl);
        LOGGER.info("Paypal rate: 1 EUR = " + result.getRate() + " VND");
        return ResponseEntity.ok(result);
    }

    @GetMapping
    public ResponseEntity<List<CurrencyRate>> getAllRates(){
        getTodayCurrency();
        return ResponseEntity.ok(service.getAllRates());
    }

    @GetMapping("/today/vib")
    public ResponseEntity<CurrencyRateVIB> getTodayVIBCurrency(){
        CurrencyRateVIB result = service.getRateVIB(vibUrl);
        LOGGER.info("VIB rate: 1 EUR = " + result.getRate() + " VND");
        return ResponseEntity.ok(result);
    }

    @GetMapping("/vib")
    public ResponseEntity<List<CurrencyRateVIB>> getAllVIBRates(){
        return ResponseEntity.ok(service.getAllVIBRates());
    }

}
