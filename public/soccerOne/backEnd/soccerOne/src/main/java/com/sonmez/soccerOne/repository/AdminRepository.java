package com.sonmez.soccerOne.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sonmez.soccerOne.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

}
