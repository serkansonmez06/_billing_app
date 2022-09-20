package com.sonmez.soccerOne.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sonmez.soccerOne.entity.Admin;
import com.sonmez.soccerOne.service.AdminService;

@RestController

@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

	@Autowired
	private AdminService adminService;

	@PostMapping("/saveAdmin")
	public Admin addAdmin(@RequestBody Admin admin) {
		return adminService.saveAdmin(admin);
	}

	@GetMapping("/admin")
	public List<Admin> findAdmins() {
		return adminService.getAdmin();
	}

	@GetMapping("/admin/{id}")
	public Optional<Admin> findAuthorById(@PathVariable int id) {
		return adminService.getAdmin(id);
	}

	@PutMapping("/updateAdmin") // update
	public Admin updateAdmin(@Valid @RequestBody Admin admin) {
		return adminService.updateAdmin(admin);
	}

	@DeleteMapping("/admin/{id}")
	public ResponseEntity<Admin> deleteAdmin(@PathVariable int id) {
		return adminService.deleteAdmin(id);
	}
}
