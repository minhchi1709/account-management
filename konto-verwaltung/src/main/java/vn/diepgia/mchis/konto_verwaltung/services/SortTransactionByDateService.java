package vn.diepgia.mchis.konto_verwaltung.services;

import vn.diepgia.mchis.konto_verwaltung.entities.Transaction;

import java.util.Comparator;

public class SortTransactionByDateService implements Comparator<Transaction> {
    @Override
    public int compare(Transaction o1, Transaction o2) {
        return o1.getDate().isBefore(o2.getDate()) ? -1 : o1.getDate().isAfter(o2.getDate()) ? 1 : 0;
    }
}
