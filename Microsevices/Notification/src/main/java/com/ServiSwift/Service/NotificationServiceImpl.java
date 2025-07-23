package com.ServiSwift.Service;

import com.ServiSwift.DTO.NotificationRequest;
import com.ServiSwift.Model.Notification;
import com.ServiSwift.Repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class NotificationServiceImpl implements NotificationService {

    @Autowired
    private NotificationRepository repository;

    @Override
    public void sendNotification(NotificationRequest request) {
        Notification notification = Notification.builder()
                .userId(request.getUserId())
                .type(request.getType())
                .message(request.getMessage())
                .timestamp(LocalDateTime.now())
                .build();
        repository.save(notification);
    }
}
