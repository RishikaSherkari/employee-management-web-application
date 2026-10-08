package com.rishika.employeemanagement.service;

import com.rishika.employeemanagement.entity.Employee;
import com.rishika.employeemanagement.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import com.rishika.employeemanagement.exception.EmployeeNotFoundException;
import java.util.List;


@Service
public class EmployeeService
{
    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository)
    {
        this.employeeRepository = employeeRepository;
    }

    public Employee createEmployee(Employee employee)
    {
        return employeeRepository.save(employee);
    }

    public List<Employee> getALLEmployees()
    {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(Long id)
    {
        return employeeRepository.findById(id).orElseThrow(()-> new EmployeeNotFoundException("Employee not found with id:" + id));
    }

    public Employee updateEmployee(Long id, Employee employee)
    {
        Employee existingEmployee = employeeRepository.findById(id).orElseThrow(()-> new EmployeeNotFoundException("Employee not found with id:" + id));

        existingEmployee.setName(employee.getName());
        existingEmployee.setDepartment(employee.getDepartment());
        existingEmployee.setSalary(employee.getSalary());
        existingEmployee.setDate(employee.getDate());

        return employeeRepository.save(existingEmployee);
    }

    public void deleteEmployee(Long id)
    {
        if(!employeeRepository.existsById(id))
        {
            throw new EmployeeNotFoundException("Employee not found with id:" +id);
        }

        employeeRepository.deleteById(id);
    }

    public List<Employee> searchEmployees(String name, String department)
    {
        return employeeRepository.searchEmployees(name, department);
    }
}
