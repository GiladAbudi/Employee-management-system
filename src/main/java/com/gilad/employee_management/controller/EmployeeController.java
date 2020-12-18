package com.gilad.employee_management.controller;

import com.gilad.employee_management.model.Employee;
import com.gilad.employee_management.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

     @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
         return employeeRepository.findAll();
     }
}
