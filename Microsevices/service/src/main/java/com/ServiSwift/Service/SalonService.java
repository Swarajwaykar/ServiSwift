package com.ServiSwift.Service;

import com.ServiSwift.Model.Salon;
import com.ServiSwift.Payload.DTO.SalonDTO;
import com.ServiSwift.Payload.DTO.UserDTO;

import java.util.List;

public interface SalonService {
    Salon createSalon(SalonDTO salon, UserDTO user);
    Salon UpdateSalon(SalonDTO salon, UserDTO user,Long salonId) throws Exception;
    List<Salon> getAllSalons();
    Salon getSalonById(Long salonId) throws Exception;
    Salon getSalonByOwnerId(Long ownerId);
    List<Salon> searchSalonByCity(String city);
}
