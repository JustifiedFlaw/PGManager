import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { DataService } from '../data.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Column } from '../models/column';
import { Table } from '../models/table';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table-data-add',
  templateUrl: './table-data-add.component.html',
  styleUrls: ['./table-data-add.component.css']
})
export class TableDataAddComponent implements OnInit {

  connectionId: number = 0;
  table?: Table;
  row: any = {};
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
          { url: null, name: 'Add'}
        );
      });

    this.tableService.getColumns(this.connectionId, this.table)
      .subscribe(columns => this.columns = columns);

    // editable: !c.isIdentity
  }

  add() {
    if (this.table && this.row) {  
      this.dataService.insert(this.connectionId, this.table, [this.row])
        .subscribe(() => this.router.navigate([`/connections/${this.connectionId}/tables/${this.table?.schemaName}/${this.table?.tableName}/data`]));
    }
  }

}

