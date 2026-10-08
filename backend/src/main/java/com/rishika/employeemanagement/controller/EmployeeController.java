package com.rishika.employeemanagement.controller;

import com.rishika.employeemanagement.entity.Employee;
import com.rishika.employeemanagement.service.EmployeeService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import jakarta.validation.Valid;

import java.util.List;



@RestController 
@RequestMapping("/api/employees")
public class EmployeeController
{
    private final EmployeeService employeeService;

    public EmployeeController (EmployeeService employeeService)
    {
        this.employeeService = employeeService;
    }

    @PostMapping
    public Employee createEmployee(@Valid @RequestBody Employee employee) 
    {
        return employeeService.createEmployee(employee);
    }

    @GetMapping 
    public List<Employee> getALLEmployees()
    {
        return employeeService.getALLEmployees();
    }

    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Long id) 
    {
        return employeeService.getEmployeeById(id);
    }

    @GetMapping ("/search")
    public  List<Employee> searchEmployees(@RequestParam(required = false) String name, @RequestParam(required = false) String department)
    {
        return employeeService.searchEmployees(name, department);
    }

    @PutMapping ("/{id}")
    public Employee updatEmployee(@PathVariable Long id, @Valid @RequestBody Employee employee)
    {
        return employeeService.updateEmployee(id, employee);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id)
    {
        employeeService.deleteEmployee(id);
    }

}
