package com.gilad.employee_management.controller;

import com.gilad.employee_management.exception.ResourceNotFoundException;
import com.gilad.employee_management.model.Employee;
import com.gilad.employee_management.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

     @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
         Employee employee =  employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee with the id - "+id+" not exist"));
         return ResponseEntity.ok(employee);
     }

     @PutMapping("/employees/{id}")
     public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
         Employee employee =  employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee with the id - "+id+" not exist"));
         employee.setFirstName(employeeDetails.getFirstName());
         employee.setLastName(employeeDetails.getLastName());
         employee.setEmail(employeeDetails.getEmail());
         return ResponseEntity.ok(employeeRepository.save(employee));

     }

     @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
         Employee employee =  employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee with the id - "+id+" not exist"));
         employeeRepository.delete(employee);
         Map <String,Boolean> res = new HashMap<>();
         res.put("delete",Boolean.TRUE);
         return ResponseEntity.ok(res);
     }
}
