import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { LoginService } from '../login.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Connection } from '../models/connection';

@Component({
  selector: 'app-connection-add',
  templateUrl: './connection-add.component.html',
  styleUrls: ['./connection-add.component.css']
})
export class ConnectionAddComponent implements OnInit {

  connection: Connection = new Connection();
  crumbs: BreadCrumb[] = [
    { url: '/connections', name: 'Connections' },
    { url: null, name: 'New' }
  ];

  constructor(
    private connectionService: ConnectionService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    var currentLogin = this.loginService.getCurrentLogin();
    if (currentLogin) {
      this.connection.username = currentLogin.username;
    }
  }

  add(): void {
    this.connectionService.add(this.connection)
      .subscribe(() => this.router.navigate(["/connections"]));
  }

}
