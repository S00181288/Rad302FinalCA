import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
}
