import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookStatus } from '../model/book';
@Component({
  imports: [FormsModule],
  selector: 'app-book-table',
  styleUrl: './book-table.css',
  templateUrl: './book-table.html',
})
export class BookTable {
  title:string=''
  status:BookStatus='reading'
}
