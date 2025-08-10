package com.youtube.crud.dao;

import com.youtube.crud.entity.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeDao extends CrudRepository<Employee, Long> {
    // Additional query methods can be defined here if needed
}
