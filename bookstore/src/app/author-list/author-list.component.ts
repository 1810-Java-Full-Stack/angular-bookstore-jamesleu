import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../author';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  selectedAuthor: Author;

  public authorArr = [];

  constructor(private bs: BooksService) { }

  ngOnInit() {

   this.getAuthors();

  }

  getAuthors() {

    this.bs.getAllAuthors().subscribe(

      (author) => {

        this.authorArr = author;

      }

    );

  }


  onSelect(author: Author): void {

    this.selectedAuthor = author;

  }

}
