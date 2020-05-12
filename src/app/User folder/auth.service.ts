import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Book } from '../search-feature/Book';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'http://localhost:62959';

  constructor(private http: HttpClient) { }

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

  //get books from google api.
  //Url For Api call.
  private _siteURL = 'https://www.googleapis.com/books/v1/volumes?q=';
  private _key = '&key=AIzaSyDY7cvXQUdQc4MPrxKAzJcKke8aTAWr08k';

  //Gets book info
  getBookInfo(bookName: string): Observable<Book> {
    //console.log(bookName);
    return this.http.get<Book>(this._siteURL + bookName + this._key).pipe(tap(data => console.log('All: ' + JSON.stringify(data))));
  }
}
