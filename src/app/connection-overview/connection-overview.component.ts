import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { DatabaseService } from '../database.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Connection } from '../models/connection';
import { Database } from '../models/database';

@Component({
  selector: 'app-connection-overview',
  templateUrl: './connection-overview.component.html',
  styleUrls: ['./connection-overview.component.css']
})
export class ConnectionOverviewComponent implements OnInit {

  connection?: Connection;
  crumbs: BreadCrumb[] = [
    {url: null, name: 'Connections'}
  ];
  
  constructor(
    private connectionService: ConnectionService,
    private databaseService: DatabaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let connectionId = this.route.snapshot.params.id;

    this.connectionService.get(connectionId)
      .subscribe(connection => {
        this.connection = connection
        if (connection) {
          this.crumbs.push({ url: null, name: connection.connectionName });
        }
      });
  }

}
