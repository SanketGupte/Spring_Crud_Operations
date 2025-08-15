import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { EmployeeService } from "./employee.service";
import { inject } from "@angular/core";
import { Observable, of } from "rxjs";
import { Employee } from "./employee.module";

export const EmployeeResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
employeeService: EmployeeService = inject(EmployeeService)) : Observable<Employee> => {
    const id = route.paramMap.get('id');
    if(id){
        //make api call and get employee details
        return employeeService.getEmployeeById(Number(id));
    } else {
        //create and return empty employee details

       const employee: Employee = {
    id:0,
    name: '',
    contactNumber: '',
    address: '',
    gender: '',
    department: '',
    skills: ''
  }
  return of(employee);
    }
}