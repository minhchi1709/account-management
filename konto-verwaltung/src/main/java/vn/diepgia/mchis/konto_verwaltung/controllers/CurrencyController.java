package vn.diepgia.mchis.konto_verwaltung.controllers;


import com.google.gson.Gson;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;
import vn.diepgia.mchis.konto_verwaltung.entities.Response;

@RestController
@RequestMapping("currency")
public class CurrencyController {

    @GetMapping
    public ResponseEntity<Response> get(
            @RequestParam("url") String url
    ){
        RestClient restClient = RestClient.create();
        String result = restClient.get()
                .uri(url)
                .retrieve()
                .body(String.class);
        int index = result.indexOf("id=\"target-input\"");
        index = result.indexOf(">", index); // index of > of the tag <input ... value="...">
        int first, second = index;
        // find the index of second "
        while(true) {
            if (result.charAt(second) == '"') {
                first = second - 1;
                break;
            }
            second--;
        }
        // find index of first "
        while(true) {
            if (result.charAt(first) == '"') {
                first++;
                break;
            }
            first--;
        }

        return ResponseEntity.ok(Response.builder()
                .value(Float.valueOf(result.substring(first, second)) * 1000).build());
    }

}
