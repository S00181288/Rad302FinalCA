
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../User folder/user.model';
import { UserService } from '../User folder/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User;
  registerForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder, private userservice: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({

      'Email': [this.user.Email, [
        Validators.required,
        Validators.email
      ]],
      'Password': [this.user.Password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]],
      'ConfirmPassword': [this.user.ConfirmPassword, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]],
    });
  }

  onRegisterSubmit() {

    this.userservice.registerUser(this.user)
      .subscribe(data => console.log("succeeded, result = " + data), (err) => console.error("Failed! " + err));

  }

}