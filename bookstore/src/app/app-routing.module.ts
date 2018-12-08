import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookstoreListComponent } from './bookstore-list/bookstore-list.component';
import { AuthorListComponent } from './author-list/author-list.component';

const routes: Routes = [

  { path: 'bookstore-list', component: BookstoreListComponent },
  { path: 'author-list', component: AuthorListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
