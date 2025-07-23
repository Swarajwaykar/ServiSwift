package com.ServiSwift.Mapper;

import com.ServiSwift.Model.Salon;
import com.ServiSwift.Payload.DTO.SalonDTO;

public class SalonMapper {
    public static SalonDTO mapToDTO(Salon salon){
        if (salon == null) return null;

        SalonDTO salondto = new SalonDTO();
        salondto.setId(salon.getId());
        salondto.setName(salon.getName());
        salondto.setAddress(salon.getAddress());
        salondto.setCity(salon.getCity());
        salondto.setEmail(salon.getEmail());
        salondto.setImages(salon.getImages());

        // Convert LocalTime to String
        salondto.setOpenTime(salon.getOpenTime());
        salondto.setCloseTime(salon.getCloseTime());

        salondto.setPhone(salon.getPhone());
        salondto.setOwnerId(salon.getOwnerId());

        return salondto;
    }
}
