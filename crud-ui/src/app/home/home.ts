import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatGridListModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
