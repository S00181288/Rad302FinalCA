import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';
import { Book } from '../search-feature/Book';
import { Router } from '@angular/router';

//For route guards
import { JwtHelperService } from '@auth0/angular-jwt';
import { BookRes } from '../book-component/BookResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'http://localhost:62959';

  constructor(private http: HttpClient, private router: Router, public jwtHelper: JwtHelperService) { }


  //registers a uer
  registerUser(user: User) {
    const body: User = {
      Email: user.Email,
      Password: user.Password,
      ConfirmPassword: user.ConfirmPassword
    }
    console.log(body.Email, "the email came through alright")
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    //var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/api/Account/Register', body, httpOptions);
  }

  //logging in 
  userAuthentication(userName, password) {
    const body = "username=" + userName + "&password=" + password + "&grant_type=password";
    //var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' }) };
    return this.http.post(this.rootUrl + '/Token', body, httpOptions);
  }

  //log out of application
  logout() {
    //token name i access_token
    localStorage.removeItem("access_token");
    this.router.navigate(['/login']);
  }

  //get books from google api.
  //Url For Api call.
  private _siteURL = 'https://www.googleapis.com/books/v1/volumes?q=';
  private _key = '&key=AIzaSyDY7cvXQUdQc4MPrxKAzJcKke8aTAWr08k';

  //Gets book info for search feature
  getBookInfo(bookName: string): Observable<Book> {
    //console.log(bookName);
    return this.http.get<Book>(this._siteURL + bookName + this._key).pipe(tap(data => console.log('All: ' + JSON.stringify(data))));
  }

  /*
  Usersbooks: any;
  //write call to get current users books
  getFavoriteBooks() {

    const access_token = localStorage.getItem("access_token")
    //header to send the bearer token in request.
    const header = new HttpHeaders({ Authorization: `Bearer ${access_token}` })

    var res = this.http.get<any>(this.rootUrl + '/api/Books/Favourites', { headers: header })
    //.pipe(tap(data => console.log('All: ' + JSON.stringify(data))))

    console.log(res);
    return res;


  }

  */
  // get the users favorite books
  getUsersBooks(): Observable<BookRes> {
    const access_token = localStorage.getItem("access_token")
    //header to send the bearer token in request.
    const header = new HttpHeaders({ Authorization: `Bearer ${access_token}` })

    var res = this.http.get<BookRes>(this.rootUrl + '/api/Books/Favourites', { headers: header })

    return res
  }

}
