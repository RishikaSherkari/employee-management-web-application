package com.rishika.employeemanagement.service;

import com.rishika.employeemanagement.dto.RegisterRequest;
import com.rishika.employeemanagement.entity.User;
import com.rishika.employeemanagement.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.rishika.employeemanagement.dto.LoginRequest;
import com.rishika.employeemanagement.dto.LoginResponse;
import com.rishika.employeemanagement.security.JwtService;
import org.springframework.stereotype.Service;

@Service
public class AuthService 
{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository,PasswordEncoder passwordEncoder, JwtService jwtService) 
    {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public User registerUser(RegisterRequest request) 
    {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) 
        {
            throw new RuntimeException("Email already registered");
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        String hashedPassword =
                passwordEncoder.encode(request.getPassword());

        user.setPassword(hashedPassword);

        return userRepository.save(user);
    }

    public LoginResponse loginUser(LoginRequest request)
    {
        User user = userRepository.findByEmail(request.getEmail()).orElseThrow(()-> new RuntimeException("Invalid email or password"));

        if(!passwordEncoder.matches(request.getPassword(), user.getPassword()))
        {
            throw new RuntimeException("Invalid email or password");
        }

        String token = jwtService.generateToken(user.getEmail());

          return new LoginResponse(user.getId(),user.getName(),user.getEmail(),token);

    }
}