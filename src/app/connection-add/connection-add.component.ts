import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { MessageService } from '../message.service';
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
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
  }

  add(): void {
    this.connectionService.add(this.connection)
      .subscribe(() => this.router.navigate(["/connections"]));
  }

  test(): void {
    this.connectionService.test(this.connection)
      .subscribe(success => {
        if (success) {
          // TODO: message with green not red
          this.messageService.add('Connection tested successfuly!');
        }
      });
  }

}
