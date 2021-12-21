import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { DatabaseService } from '../database.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Database } from '../models/database';

@Component({
  selector: 'app-database-add',
  templateUrl: './database-add.component.html',
  styleUrls: ['./database-add.component.css']
})
export class DatabaseAddComponent implements OnInit {

  connectionId: number = 0;
  crumbs: BreadCrumb[] = [
    { url: '/connections', name: 'Connections' }
  ];
  database: Database = {
    id: 0,
    name: ''
  };
  
  constructor(
    private connectionService: ConnectionService,
    private databaseService: DatabaseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.connectionId = this.route.snapshot.params.id;

    this.connectionService.get(this.connectionId)
      .subscribe(connection => {
        this.crumbs.push({ 
          url: `/connections/${this.connectionId}/view`,
          name: connection.connectionName
        });

        this.crumbs.push({ url: null, name: 'Create Database'});
      });
  }

  add(): void {
    this.databaseService.add(this.connectionId, this.database)
      .subscribe(() => this.router.navigate([`/connections/${this.connectionId}/view`]))
  }

}
