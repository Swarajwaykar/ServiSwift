package com.ServiSwift.Controller;

import com.ServiSwift.DTO.NotificationRequest;
import com.ServiSwift.Service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notifications")
@CrossOrigin("*")
public class NotificationController {

    @Autowired
    private NotificationService service;

    @PostMapping
    public void send(@RequestBody NotificationRequest request) {
        service.sendNotification(request);
    }
}
