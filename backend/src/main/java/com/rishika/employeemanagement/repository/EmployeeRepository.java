package com.rishika.employeemanagement.repository;

import com.rishika.employeemanagement.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long>
{
    @Query ("""
            SELECT e FROM Employee e
       WHERE (:name IS NULL OR LOWER(e.name) LIKE LOWER(CONCAT('%', :name, '%')))
       AND (:department IS NULL OR LOWER(e.department) LIKE LOWER(CONCAT('%', :department, '%')))
            """)
        
    List<Employee>searchEmployees(@Param ("name") String name, @Param ("department") String department);
}


