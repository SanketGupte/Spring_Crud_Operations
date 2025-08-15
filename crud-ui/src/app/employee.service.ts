import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  api = "http://localhost:9090"

  public saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.api}/save/employees`, employee);
  }
  
  public getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.api}/get/employees`);
  }

  public deleteEmployee(id: number) {
    return this.httpClient.delete(`${this.api}/delete/employees/${id}`);
  }

  public getEmployeeById(id: number) {
    return this.httpClient.get<Employee>(`${this.api}/get/employees/${id}`);
  }

  public updateEmployee(employee: Employee){
    return this.httpClient.put<Employee>(`${this.api}/update/employees`, employee);
  }
}
