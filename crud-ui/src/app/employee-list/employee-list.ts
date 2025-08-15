import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.module';
import { HttpErrorResponse } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-employee-list',
  imports: [MatTableModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit {

  datasource: Employee[] = []; // Array to hold employee data

  displayedColumns: string[] = ['id', 'name', 'contactNumber', 'address', 'gender', 'department', 'skills'];

  constructor(private employeeService: EmployeeService) {
    this.getEmployees(); // Fetch employees on component initialization
  }

  ngOnInit(): void {
    
  }

  getEmployees(): void {
    this.employeeService.getEmployeesList().subscribe({
      next: (res: Employee[]) => {
        this.datasource = res; // Assign the fetched employees to the datasource
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    });
  }

}
