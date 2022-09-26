package com.billingApp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.billingApp.backend.entity.InvoiceInfo;

public interface InvoiceRepository extends JpaRepository<InvoiceInfo, Integer> {

}
