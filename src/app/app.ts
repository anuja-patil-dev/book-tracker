import { Component, signal } from '@angular/core';
import { BookTable } from './book-table/book-table';


@Component({
  imports: [BookTable],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('book-tracker');
}
