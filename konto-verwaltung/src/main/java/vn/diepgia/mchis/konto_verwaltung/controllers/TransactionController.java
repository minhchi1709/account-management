package vn.diepgia.mchis.konto_verwaltung.controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.diepgia.mchis.konto_verwaltung.entities.Transaction;
import vn.diepgia.mchis.konto_verwaltung.requests.TransactionRequest;
import vn.diepgia.mchis.konto_verwaltung.services.TransactionService;

import java.time.Month;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Tag(name = "Transaction")
public class TransactionController {

    private final TransactionService transactionService;

    @GetMapping
    public ResponseEntity<List<Transaction>> getAllTransactions() {
        return ResponseEntity.ok(transactionService.getAllTransactions());
    }

    @PostMapping
    public ResponseEntity<Transaction> createTransaction(@RequestBody TransactionRequest transaction) {
        return ResponseEntity.ok(transactionService.createTransaction(transaction));
    }

    @GetMapping("/transactions/{id}")
    public ResponseEntity<Transaction> getTransactionById(@PathVariable Integer id) {
        return ResponseEntity.ok(transactionService.getTransactionById(id));
    }

    @PutMapping("/transactions/{id}")
    public ResponseEntity<Transaction> updateTransaction(
            @PathVariable Integer id,
            @RequestBody TransactionRequest transaction
    ) {
        try {
            return ResponseEntity.ok(transactionService.updateTransaction(id, transaction));
        } catch(RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("transactions/{id}")
    public ResponseEntity<Integer> deleteTransaction(@PathVariable Integer id) {
        try {
            transactionService.deleteTransaction(id);
            return ResponseEntity.ok().build();
        } catch(RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/years")
    public ResponseEntity<List<Integer>> getAllYears() {
        return ResponseEntity.ok(transactionService.getAllYears());
    }

    @GetMapping("/years/{year}")
    public ResponseEntity<List<Transaction>> getAllTransactionsOfYear(
            @PathVariable int year
    ) {
        return ResponseEntity.ok(transactionService.getAllTransactionsOfYear(year));
    }

    @GetMapping("/years/{year}/months")
    public ResponseEntity<List<Month>> getAllMonths(@PathVariable Integer year) {
        return ResponseEntity.ok(transactionService.getAllMonths(year));
    }

    @GetMapping("/years/{year}/months/{month}")
    public ResponseEntity<List<Transaction>> getAllTransactionsOfMonth(
            @PathVariable("year") int year,
            @PathVariable("month") int month
    ) {
        return ResponseEntity.ok(transactionService.getAllTransactionsOfMonth(year, month));
    }


}
