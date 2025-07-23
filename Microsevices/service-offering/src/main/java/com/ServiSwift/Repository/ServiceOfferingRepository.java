package com.ServiSwift.Repository;
import com.ServiSwift.Model.ServiceOffering;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
public interface ServiceOfferingRepository extends JpaRepository<ServiceOffering, Long> {
    List<ServiceOffering> findBySalonId(Long salonId);
    List<ServiceOffering> findByCategoryId(Long categoryId);
}