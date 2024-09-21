package vn.diepgia.mchis.konto_verwaltung.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vn.diepgia.mchis.konto_verwaltung.entities.Transaction;
import vn.diepgia.mchis.konto_verwaltung.repositories.TransactionRepository;
import vn.diepgia.mchis.konto_verwaltung.requests.TransactionRequest;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TransactionService {

    private final TransactionRepository transactionRepository;

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    public Transaction getTransactionById(Integer id) {
        return transactionRepository.findById(id).orElse(null);
    }

    public List<Transaction> getAllTransactionsOfMonth(int year, int month) {
        return getAllTransactions().stream().filter(t -> {
            return (t.getDate().isAfter(LocalDate.of(year, month, 1)) ||
                    t.getDate().isEqual(LocalDate.of(year, month, 1)))
                    && t.getDate().isBefore(LocalDate.of(year, month + 1, 1));
        }).sorted(new SortTransactionByDateService()).toList();
    }

    public List<Transaction> getAllTransactionsOfYear(int year) {
        return getAllTransactions().stream().filter(t -> {
            return (t.getDate().isAfter(LocalDate.of(year, 1, 1)) || t.getDate().isEqual(LocalDate.of(year, 1, 1)))
                    && t.getDate().isBefore(LocalDate.of(year + 1, 1, 1));
        }).sorted(new SortTransactionByDateService()).toList();
    }

    public Transaction createTransaction(TransactionRequest transaction) {
        if (transaction.getDate() == null) {
            return transactionRepository.save(
                    Transaction.builder()
                            .value(transaction.getValue())
                            .date(LocalDate.now())
                            .description(transaction.getDescription())
                            .lastModified(LocalDateTime.now()).build()
            );
        } else {
            return transactionRepository.save(
                    Transaction.builder()
                            .value(transaction.getValue())
                            .date(toLocalDate(transaction.getDate()))
                            .description(transaction.getDescription())
                            .lastModified(LocalDateTime.now()).build()
            );
        }
    }

    public Transaction updateTransaction(Integer id, TransactionRequest request) {
        Transaction transaction = transactionRepository.findById(id).orElseThrow(RuntimeException::new);
        transaction.setValue(request.getValue());
        if (request.getDate() != null) {
            transaction.setDate(toLocalDate(request.getDate()));
        }
        transaction.setDescription(request.getDescription());
        transaction.setLastModified(LocalDateTime.now());
        return transactionRepository.save(transaction);
    }

    public void deleteTransaction(Integer id) {
        Transaction transaction = transactionRepository.findById(id).orElseThrow(RuntimeException::new);
        transactionRepository.delete(transaction);
    }

    private LocalDate toLocalDate(String date){
        String[] infos = date.split("-");
        return LocalDate.of(Integer.parseInt(infos[0]), Integer.parseInt(infos[1]), Integer.parseInt(infos[2]));
    }

    public List<Integer> getAllYears() {
        List<Integer> years = new ArrayList<>();
        for (Transaction t : getAllTransactions()) {
            if (!years.contains(t.getDate().getYear())) {
                years.add(t.getDate().getYear());
            }
        }
        return years;
    }

    public List<Month> getAllMonths(Integer year) {
        List<Month> months = new ArrayList<>();
        for (Transaction t : getAllTransactionsOfYear(year)) {
            if (!months.contains(t.getDate().getMonth())) {
                months.add(t.getDate().getMonth());
            }
        }
        return months;
    }
}
