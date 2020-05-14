import { Component, OnInit } from '@angular/core';
import { UserService } from '../User folder/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }



}
