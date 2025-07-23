package com.ServiSwift.Service;

import com.ServiSwift.DTO.PaymentDTO;
import com.ServiSwift.Model.Payment;
import com.ServiSwift.Repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepository repo;

    @Override
    public PaymentDTO createPaymentLink(PaymentDTO dto) {
        Payment payment = new Payment();
        payment.setBookingId(dto.getBookingId());
        payment.setAmount(dto.getAmount());
        payment.setStatus("PENDING");
        payment.setPaymentLink("http://mock-payment.com/pay/" + dto.getBookingId());
        payment.setCreatedAt(LocalDateTime.now());
        return mapToDTO(repo.save(payment));
    }

    @Override
    public PaymentDTO getPaymentById(Long id) {
        return mapToDTO(repo.findById(id).orElseThrow());
    }

    @Override
    public PaymentDTO proceedPayment(Long id) {
        Payment payment = repo.findById(id).orElseThrow();
        payment.setStatus("SUCCESS");
        return mapToDTO(repo.save(payment));
    }

    private PaymentDTO mapToDTO(Payment payment) {
        PaymentDTO dto = new PaymentDTO();
        dto.setId(payment.getId());
        dto.setBookingId(payment.getBookingId());
        dto.setAmount(payment.getAmount());
        dto.setStatus(payment.getStatus());
        dto.setPaymentLink(payment.getPaymentLink());
        dto.setCreatedAt(payment.getCreatedAt());
        return dto;
    }
}
