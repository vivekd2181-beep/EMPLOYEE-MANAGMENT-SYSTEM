package com.example.employeecrud.service;

import com.example.employeecrud.entity.Employee;
import com.example.employeecrud.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    // Save Employee
    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    // Get All Employees
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }
    public Employee updateEmployee(Long id, Employee employeeDetails) {

    Employee employee = repository.findById(id).orElseThrow();

    employee.setName(employeeDetails.getName());
    employee.setDepartment(employeeDetails.getDepartment());
    employee.setSalary(employeeDetails.getSalary());
    employee.setDesignation(employeeDetails.getDesignation());

    return repository.save(employee);
}

    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }
}