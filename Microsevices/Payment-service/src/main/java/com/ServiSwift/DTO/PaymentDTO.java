package com.ServiSwift.DTO;

import lombok.Data;

import java.time.LocalDateTime;
@Data
public class PaymentDTO {
    private Long id;
    private Long bookingId;
    private Double amount;
    private String status;
    private String paymentLink;
    private LocalDateTime createdAt;

    // Getters and Setters
}
