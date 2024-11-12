package vn.diepgia.mchis.konto_verwaltung.services;

import org.springframework.stereotype.Service;
import vn.diepgia.mchis.konto_verwaltung.entities.CurrencyRate;

import java.util.Comparator;

@Service
public class SortPaypalRateByAscendingDate implements Comparator<CurrencyRate> {
    @Override
    public int compare(CurrencyRate o1, CurrencyRate o2) {
        return o1.getDate().isBefore(o2.getDate()) ? -1 : o1.getDate().isAfter(o2.getDate()) ? 1 : 0;
    }
}
