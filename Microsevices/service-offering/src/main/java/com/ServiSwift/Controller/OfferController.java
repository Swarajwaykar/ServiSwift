package com.ServiSwift.Controller;

import com.ServiSwift.Model.ServiceOffering;
import com.ServiSwift.Service.ServiceOfferingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/service-offerings")
@CrossOrigin("*")
public class OfferController {

    @Autowired
    private ServiceOfferingService service;

    @PostMapping
    public ServiceOffering create(@RequestBody ServiceOffering offering) {
        return service.addServiceOffering(offering);
    }

    @GetMapping
    public List<ServiceOffering> getAll() {
        return service.getAllOfferings();
    }

    @GetMapping("/{id}")
    public ServiceOffering getById(@PathVariable Long id) {
        return service.getOfferingById(id).orElseThrow();
    }

    @GetMapping("/salon/{salonId}")
    public List<ServiceOffering> getBySalon(@PathVariable Long salonId) {
        return service.getBySalonId(salonId);
    }

    @GetMapping("/category/{categoryId}")
    public List<ServiceOffering> getByCategory(@PathVariable Long categoryId) {
        return service.getByCategoryId(categoryId);
    }

    @PutMapping("/{id}")
    public ServiceOffering update(@PathVariable Long id, @RequestBody ServiceOffering offering) {
        return service.updateOffering(id, offering);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteOffering(id);
    }
}
