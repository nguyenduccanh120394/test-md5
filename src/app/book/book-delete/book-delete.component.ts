import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ParamMap, Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  bookForm : FormGroup ;
  id = 0;
  constructor(private router: Router, private bookService: BookService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((data: ParamMap) => {
      // @ts-ignore
      this.id = data.get('id')
      this.getBook(this.id)
    })
  }

  ngOnInit(): void {
  }
  getBook(id: number){
    return this.bookService.findById(id).subscribe(book =>{
      console.log(book);
      this.bookForm = new FormGroup({
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description)
      })
    })
  }
  delete(id: number){
    this.bookService.deleteBook(id).subscribe(() =>{
      this.router.navigate(['/book']).then(function(){
        location.reload()
      })
    })
  }
}
