package com.ServiSwift.Exception;

import com.ServiSwift.Payload.responce.ExceptionResponce;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandller {
    @ExceptionHandler(Exception.class)
public ResponseEntity<ExceptionResponce> ExceptionHandller(Exception ex, WebRequest req){
    ExceptionResponce responce = new ExceptionResponce(
            ex.getMessage(),
            req.getDescription(false), LocalDateTime.now()
    );
    return ResponseEntity.ok(responce);
}
}
