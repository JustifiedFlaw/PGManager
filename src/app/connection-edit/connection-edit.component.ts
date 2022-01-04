import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { MessageService } from '../message.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Connection } from '../models/connection';

@Component({
  selector: 'app-connection-edit',
  templateUrl: './connection-edit.component.html',
  styleUrls: ['./connection-edit.component.css']
})
export class ConnectionEditComponent implements OnInit {

  connection?: Connection;
  crumbs: BreadCrumb[] = [
    { url: '/connections', name: 'Connections' }
  ];

  constructor(
    private connectionService: ConnectionService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.connectionService.get(this.route.snapshot.params.id)
      .subscribe(connection => {
        this.connection = connection
        if (connection) {
          this.crumbs.push({ url: null, name: connection.connectionName });
        }
      });
  }

  save(): void {
    if (this.connection) {
      this.connectionService.update(this.connection)
        .subscribe(() => this.router.navigate(["/connections"]));
    }
  }

  test(): void {
    if (this.connection) { 
      this.connectionService.test(this.connection)
      .subscribe(success => {
        if (success) {
          this.messageService.success('Connection tested successfuly!');
        }
      });
    } else {
      this.messageService.error('There is no connection loaded');
    }
  }

}
