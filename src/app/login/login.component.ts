import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserModel } from '../models/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = { login: '' , password: '' };
  authenticationFailed = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  connect() {
    this.authenticationFailed = false;
    this.userService.authenticate(this.credentials).subscribe(
      () => this.router.navigate(['/home']),
      () => this.authenticationFailed = true);
  }

}
