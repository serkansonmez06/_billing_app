package com.billingApp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.billingApp.backend.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

}
