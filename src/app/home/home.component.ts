import { Component, OnInit } from '@angular/core';
import { UserService } from '../User folder/auth.service';
import { Router } from '@angular/router';
import { Book } from '../search-feature/Book';
import { BookRes } from '../book-component/BookResponse';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  UserBookData: BookRes;
  //UserBookData: any;

  constructor(private userService: UserService) { }

  ngOnInit() {

    /* old code that didnt return right type
    //write call to get current users books
    this.UserBookData = this.userService.getFavoriteBooks().subscribe(r => console.log(r))
    //console.log()
    //sconsole.log(this.UserBookData);
*/

    //this.UserBookData = 
    this.userService.getUsersBooks().subscribe(bookData => (this.UserBookData = bookData));


  };

  RemoveBookFromFave(bookID) {
    console.log(bookID)
  }

}


