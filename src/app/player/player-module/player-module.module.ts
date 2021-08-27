import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerModuleRoutingModule } from './player-module-routing.module';
import {PlayerListComponent} from '../player-list/player-list.component';
import {PlayerCreateComponent} from '../player-create/player-create.component';
import {PlayerEditComponent} from '../player-edit/player-edit.component';
import {PlayerDeleteComponent} from '../player-delete/player-delete.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    PlayerListComponent,
    PlayerCreateComponent,
    PlayerEditComponent,
    PlayerDeleteComponent
  ],
  exports: [
    PlayerListComponent,
    PlayerCreateComponent
  ],
  imports: [
    CommonModule,
    PlayerModuleRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PlayerModuleModule { }
