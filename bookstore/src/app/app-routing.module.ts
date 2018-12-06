import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookstoreListComponent } from './bookstore-list/bookstore-list.component';

const routes: Routes = [

  { path: 'bookstore-list', component: BookstoreListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
