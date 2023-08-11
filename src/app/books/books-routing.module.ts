import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { BookListComponent } from '../book-list/book-list.component';

const routes: Routes = [
  {
    path: 'books/:isbn',
    component: BookDetailsComponent,
  },
  {
    path: 'books',
    component: BookListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
