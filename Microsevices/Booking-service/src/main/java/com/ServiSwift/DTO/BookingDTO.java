package com.ServiSwift.DTO;


import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class BookingDTO {
    private Long id;
    private Long salonId;
    private Long customerId;
    private Long serviceId;
    private LocalDate bookingDate;
    private LocalTime bookingTime;
    private String status;
}

