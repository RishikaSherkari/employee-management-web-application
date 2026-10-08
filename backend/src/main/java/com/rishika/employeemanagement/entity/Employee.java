package com.rishika.employeemanagement.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDate;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "employees")
public class Employee
{
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

 @NotBlank(message = "Employee name is required")
 private String name;

 @NotBlank(message = "Department is required")
 private String department;

 @NotNull(message = "Salary is required")
 @DecimalMin(value = "0.01", message = "Salary must be greater than 0")
 private BigDecimal salary;

 @NotNull(message = "Date is required")
 private LocalDate date;

    public Employee()
    {

    }

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getDepartment()
    {
        return department;
    }

    public void setDepartment(String department)
    {
        this.department = department;
    }

    public BigDecimal getSalary()
    {
        return salary;
    }

    public void setSalary(BigDecimal salary)
    {
        this.salary = salary;
    }

    public LocalDate getDate()
    {
        return date;
    }

    public void setDate(LocalDate date)
    {
        this.date = date;
    } 
}
