import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'book', loadChildren: () => import('./book/book-module/book.module').then(module => module.BookModule)},
  {path: 'player', loadChildren: () => import('./player/player-module/player-module.module').then(module => module.PlayerModuleModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
