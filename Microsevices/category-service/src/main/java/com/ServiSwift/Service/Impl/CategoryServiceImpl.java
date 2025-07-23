package com.ServiSwift.Service.Impl;

import com.ServiSwift.DTO.SalonDTO;
import com.ServiSwift.Model.Category;
import com.ServiSwift.Repository.CategoryRepository;
import com.ServiSwift.Service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Set;
@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;
    @Override
    public Category saveCategory(Category category, SalonDTO salonDTO) {
        Category newCategory =new Category();
        newCategory.setName(category.getName());
        newCategory.setSalonId(salonDTO.getId());
        newCategory.setImage(category.getImage());
        return categoryRepository.save(newCategory);
    }

    @Override
    public Set<Category> getAllCategoryBySalon(Long id) {
        return categoryRepository.findBySalonId(id);
    }

    @Override
    public Category getCatrgoryBySalon(Long id) throws Exception {
        Set<Category> categorySet = categoryRepository.findBySalonId(id);
        if (categorySet.isEmpty()) {
            throw new Exception("Category does not exist with id: " + id);
        }

        return categorySet.iterator().next(); // Return the first one
    }


    @Override
    public void deletCategoryById(Long id, Long salonId) throws Exception {
        Category category = getCatrgoryBySalon(id);
        if(!category.getSalonId().equals(salonId)){
            throw new Exception("You dont have permission to delete");
        }
        categoryRepository.deleteById(id);

    }
}
