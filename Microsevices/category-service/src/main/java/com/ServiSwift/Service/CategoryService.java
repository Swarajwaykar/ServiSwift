package com.ServiSwift.Service;

import com.ServiSwift.DTO.SalonDTO;
import com.ServiSwift.Model.Category;

import java.util.Set;

public interface CategoryService {
    Category saveCategory(Category category, SalonDTO salonDTO);
    Set<Category>getAllCategoryBySalon(Long id);
    Category getCatrgoryBySalon(Long id) throws Exception;
    void deletCategoryById(Long id, Long salonId) throws Exception;

}
