package com.billingApp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.billingApp.backend.entity.Users;

public interface UsersRepository extends JpaRepository<Users, Integer> {

}
