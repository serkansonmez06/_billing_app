package com.billingApp.backend.controller;

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

import com.billingApp.backend.entity.InvoiceInfo;
import com.billingApp.backend.service.InvoiceService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class InvoiceController {

	@Autowired
	private InvoiceService invoiceService;

	@PostMapping("/save")
	public InvoiceInfo addInvoice(@Valid @RequestBody InvoiceInfo invoiceInfo) {
		return invoiceService.saveInvoice(invoiceInfo);
	}

	@GetMapping("/invoices")
	public List<InvoiceInfo> findAllInvoices() {
		return invoiceService.getInvoiceInfos();

	}

	@GetMapping("/invoices/{Id}")
	public Optional<InvoiceInfo> findInvoiceByCustomerId(@PathVariable int Id) {
		return invoiceService.getInvoiceById(Id);
	}

	@PutMapping("/update")
	public InvoiceInfo updateInvoiceInfo(@Valid @RequestBody InvoiceInfo invoiceInfo) {
		return invoiceService.updateInvoiceInfo(invoiceInfo);
	}

	@DeleteMapping("/invoices/{Id}")
	public ResponseEntity<InvoiceInfo> deleteInvoice(@PathVariable int Id) {
		return invoiceService.deleteInvoiceInfo(Id);
	}

}
