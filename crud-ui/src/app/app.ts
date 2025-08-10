import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header], //To include the Header component in app.html
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('crud-ui');
}
