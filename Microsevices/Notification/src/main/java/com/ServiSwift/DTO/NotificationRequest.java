package com.ServiSwift.DTO;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class NotificationRequest {
    private Long userId;
    private String type;    // "BOOKING_CONFIRMED", "PAYMENT_SUCCESS", "BOOKING_CANCELLED"
    private String message; // Actual message content
}
