package com.ServiSwift.Service;



import com.ServiSwift.Model.Booking;

import java.time.LocalDate;
import java.util.List;


import com.ServiSwift.DTO.BookingDTO;
import java.time.LocalDate;
import java.util.List;

public interface BookingService {
    BookingDTO createBooking(BookingDTO bookingDTO);
    List<BookingDTO> getBookingsByCustomer(Long customerId);
    List<BookingDTO> getBookingsBySalon(Long salonId);
    List<BookingDTO> getBookingsByDate(Long salonId, LocalDate date);
    BookingDTO getBookingById(Long id);
    BookingDTO updateStatus(Long id, String status);
}

