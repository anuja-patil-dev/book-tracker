import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookStatus } from '../model/book';
import { books } from '../data/bookData';
import { type book } from '../model/book';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule,CommonModule],
  selector: 'app-book-table',
  styleUrl: './book-table.css',
  templateUrl: './book-table.html',
})
export class BookTable {
  title:string=''
  status:BookStatus='reading'
  id:number=2
  allbooks:book[]=books
  checkTitle:book | undefined
  message:string=''
   addBook():void{
    this.checkTitle=this.allbooks.find(value =>{
      value.title === this.title
    })
    console.log(this.checkTitle)
    if(this.checkTitle){
     this.message='title already present'
    }
   else{
    this.id=this.id +1
    this.allbooks.push({
      id:this.id,
      title:this.title,
      status:this.status
    })
    // this.allbooks=[...this.allbooks,{id:this.id,title:this.title,status:this.status}]
 
    this.title=''
    this.status='reading'

   }
   
   

  }
  
}
