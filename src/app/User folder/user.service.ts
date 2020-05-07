import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly rootUrl = 'http://localhost:62959';

  constructor(private http: HttpClient) { }

  registerUser(user: User) {
    //console.log("yeeeeeeeet")
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
}
