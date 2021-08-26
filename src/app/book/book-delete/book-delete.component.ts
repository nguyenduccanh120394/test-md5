import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  productForm: FormGroup ;
  id: number;
  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
  }

}
