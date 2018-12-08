import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getAllBooks() {

    return this.http.get<Book[]>('http://ec2-52-87-137-212.compute-1.amazonaws.com:8080/Bookstore-MVC/book/');

  }

  getBookById(id: number) {

    return this.http.get<Book>('http://ec2-52-87-137-212.compute-1.amazonaws.com:8080/Bookstore-MVC/book/' + id);

  }

  getAllAuthors() {

    return this.http.get<Book[]>('http://ec2-52-87-137-212.compute-1.amazonaws.com:8080/Bookstore-MVC/author/');

  }

  getAuthorById(id: number) {
    return this.http.get<Book>('http://ec2-52-87-137-212.compute-1.amazonaws.com:8080/Bookstore-MVC/author/' + id);
  }

}
