import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Home } from './home/home'; 

export const routes: Routes = [
    {path: 'header', component: Header}, //Component for header
    {path: '', component: Home}, //Component for home
];
