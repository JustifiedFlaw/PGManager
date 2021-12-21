import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';
import { Database } from '../models/database';

@Component({
  selector: 'app-database-list',
  templateUrl: './database-list.component.html',
  styleUrls: ['./database-list.component.css']
})
export class DatabaseListComponent implements OnInit {
  
  connectionId: number = 0;
  databases: Database[] = [];

  constructor(
    private databaseService: DatabaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.connectionId = this.route.snapshot.params.id;

    this.databaseService.getAll(this.connectionId)
      .subscribe(databases => this.databases = databases);
  }

}
