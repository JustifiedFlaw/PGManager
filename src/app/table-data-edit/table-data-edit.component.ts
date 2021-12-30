import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { DataService } from '../data.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Column } from '../models/column';
import { Table } from '../models/table';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table-data-edit',
  templateUrl: './table-data-edit.component.html',
  styleUrls: ['./table-data-edit.component.css']
})
export class TableDataEditComponent implements OnInit {

  connectionId: number = 0;
  table?: Table;
  row?: any;
  columns?: Column[];
  primaryKeyValues = new Map<string, string>();
  crumbs: BreadCrumb[] = [
    { url: '/connections', name: 'Connections' }
  ];


  constructor(
    private connectionService: ConnectionService,
    private tableService: TableService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.connectionId = this.route.snapshot.params.id;
    this.table = {
      schemaName: this.route.snapshot.params.schema,
      tableName: this.route.snapshot.params.table
    };
    this.primaryKeyValues = this.dataService.paramsToPk(this.route.snapshot.queryParamMap);

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

        this.crumbs.push(
          { url: null, name: 'Data'},
          { url: null, name: 'Edit'}
        );
      });

    this.tableService.getColumns(this.connectionId, this.table)
      .subscribe(columns => {
        this.columns = columns.filter(c => !this.primaryKeyValues.has(c.columnName) && !c.isIdentity);

        if (this.table) {
          this.dataService.getWhere(this.connectionId, this.table, this.primaryKeyValues)
          .subscribe(data => {
            if (data?.rows.length > 0 && this.columns) {
              var editable: {[k: string]: any} = {};
              this.columns.forEach(c => editable[c.columnName] = data.rows[0][c.columnName]);
              
              this.row = editable;
            }
          });
        }
      });
  }

  save() {
    if (this.table && this.row) {  
      this.dataService.update(this.connectionId, this.table, this.primaryKeyValues, this.row)
        .subscribe(() => this.router.navigate([`/connections/${this.connectionId}/tables/${this.table?.schemaName}/${this.table?.tableName}/data`]));
    }
  }

}

