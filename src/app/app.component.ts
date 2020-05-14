import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './User folder/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rad302Front';

  constructor(private userService: UserService, private router: Router) {

  }

  logOut() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}

