import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Column } from './komponenty/kolumny';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Column],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('page1');
}
