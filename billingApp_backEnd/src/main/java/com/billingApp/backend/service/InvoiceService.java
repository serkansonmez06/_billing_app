package com.billingApp.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.billingApp.backend.entity.InvoiceInfo;
import com.billingApp.backend.exceptions.ResourceNotFoundException;
import com.billingApp.backend.repository.InvoiceRepository;

@Service
public class InvoiceService {

	@Autowired
	private InvoiceRepository invoiceRepository;

	public InvoiceInfo saveInvoice(InvoiceInfo invoiceInfo) {
		return invoiceRepository.save(invoiceInfo);
	};

	public List<InvoiceInfo> getInvoiceInfos() {
		return invoiceRepository.findAll();
	};

	public Optional<InvoiceInfo> getInvoiceById(int Id) {
		InvoiceInfo existingInvoiceInfo = invoiceRepository.findById(Id).orElseThrow(
				() -> new ResourceNotFoundException("item is not found by provided sutomer id number" + Id));
		return invoiceRepository.findById(Id);
	}

	public ResponseEntity<InvoiceInfo> deleteInvoiceInfo(int Id) {
		InvoiceInfo existingInvoiceInfo = invoiceRepository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("there is no existing customer id"));
		invoiceRepository.delete(existingInvoiceInfo);
		return ResponseEntity.ok().build();
	}

	public InvoiceInfo updateInvoiceInfo(InvoiceInfo invoiceInfo) {

		InvoiceInfo existingInvoiceInfo = invoiceRepository.findById(invoiceInfo.getId())
				.orElseThrow(() -> new ResourceNotFoundException(
						"Cant update data for requested id number: " + invoiceInfo.getId()));
		existingInvoiceInfo.setName(invoiceInfo.getName());
		existingInvoiceInfo.setPhone(invoiceInfo.getPhone());
		existingInvoiceInfo.setEmail(invoiceInfo.getEmail());
		existingInvoiceInfo.setAddress(invoiceInfo.getAddress());
		existingInvoiceInfo.setCity(invoiceInfo.getCity());
		existingInvoiceInfo.setState(invoiceInfo.getState());
		existingInvoiceInfo.setAmount(invoiceInfo.getAmount());
		existingInvoiceInfo.setIssueDate(invoiceInfo.getIssueDate());

		return invoiceRepository.save(existingInvoiceInfo);

	}
}
