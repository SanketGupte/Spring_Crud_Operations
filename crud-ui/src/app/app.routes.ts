import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home'; 
import { EmployeeComponent } from './employee/employee';

export const routes: Routes = [
    {path: 'header', component: Header}, //Component for header
    {path: 'employee', component: EmployeeComponent}, //Component for employee
    {path: '', component: Home}, //Component for home
];
