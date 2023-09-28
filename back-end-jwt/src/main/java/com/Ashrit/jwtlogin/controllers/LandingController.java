package com.Ashrit.jwtlogin.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController

public class LandingController {

    @GetMapping("/messages")
    public ResponseEntity<List<String>> getMessages(){
        return ResponseEntity.ok(Arrays.asList("Hello","You have successfully logged in"));
    }
}
