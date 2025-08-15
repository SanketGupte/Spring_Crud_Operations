import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home'; 
import { EmployeeComponent } from './employee/employee';
import { EmployeeList } from './employee-list/employee-list';
import { EmployeeResolver } from './employee-resolver';


export const routes: Routes = [
    {path: 'header', component: Header}, //Component for header
    {path: 'employee', component: EmployeeComponent, resolve: {employee: EmployeeResolver}}, //Component for employee
    {path: 'employee-list', component: EmployeeList}, //Component for employee-list
    {path: '', component: Home}, //Component for home
];
