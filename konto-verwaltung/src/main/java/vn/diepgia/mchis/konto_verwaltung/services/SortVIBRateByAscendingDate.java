package vn.diepgia.mchis.konto_verwaltung.services;

import org.springframework.stereotype.Service;
import vn.diepgia.mchis.konto_verwaltung.entities.CurrencyRateVIB;

import java.util.Comparator;

@Service
public class SortVIBRateByAscendingDate implements Comparator<CurrencyRateVIB> {
    @Override
    public int compare(CurrencyRateVIB o1, CurrencyRateVIB o2) {
        return o1.getDate().isBefore(o2.getDate()) ? -1 : o1.getDate().isAfter(o2.getDate()) ? 1 : 0;
    }
}
