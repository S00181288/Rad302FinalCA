import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../User folder/auth.service';
import { Book } from './Book';

@Component({
  selector: 'app-search-feature',
  templateUrl: './search-feature.component.html',
  styleUrls: ['./search-feature.component.css']
})
export class SearchFeatuerComponent implements OnInit {
  @Input() bookData: Book;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getBooksInformation(bookName: string): boolean {
    this.userService
      .getBookInfo(bookName)
      .subscribe(bookData => (this.bookData = bookData));
    return false;
  }

}
