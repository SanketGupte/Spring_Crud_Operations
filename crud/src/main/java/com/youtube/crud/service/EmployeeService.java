package com.youtube.crud.service;

import com.youtube.crud.dao.EmployeeDao;
import com.youtube.crud.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeDao employeeDao;

    @CachePut(value = "employeeCache", key = "#employee.id")
    public Employee saveEmployee(Employee employee) {
        // Logic to save the employee
        // This could involve calling a repository method to persist the employee entity
        return employeeDao.save(employee);
    }

    public List<Employee> getEmployees() {
        // Logic to retrieve an employee by ID
        // This could involve calling a repository method to find the employee entity
        List<Employee> employees = new ArrayList<>();
        employeeDao.findAll().forEach(e -> employees.add(e));
        return employees;
    }

    @Cacheable(value = "employeeCache", key = "#id")
    public Employee getEmployee(Long id) {
        // Logic to retrieve an employee by ID
        // This could involve calling a repository method to find the employee entity
        return employeeDao.findById(id).orElseThrow();
    }

    @CacheEvict(value = "employeeCache", key = "#id")
    public void deleteEmployee(Long id) {
        // Logic to retrieve an employee by ID
        // This could involve calling a repository method to find the employee entity
        employeeDao.deleteById(id);
    }
    public Employee updateEmployee(Employee employee) {
        employeeDao.findById(employee.getId()).orElseThrow();
        return employeeDao.save(employee);    }

}
