package com.ServiSwift.Service;

import com.ServiSwift.Exception.UserException;
import com.ServiSwift.Model.User;

import java.util.List;

public interface UserService {
    User createUser(User user);
    User getUserById(Long id) throws UserException;
    List<User> getAllUsers();
    void deleteUser(Long id) throws UserException;
    User updateUser(Long id,User user) throws UserException;
}
