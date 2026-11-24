import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookStatus } from '../model/book';
import { books } from '../data/bookData';
import { type book } from '../model/book';
import { CommonModule } from '@angular/common';


@Component({
  imports: [FormsModule,CommonModule],
  selector: 'app-book-table',
  standalone:true,
  styleUrl: './book-table.css',
  templateUrl: './book-table.html',
})
export class BookTable {
  title:string=''
  updatedTitle:string=''
  status:BookStatus='reading'
  id:number=0
  allbooks:book[]=[]
  checkTitle:boolean=false
  updateMsg:string=''

  message:string=''
   addBook():void{
    this.checkTitle=this.allbooks.some(value=>value.title.trim().toLowerCase() ===this.title.trim().toLowerCase())
    console.log(this.checkTitle)
    if(this.checkTitle){
     this.updateMsg='title already present'
    }
   else{
    this.id=this.id +1
    this.allbooks.push({
      id:this.id,
      title:this.title.trim(),
      status:this.status
    })
    // this.allbooks=[...this.allbooks,{id:this.id,title:this.title,status:this.status}]
 
    this.title=''
    this.status='reading'
    this.updateMsg=''

   }
   
   

  }
  get countreading(){
    return this.allbooks.filter(value=>value.status === 'reading').length;
  }

  get countfinish(){
    return this.allbooks.filter(value=>value.status === 'finished').length;
  }
  markFinished(id: number): void {

  const index = this.allbooks.findIndex(
    b => b.id === id
  );

  if (index === -1) {
    return;
  }

  this.allbooks[index].status = 'finished';
}
editId:number=0
geteditId(id:number){
  this.editId=id
}
updateTitle():void{
  this.checkTitle=this.allbooks.some(value=>value.title.trim().toLowerCase() ===this.updatedTitle.trim().toLowerCase())
    console.log(this.checkTitle)
    if(this.checkTitle){
     this.message='title already present'
    }
    else{
const index=this.allbooks.findIndex(
  b=>b.id === this.editId
)
if(index === -1){
  return;
}
this.allbooks[index].title=this.updatedTitle.trim();
this.updatedTitle= ''
this.message=''
    }

}
}
