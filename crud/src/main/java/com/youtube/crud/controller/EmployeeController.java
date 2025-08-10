package com.youtube.crud.controller;

import com.youtube.crud.entity.Employee;
import com.youtube.crud.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {


    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/save/employees")
    public Employee saveEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    @GetMapping("/get/employees")
    public List<Employee> getAllEmployees() {
        return employeeService.getEmployees();
    }

    @GetMapping("/get/employees/{id}")
    public Employee getEmployee(@PathVariable Long id) {
        return employeeService.getEmployee(id);
    }

    @DeleteMapping("/delete/employees/{id}")
    public void deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
    }

    @PutMapping("/update/employees")
    public Employee updateEmployee(@RequestBody Employee employee) {
        return employeeService.updateEmployee(employee);
    }
}
