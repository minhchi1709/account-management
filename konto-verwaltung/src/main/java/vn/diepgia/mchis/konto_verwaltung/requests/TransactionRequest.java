package vn.diepgia.mchis.konto_verwaltung.requests;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TransactionRequest {
    private float value;
    private String date;
    private String description;
}
