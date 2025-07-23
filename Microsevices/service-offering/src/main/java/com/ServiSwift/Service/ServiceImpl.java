package com.ServiSwift.Service;

import com.ServiSwift.Model.ServiceOffering;
import com.ServiSwift.Repository.ServiceOfferingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceImpl implements ServiceOfferingService {

    @Autowired
    private ServiceOfferingRepository repository;

    @Override
    public ServiceOffering addServiceOffering(ServiceOffering offering) {
        return repository.save(offering);
    }

    @Override
    public List<ServiceOffering> getAllOfferings() {
        return repository.findAll();
    }

    @Override
    public Optional<ServiceOffering> getOfferingById(Long id) {
        return repository.findById(id);
    }

    @Override
    public List<ServiceOffering> getBySalonId(Long salonId) {
        return repository.findBySalonId(salonId);
    }

    @Override
    public List<ServiceOffering> getByCategoryId(Long categoryId) {
        return repository.findByCategoryId(categoryId);
    }

    @Override
    public void deleteOffering(Long id) {
        repository.deleteById(id);
    }

    @Override
    public ServiceOffering updateOffering(Long id, ServiceOffering updated) {
        ServiceOffering existing = repository.findById(id).orElseThrow();
        updated.setId(existing.getId());
        return repository.save(updated);
    }
}
