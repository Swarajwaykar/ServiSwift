package com.ServiSwift.Service;

import com.ServiSwift.DTO.PaymentDTO;

public interface PaymentService {
    PaymentDTO createPaymentLink(PaymentDTO dto);
    PaymentDTO getPaymentById(Long id);
    PaymentDTO proceedPayment(Long id);
}
