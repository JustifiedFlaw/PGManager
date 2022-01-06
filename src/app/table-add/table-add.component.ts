import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Schema } from '../models/schema';
import { Table } from '../models/table';
import { SchemaService } from '../schema.service';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table-add',
  templateUrl: './table-add.component.html',
  styleUrls: ['./table-add.component.css']
})
export class TableAddComponent implements OnInit {

  connectionId: number = 0;
  crumbs: BreadCrumb[] = [
    { url: '/connections', name: 'Connections' }
  ];
  table: Table = {
    schemaName: 'public',
    tableName: ''
  };
  schemas: Schema[] = [];
  
  constructor(
    private connectionService: ConnectionService,
    private tableService: TableService,
    private schemaService:  SchemaService,
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

        this.crumbs.push({ url: null, name: 'Create Table'});
      });
    
    this.schemaService.getAll(this.connectionId)
      .subscribe(schemas => this.schemas = schemas);
  }

  add(): void {
    this.tableService.add(this.connectionId, this.table)
      .subscribe(() => this.router.navigate([`/connections/${this.connectionId}/view`]))
  }

}
