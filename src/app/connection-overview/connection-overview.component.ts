import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Connection } from '../models/connection';

@Component({
  selector: 'app-connection-overview',
  templateUrl: './connection-overview.component.html',
  styleUrls: ['./connection-overview.component.css']
})
export class ConnectionOverviewComponent implements OnInit {

  connection?: Connection;
  crumbs: BreadCrumb[] = [
    {url: '/connections', name: 'Connections'}
  ];
  
  constructor(
    private connectionService: ConnectionService,
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
