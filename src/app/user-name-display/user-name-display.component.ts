import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Login } from '../models/login';

@Component({
  selector: 'app-user-name-display',
  templateUrl: './user-name-display.component.html',
  styleUrls: ['./user-name-display.component.css']
})
export class UserNameDisplayComponent implements OnInit {

  user?: Login | null;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.user = this.loginService.getCurrentLogin();
  }

}
