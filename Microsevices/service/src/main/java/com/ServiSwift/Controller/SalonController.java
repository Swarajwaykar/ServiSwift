package com.ServiSwift.Controller;

import com.ServiSwift.Mapper.SalonMapper;
import com.ServiSwift.Model.Salon;
import com.ServiSwift.Payload.DTO.SalonDTO;
import com.ServiSwift.Payload.DTO.UserDTO;
import com.ServiSwift.Service.SalonService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/salons")
public class SalonController {
    private final SalonService salonService;

    public SalonController(SalonService salonService) {
        this.salonService = salonService;
    }

    @PostMapping
    public ResponseEntity<SalonDTO> createSalon(@RequestBody SalonDTO salonDTO){
        UserDTO userDTO = new UserDTO();
        userDTO.setId(1L);

        Salon salon = salonService.createSalon(salonDTO,userDTO);
        SalonDTO salonDTO1= SalonMapper.mapToDTO(salon);
        return ResponseEntity.ok(salonDTO1);
    }
    @PutMapping("/{id}")
    public ResponseEntity<SalonDTO> updateSalon(@RequestBody SalonDTO salonDTO, @PathVariable Long id) throws Exception {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(1L); // Replace with actual logged-in user ID
            Salon salon = salonService.UpdateSalon(salonDTO, userDTO, id);
            SalonDTO salonDTO1 = SalonMapper.mapToDTO(salon);
            return ResponseEntity.ok(salonDTO1);

    }
    @GetMapping
    public ResponseEntity<List<SalonDTO>> getAllSalons() {
        List<Salon> salons = salonService.getAllSalons();
        List<SalonDTO> salonDTOs = salons.stream()
                .map(SalonMapper::mapToDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(salonDTOs);
    }
    @GetMapping("/{id}")
    public ResponseEntity<SalonDTO> getSalonById(@PathVariable Long id) throws Exception {
        Salon salon = salonService.getSalonById(id);
        SalonDTO salonDTO = SalonMapper.mapToDTO(salon);
        return ResponseEntity.ok(salonDTO);
    }
    @GetMapping("/search")
    public ResponseEntity<?> searchSalon(@RequestParam("city") String keyword) {
        var salons = salonService.searchSalonByCity(keyword)
                .stream()
                .map(SalonMapper::mapToDTO)
                .toList();

        return ResponseEntity.ok(salons);
    }
    @GetMapping("/owner/{ownerId}")
    public ResponseEntity<SalonDTO> getSalonByOwnerId(@PathVariable Long ownerId) 
        Salon salon = salonService.getSalonByOwnerId(ownerId);

        if (salon == null) {
            return ResponseEntity.notFound().build();
        }

        SalonDTO salonDTO = SalonMapper.mapToDTO(salon);
        return ResponseEntity.ok(salonDTO);
    }




}
