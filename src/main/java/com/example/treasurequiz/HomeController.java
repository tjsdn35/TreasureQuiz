package com.example.treasurequiz;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    // "/" 이서버의 최상위 루트의 문서를 주세요
    @GetMapping("/") // http://인터넷 서버주소
    public String home() {
        return "안녕하세요999999";
    }

    @GetMapping("/game")
    public String hellogame() {
        return "index2";
    }

    /*
    public class HomeController {
        // "/" 이서버의 최상위 루트의 문서를 주세요
        // http://localhost:8080/ 로 접속하면 index.html을 보여줌
        // return 해서 index1.html을 보여줌
        @GetMapping("/") // http://인터넷 서버주소
        public String index() {
            return "index1";
        }

        // http://localhost:80/index1 로 접속하면 index1.html을 보여줌
        @GetMapping("/index1")
        public String index1() {
            return "index1";
        }

        // http://localhost:80/hello 로 접속하면 index1.html을 보여줌
        @GetMapping("/hello")
        public String hello() {
            return "index1";
        }
    }
    */
}
