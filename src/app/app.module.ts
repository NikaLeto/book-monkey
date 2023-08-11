import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FooComponent } from './foo/foo.component';
//import { BookListComponent } from './book-list/book-list.component';
//import { BookListItemComponent } from './book-list-item/book-list-item.component';
//import { BookDetailsComponent } from './book-details/book-details.component';
//import { FooModule } from './foo/foo.module';
import { BooksModule } from './books/books.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    //FooComponent,
    //BookListComponent,
    //BookListItemComponent,
    //BookDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
