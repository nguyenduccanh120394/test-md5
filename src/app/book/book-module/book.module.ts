import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {BookListComponent} from '../book-list/book-list.component';
import {BookCreateComponent} from '../book-create/book-create.component';
import {BookEditComponent} from '../book-edit/book-edit.component';
import {BookDeleteComponent} from '../book-delete/book-delete.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    BookListComponent,
    BookCreateComponent,
    BookEditComponent,
    BookDeleteComponent],
  exports: [
    BookListComponent,
    BookCreateComponent
  ],
    imports: [
        CommonModule,
        BookRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class BookModule { }
