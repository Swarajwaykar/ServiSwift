package com.ServiSwift.Service;

import com.ServiSwift.Model.ServiceOffering;

import java.util.List;
import java.util.Optional;

public interface ServiceOfferingService {
    ServiceOffering addServiceOffering(ServiceOffering offering);

    List<ServiceOffering> getAllOfferings();

    Optional<ServiceOffering> getOfferingById(Long id);

    List<ServiceOffering> getBySalonId(Long salonId);

    List<ServiceOffering> getByCategoryId(Long categoryId);

    void deleteOffering(Long id);

    ServiceOffering updateOffering(Long id, ServiceOffering updated);
}
