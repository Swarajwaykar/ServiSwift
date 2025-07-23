package com.ServiSwift.Controller;

import com.ServiSwift.DTO.PaymentDTO;
import com.ServiSwift.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin("*")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping
    public PaymentDTO create(@RequestBody PaymentDTO dto) {
        return paymentService.createPaymentLink(dto);
    }

    @GetMapping("/{id}")
    public PaymentDTO getById(@PathVariable Long id) {
        return paymentService.getPaymentById(id);
    }

    @PutMapping("/{id}/proceed")
    public PaymentDTO proceed(@PathVariable Long id) {
        return paymentService.proceedPayment(id);
    }
}
