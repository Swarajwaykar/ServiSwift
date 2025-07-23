package com.ServiSwift.Service;

import com.ServiSwift.DTO.BookingDTO;
import com.ServiSwift.Model.Booking;
import com.ServiSwift.Repository.BookingRepository;
import com.ServiSwift.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingServiceImpl implements BookingService {

    @Autowired
    private BookingRepository repository;

    @Override
    public BookingDTO createBooking(BookingDTO dto) {
        Booking booking = mapToEntity(dto);
        return mapToDTO(repository.save(booking));
    }

    @Override
    public List<BookingDTO> getBookingsByCustomer(Long customerId) {
        return repository.findByCustomerId(customerId).stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<BookingDTO> getBookingsBySalon(Long salonId) {
        return repository.findBySalonId(salonId).stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<BookingDTO> getBookingsByDate(Long salonId, LocalDate date) {
        return repository.findBySalonIdAndBookingDate(salonId, date).stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public BookingDTO getBookingById(Long id) {
        Booking booking = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking with ID " + id + " not found."));
        return mapToDTO(booking);
    }


    @Override
    public BookingDTO updateStatus(Long id, String status) {
        Booking booking = repository.findById(id).orElseThrow();
        booking.setStatus(status);
        return mapToDTO(repository.save(booking));
    }

    // DTO -> Entity
    private Booking mapToEntity(BookingDTO dto) {
        Booking b = new Booking();
        b.setId(dto.getId());
        b.setSalonId(dto.getSalonId());
        b.setCustomerId(dto.getCustomerId());
        b.setServiceId(dto.getServiceId());
        b.setBookingDate(dto.getBookingDate());
        b.setBookingTime(dto.getBookingTime());
        b.setStatus(dto.getStatus());
        return b;
    }

    // Entity -> DTO
    private BookingDTO mapToDTO(Booking booking) {
        BookingDTO dto = new BookingDTO();
        dto.setId(booking.getId());
        dto.setSalonId(booking.getSalonId());
        dto.setCustomerId(booking.getCustomerId());
        dto.setServiceId(booking.getServiceId());
        dto.setBookingDate(booking.getBookingDate());
        dto.setBookingTime(booking.getBookingTime());
        dto.setStatus(booking.getStatus());
        return dto;
    }
}
