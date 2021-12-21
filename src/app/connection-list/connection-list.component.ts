import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Connection } from '../models/connection';

@Component({
  selector: 'app-connection-list',
  templateUrl: './connection-list.component.html',
  styleUrls: ['./connection-list.component.css']
})
export class ConnectionListComponent implements OnInit {

  crumbs: BreadCrumb[] = [
    {url: null, name: 'Connections'}
  ];
  connections: Connection[] = [];

  constructor(private connectionService: ConnectionService) { }

  ngOnInit(): void {
    this.connectionService.getAll()
      .subscribe(connections => this.connections = connections);
  }

}
