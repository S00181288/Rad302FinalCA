import { Component, OnInit } from '@angular/core';
import { UserService } from '../User folder/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Helps show if error has happened on ubmit
  isLoginError: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }


  OnSubmit(userName, password) {
    console.log(userName, password)
    this.userService.userAuthentication(userName, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      this.router.navigate(['/home']);

    },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      });
  }

}
