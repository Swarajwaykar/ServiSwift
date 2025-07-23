package com.ServiSwift.Service.impl;

import com.ServiSwift.Model.Salon;
import com.ServiSwift.Payload.DTO.SalonDTO;
import com.ServiSwift.Payload.DTO.UserDTO;
import com.ServiSwift.Repository.SalonRepository;
import com.ServiSwift.Service.SalonService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SalonServiceImpl implements SalonService {

    private final SalonRepository salonRepository;

    @Override
    public Salon createSalon(SalonDTO req, UserDTO user) {
        if (req.getOpenTime() == null || req.getCloseTime() == null) {
            throw new IllegalArgumentException("Open time and close time cannot be null");
        }

        Salon salon = new Salon();
        salon.setName(req.getName());
        salon.setAddress(req.getAddress());
        salon.setEmail(req.getEmail());
        salon.setCity(req.getCity());
        salon.setImages(req.getImages());
        salon.setOwnerId(user.getId());
        salon.setPhone(req.getPhone());
        salon.setOpenTime(req.getOpenTime());
        salon.setCloseTime(req.getCloseTime());

        return salonRepository.save(salon);
    }

    @Override
    public Salon UpdateSalon(SalonDTO salonDTO, UserDTO user, Long salonId) throws Exception {
        Salon existingSalon = salonRepository.findById(salonId).orElse(null);

        if (existingSalon != null && existingSalon.getOwnerId().equals(user.getId())) {
            existingSalon.setCity(salonDTO.getCity());
            existingSalon.setName(salonDTO.getName());
            existingSalon.setAddress(salonDTO.getAddress());
            existingSalon.setEmail(salonDTO.getEmail());
            existingSalon.setImages(salonDTO.getImages());
            existingSalon.setOpenTime(salonDTO.getOpenTime());
            existingSalon.setCloseTime(salonDTO.getCloseTime());
            existingSalon.setPhone(salonDTO.getPhone());
            existingSalon.setOwnerId(user.getId());

            return salonRepository.save(existingSalon);
        }

        throw new Exception("Salon does not exist or access denied");
    }

    @Override
    public List<Salon> getAllSalons() {
        return salonRepository.findAll();
    }

    @Override
    public Salon getSalonById(Long salonId) throws Exception {
        return salonRepository.findById(salonId)
                .orElseThrow(() -> new Exception("Salon not present"));
    }

    @Override
    public Salon getSalonByOwnerId(Long ownerId) {
        return salonRepository.findByOwnerId(ownerId);
    }

    @Override
    public List<Salon> searchSalonByCity(String city) {
        return salonRepository.searchSalons(city);
    }
}
