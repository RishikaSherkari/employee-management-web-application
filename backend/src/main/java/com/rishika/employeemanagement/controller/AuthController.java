package com.rishika.employeemanagement.controller;

import com.rishika.employeemanagement.dto.RegisterRequest;
import com.rishika.employeemanagement.entity.User;
import com.rishika.employeemanagement.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;
import com.rishika.employeemanagement.dto.RegisterResponse;
import com.rishika.employeemanagement.dto.LoginRequest;
import com.rishika.employeemanagement.dto.LoginResponse;

@RestController
@RequestMapping("/api/auth")
public class AuthController 
{

    private final AuthService authService;

    public AuthController(AuthService authService) 
    {
        this.authService = authService;
    }

    @PostMapping("/register")
    public RegisterResponse register(@Valid @RequestBody RegisterRequest request)
    {
        User user = authService.registerUser(request);

        return new RegisterResponse(user.getId(), user.getName(), user.getEmail());
    }

    @PostMapping ("/login")
    public LoginResponse login(@Valid @RequestBody LoginRequest request)
    {
        return authService.loginUser(request);
    }
    

}