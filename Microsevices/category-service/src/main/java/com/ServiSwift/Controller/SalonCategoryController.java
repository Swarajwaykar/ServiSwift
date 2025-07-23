package com.ServiSwift.Controller;

import com.ServiSwift.DTO.SalonDTO;
import com.ServiSwift.Model.Category;
import com.ServiSwift.Service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/categories/salon-owner")
public class SalonCategoryController {
    private final CategoryService categoryService;
    @PostMapping()
    public ResponseEntity<Category> createCategory(
            @RequestBody Category category
    ) {
        SalonDTO salonDTO = new SalonDTO();
        salonDTO.setId(1L);
        salonDTO.setName(category.getName());

        Category savedCategory = categoryService.saveCategory(category, salonDTO);
        return ResponseEntity.ok(savedCategory);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCategory(
            @PathVariable Long id
    ) throws Exception {
        SalonDTO salonDTO = new SalonDTO();
        salonDTO.setId(1L);

        categoryService.deletCategoryById(id, salonDTO.getId());
        return ResponseEntity.ok("Category deleted successfully");
    }


}
