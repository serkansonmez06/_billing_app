package com.billingApp.backend.entity;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "invoices")
public class InvoiceInfo {

	@Id
	private int id;
	private int customerId;
	private String name;
	private long phone;
	private String email;
	private String address;
	private String city;
	private String state;
	private int currentRead;
	private int previousRead;
	private int unitPrice;
	private double amount;
	private boolean paid;
	@DateTimeFormat(pattern = "YYYY-MM-DD")

	private LocalDate issueDate;

	@DateTimeFormat(pattern = "YYYY-MM-DD")
	private LocalDate dueDate;

	public InvoiceInfo() {

	}

	public InvoiceInfo(int id, int customerId, String name, long phone, String email, String address, String city,
			String state, int currentRead, int previousRead, int unitPrice, double amount, boolean paid,
			LocalDate issueDate, LocalDate dueDate) {
		super();
		this.id = id;
		this.customerId = customerId;
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.address = address;
		this.city = city;
		this.state = state;
		this.currentRead = currentRead;
		this.previousRead = previousRead;
		this.unitPrice = unitPrice;
		this.amount = amount;
		this.paid = paid;
		this.issueDate = issueDate;
		this.dueDate = dueDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getCurrentRead() {
		return currentRead;
	}

	public void setCurrentRead(int currentRead) {
		this.currentRead = currentRead;
	}

	public int getPreviousRead() {
		return previousRead;
	}

	public void setPreviousRead(int previousRead) {
		this.previousRead = previousRead;
	}

	public int getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(int unitPrice) {
		this.unitPrice = unitPrice;
	}

	public double getAmount() {
		this.amount = ((this.currentRead - this.previousRead) * this.unitPrice);

		return this.amount;
	}

	public void setAmount(double amount) {
		this.amount = ((this.currentRead - this.previousRead) * this.unitPrice);
	}

	public LocalDate getIssueDate() {
		return issueDate;
	}

	public void setIssueDate(LocalDate issueDate) {
		this.issueDate = issueDate;
	}

	public boolean isPaid() {
		return paid;
	}

	public void setPaid(boolean paid) {
		this.paid = paid;
	}

	public LocalDate getDueDate() {
		this.dueDate = this.issueDate.plus(14, ChronoUnit.DAYS);
		return dueDate;
	}

	public void setDueDate(LocalDate dueDate) {

		this.dueDate = this.issueDate.plus(14, ChronoUnit.DAYS);
	}

	@Override
	public String toString() {
		return "InvoiceInfo [id=" + id + ", customerId=" + customerId + ", name=" + name + ", phone=" + phone
				+ ", email=" + email + ", address=" + address + ", city=" + city + ", state=" + state + ", currentRead="
				+ currentRead + ", previousRead=" + previousRead + ", unitPrice=" + unitPrice + ", amount=" + amount
				+ ", paid=" + paid + ", issueDate=" + issueDate + ", dueDate=" + dueDate + "]";
	}

}
