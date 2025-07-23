package com.ServiSwift.Controller;



import com.ServiSwift.DTO.EmailRequest;
import com.ServiSwift.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@CrossOrigin("*")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public String send(@RequestBody EmailRequest request) {
        return emailService.sendEmail(request);
    }
}

