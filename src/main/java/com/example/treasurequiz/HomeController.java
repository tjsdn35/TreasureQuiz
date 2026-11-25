package com.example.treasurequiz;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    // http://localhost:8080/ 로 접속하면 index.html을 보여줌
    @GetMapping("/")
    public String index() {
        return "index1";
    }

    // http://localhost:8080/index1 로 접속하면 index1.html을 보여줌
    @GetMapping("/index1")
    public String index1() {
        return "index1";
    }
}
