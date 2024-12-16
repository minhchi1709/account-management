package vn.diepgia.mchis.konto_verwaltung.controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import vn.diepgia.mchis.konto_verwaltung.dto.Rates;
import vn.diepgia.mchis.konto_verwaltung.entities.CurrencyExchangeRate;
import vn.diepgia.mchis.konto_verwaltung.services.CurrencyRateService;

@RestController
@RequestMapping("/app/AccountManagement/api/v1/currency")
@RequiredArgsConstructor
@Tag(name = "Currency")
public class CurrencyController {

    private final CurrencyRateService service;



    @GetMapping("/today")
    public ResponseEntity<CurrencyExchangeRate> getTodayRate(
            @RequestParam("bank") String bank
    ){
        CurrencyExchangeRate result = service.getTodayRate(bank);
        return ResponseEntity.ok(result);
    }

    @GetMapping
    public ResponseEntity<Rates> getAllRates(){
        return ResponseEntity.ok(service.getAllRates());
    }

}
