package com.ServiSwift.Model;



import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long customerId;
    private Long salonId;
    private Long serviceId;
    private LocalTime bookingTime;
    private LocalDate bookingDate;
    private String serviceName;
    private String status; // e.g., BOOKED, COMPLETED, CANCELLED
}

