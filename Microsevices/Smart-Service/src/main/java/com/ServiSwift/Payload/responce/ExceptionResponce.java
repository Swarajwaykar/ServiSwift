package com.ServiSwift.Payload.responce;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ExceptionResponce {
    private String message;
    private String error;
    private LocalDateTime timestamp;


}
