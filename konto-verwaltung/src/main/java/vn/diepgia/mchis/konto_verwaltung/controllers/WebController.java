package vn.diepgia.mchis.konto_verwaltung.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
    @GetMapping(value = {"", "/currency", "/years/**"})
    public String forward() {
        return "index.html";
    }
}
