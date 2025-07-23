package com.serviswift.booking.controller;

import com.ServiSwift.DTO.BookingDTO;

import com.ServiSwift.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin("*")
public class BookingController {

    @Autowired
    private BookingService service;

    @PostMapping
    public BookingDTO create(@RequestBody BookingDTO booking) {
        return service.createBooking(booking);
    }

    @GetMapping("/customer/{customerId}")
    public List<BookingDTO> getByCustomer(@PathVariable Long customerId) {
        return service.getBookingsByCustomer(customerId);
    }

    @GetMapping("/salon/{salonId}")
    public List<BookingDTO> getBySalon(@PathVariable Long salonId) {
        return service.getBookingsBySalon(salonId);
    }

    @GetMapping("/salon/{salonId}/date/{date}")
    public List<BookingDTO> getByDate(@PathVariable Long salonId, @PathVariable String date) {
        return service.getBookingsByDate(salonId, LocalDate.parse(date));
    }

    @GetMapping("/{id}")
    public BookingDTO getById(@PathVariable Long id) {
        return service.getBookingById(id);
    }

    @PutMapping("/{id}/status")
    public BookingDTO updateStatus(@PathVariable Long id, @RequestParam String status) {
        return service.updateStatus(id, status);
    }
}
