package com.gilad.employee_management.controller;

import com.gilad.employee_management.model.Employee;
import com.gilad.employee_management.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

     @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
         return employeeRepository.findAll();
     }

     @PostMapping("/employees")
     public Employee createEmployee (@RequestBody Employee employee){
         return employeeRepository.save(employee);
     }
}
