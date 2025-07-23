package com.ServiSwift.Model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private String type; // e.g. BOOKING_CONFIRMED, PAYMENT_SUCCESS
    private String message;
    private LocalDateTime timestamp;
}
