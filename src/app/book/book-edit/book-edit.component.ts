import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;
  id = 0;
  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((data:ParamMap) => {
      // @ts-ignore
      this.id = +data.get('id')
      console.log(this.id)
      this.getBook(this.id)
    })
  }

  ngOnInit(): void {
    console.log()
  }
  getBook(id: number){
    return this.bookService.findById(id).subscribe(book =>{
      this.bookForm = new FormGroup({
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description),
      })
    })
  }
  update(id:number){
    const book = {
      id: id,
      title: this.bookForm.value.title,
      author: this.bookForm.value.author,
      description: this.bookForm.value.description,
    };
    console.log(book)
    this.bookService.updateBook(id,book).subscribe(()=>{
      alert("Edit Success");
      this.router.navigate(['/book']).then(location.reload);
    })
  }
}
