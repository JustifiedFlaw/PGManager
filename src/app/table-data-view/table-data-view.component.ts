import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { DataService } from '../data.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Column } from '../models/column';
import { Data } from '../models/Data';
import { Table } from '../models/table';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table-data-view',
  templateUrl: './table-data-view.component.html',
  styleUrls: ['./table-data-view.component.css']
})
export class TableDataViewComponent implements OnInit {

  connectionId: number = 0;
  table?: Table;
  data?: Data;
  columns?: Column[];
  primaryKey?: string[];
  crumbs: BreadCrumb[] = [
    { url: '/connections', name: 'Connections' }
  ];

  constructor(
    private connectionService: ConnectionService,
    private tableService: TableService,
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

    this.tableService.getColumns(this.connectionId, this.table)
      .subscribe(columns => this.columns = columns);
    
    this.tableService.getPrimaryKey(this.connectionId, this.table)
      .subscribe(primaryKey => this.primaryKey = primaryKey);
  }

  primaryKeyValue(row: any): string {
    if (this.primaryKey) {
      return this.primaryKey.map(k => encodeURIComponent(row[k])).join('-');
    }
    else if (row.hasOwnProperty('id')) {
      return encodeURIComponent(row.get('id')?.toString() ?? '');
    }
    else
      return '';
  }

}
