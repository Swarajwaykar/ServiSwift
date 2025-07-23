package com.ServiSwift.Repository;

import com.ServiSwift.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long>{
}
