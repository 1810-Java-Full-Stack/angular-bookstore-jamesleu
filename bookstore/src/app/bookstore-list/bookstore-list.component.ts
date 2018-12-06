import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../books';
import { Book } from '../book';

@Component({
  selector: 'app-bookstore-list',
  templateUrl: './bookstore-list.component.html',
  styleUrls: ['./bookstore-list.component.css']
})
export class BookstoreListComponent implements OnInit {

  books = Books;
  selectedBook: Book;

  constructor() { }

  ngOnInit() {
  }

  onSelect(book: Book): void {

    this.selectedBook = book;

  }

}
