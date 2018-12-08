import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../books';
import { Book } from '../book';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-bookstore-list',
  templateUrl: './bookstore-list.component.html',
  styleUrls: ['./bookstore-list.component.css']
})
export class BookstoreListComponent implements OnInit {

  books = Books;
  selectedBook: Book;

  public bookArr = [];

  constructor(private bs: BooksService) { }

  ngOnInit() {

   this.getBooks();

  }

  getBooks() {

    this.bs.getAllBooks().subscribe(

      (book) => {

        this.bookArr = book;

      }

    );

  }

  onSelect(book: Book): void {

    this.selectedBook = book;

  }

}
