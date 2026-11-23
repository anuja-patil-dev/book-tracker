import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookStatus } from '../model/book';
import { books } from '../data/bookData';
import { type book } from '../model/book';

@Component({
  imports: [FormsModule],
  selector: 'app-book-table',
  styleUrl: './book-table.css',
  templateUrl: './book-table.html',
})
export class BookTable {
  title:string=''
  status:BookStatus='reading'
  id:number=2
  checkTitle:book[]=[]
  message:string=''
   addBook():void{
    this.checkTitle=books.filter(value =>{
      value.title === this.title
    })
    if(this.checkTitle){
     this.message='title already present'
    }
   else{
    this.id=this.id +1
    books.push({
      id:this.id,
      title:this.title,
      status:this.status
    })
    

    this.title=''
    this.status='reading'

   }
   

  }
  
}
