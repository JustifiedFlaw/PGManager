import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Login = new Login("", "");
  loginFailed: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginFailed = false;
    this.loginService.login(this.user)
      .subscribe(result => {
        if (result) {
          this.router.navigate(["/"]);      
        }
        else {
          this.loginFailed = true;
        }
      });
  }
}
