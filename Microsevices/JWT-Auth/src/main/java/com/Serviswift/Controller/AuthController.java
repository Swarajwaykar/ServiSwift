package com.ServiSwift.Controller;

import com.ServiSwift.DTO.AuthRequest;
import com.ServiSwift.DTO.AuthResponse;
import com.ServiSwift.DTO.RegisterRequest;
import com.ServiSwift.Repository.UserRepository;
import com.ServiSwift.Service.AuthService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
@Data
public class AuthController {

    private final AuthService authService;
    private final UserRepository userRepository;



    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        AuthResponse response = authService.register(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        AuthResponse response = authService.login(request);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/google")
    public ResponseEntity<AuthResponse> googleAuth(@RequestBody RegisterRequest request) {
        if (!userRepository.existsByEmail(request.getEmail())) {
            authService.register(request);
        }
        AuthRequest loginReq = new AuthRequest(request.getEmail(), request.getPassword());
        return ResponseEntity.ok(authService.login(loginReq));
    }

    @GetMapping("/hello")
    public String test() {
        return "Hello, Secured World! 🔐";
    }
}
