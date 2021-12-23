import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { DataService } from '../data.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Data } from '../models/Data';
import { Table } from '../models/table';

@Component({
  selector: 'app-table-data-view',
  templateUrl: './table-data-view.component.html',
  styleUrls: ['./table-data-view.component.css']
})
export class TableDataViewComponent implements OnInit {

  connectionId: number = 0;
  table?: Table;
  data?: Data;
  crumbs: BreadCrumb[] = [
    { url: '/connections', name: 'Connections' }
  ];

  constructor(
    private connectionService: ConnectionService,
    private dataService: DataService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.connectionId = this.route.snapshot.params.id;
    this.table = {
      schemaName: this.route.snapshot.params.schema,
      tableName: this.route.snapshot.params.table
    };

    this.connectionService.get(this.connectionId)
      .subscribe(connection => {
        this.crumbs.push({ 
          url: `/connections/${this.connectionId}/view`,
          name: connection.connectionName
        });

        if (this.table) {
          this.crumbs.push(
            { url: null, name: this.table.schemaName},
            { url: null, name: this.table.tableName}
          );
        }

        this.crumbs.push({ url: null, name: 'Data'});
      });

    this.dataService.getAll(this.connectionId, this.table)
      .subscribe(data => {
        this.data = data
      });
  }

}
