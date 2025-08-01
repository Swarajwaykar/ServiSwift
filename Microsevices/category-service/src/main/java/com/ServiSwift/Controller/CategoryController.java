package com.ServiSwift.Controller;

import com.ServiSwift.Model.Category;
import com.ServiSwift.Service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;
    @GetMapping("/salon/{id}")
    public ResponseEntity<Set<Category>> getCategoriesBySalon(
            @PathVariable Long id
    ) {
        Set<Category> categories = categoryService.getAllCategoryBySalon(id);
        return ResponseEntity.ok(categories);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(
            @PathVariable Long id
    ) throws Exception {
        Category category = categoryService.getCatrgoryBySalon(id);
        return ResponseEntity.ok(category);
    }


}
