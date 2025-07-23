package com.ServiSwift.Controller;

import com.ServiSwift.Exception.UserException;
import com.ServiSwift.Model.User;
import com.ServiSwift.Repository.UserRepository;
import com.ServiSwift.Service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class UserController {
    @PostMapping("/api/users")
    public ResponseEntity<User> createuser(@RequestBody @Valid User user) {
       User createdUser= userService.createUser(user);
       return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

   private final UserService userService;

    @GetMapping("/api/users")
    public ResponseEntity<List<User>> getUser() {
        List<User> users=userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);

    }

    @GetMapping("/api/users/{id}")
    public ResponseEntity<User> getuserByid(@PathVariable Long id) throws Exception {
        User user=userService.getUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);

    }

    @PutMapping("/api/users/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable Long id) throws Exception {
        User updateduser=userService.updateUser(id,user);
        return new ResponseEntity<>(updateduser, HttpStatus.OK);


    }

    @DeleteMapping("/api/users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) throws Exception {
         userService.deleteUser(id);
         return new ResponseEntity<>("User Deleted",HttpStatus.ACCEPTED);
    }
}
