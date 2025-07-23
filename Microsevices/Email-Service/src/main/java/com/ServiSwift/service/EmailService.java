package com.ServiSwift.service;



import com.ServiSwift.DTO.EmailRequest;

public interface EmailService {
    String sendEmail(EmailRequest request);
}

