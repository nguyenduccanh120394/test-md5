import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from '../../book/book-list/book-list.component';
import {BookCreateComponent} from '../../book/book-create/book-create.component';
import {BookEditComponent} from '../../book/book-edit/book-edit.component';
import {BookDeleteComponent} from '../../book/book-delete/book-delete.component';
import {PlayerListComponent} from '../player-list/player-list.component';
import {PlayerCreateComponent} from '../player-create/player-create.component';
import {PlayerEditComponent} from '../player-edit/player-edit.component';
import {PlayerDeleteComponent} from '../player-delete/player-delete.component';

const routes: Routes = [
  {
    path: 'list',
    component: PlayerListComponent
  }, {
    path: 'create',
    component: PlayerCreateComponent
  }, {
    path: 'edit/:id',
    component: PlayerEditComponent
  }, {
    path: 'delete/:id',
    component: PlayerDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerModuleRoutingModule { }
