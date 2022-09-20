package com.sonmez.soccerOne.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sonmez.soccerOne.entity.Admin;
import com.sonmez.soccerOne.exception.ResourceNotFoundException;
import com.sonmez.soccerOne.repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	private AdminRepository adminRepository;

	public Admin saveAdmin(Admin admin) {
		if (admin.getEmail() == null && admin.getPassword() == null) {
			throw new ResourceNotFoundException("Admin email can not be null");

		}
		return adminRepository.save(admin);
	}

	public List<Admin> getAdmin() {
		return adminRepository.findAll();
	}

	public Optional<Admin> getAdmin(int id) {
		Admin existingAuthor = adminRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("item not found! Cant get by id number: " + id));

		return adminRepository.findById(id);
	}

	public ResponseEntity<Admin> deleteAdmin(int id) {
		Admin existingUser = adminRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Admin info did not find to delete by id number: " + id));

		adminRepository.delete(existingUser);
		return ResponseEntity.ok().build();
	}

	public Admin updateAdmin(Admin admin) {
		Admin existingAdmin = adminRepository.findById(admin.getId()).orElseThrow(
				() -> new ResourceNotFoundException("Cant update data for requested id number: " + admin.getId()));
		existingAdmin.setPassword(admin.getPassword());
		existingAdmin.setEmail(admin.getEmail());

		return adminRepository.save(existingAdmin);

	}
}
