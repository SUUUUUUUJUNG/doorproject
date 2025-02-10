package com.example.doorproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DoorController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("title", "비밀의 문 열기");
        return "index";
    }
}
