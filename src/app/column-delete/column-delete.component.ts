import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Table } from '../models/table';
import { TableService } from '../table.service';

@Component({
  selector: 'app-column-delete',
  templateUrl: './column-delete.component.html',
  styleUrls: ['./column-delete.component.css']
})
export class ColumnDeleteComponent implements OnInit {

  connectionId: number = 0;
  table?: Table;
  columnName?: string;
  crumbs: BreadCrumb[] = [
    { url: '/connections', name: 'Connections' }
  ];

  constructor(
    private connectionService: ConnectionService,
    private tableService: TableService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.connectionId = this.route.snapshot.params.id;
    this.table = {
      schemaName: this.route.snapshot.params.schema,
      tableName: this.route.snapshot.params.table
    };
    this.columnName = this.route.snapshot.params.column;

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

        if (this.columnName) {
          this.crumbs.push(
            { url: null, name: this.columnName},
            { url: null, name: 'Drop Column'}
          );
        }
      });
  }

  delete() {
    if (this.table && this.columnName) {
      this.tableService.dropColumn(this.connectionId, this.table, this.columnName)
        .subscribe(() => this.router.navigate([`/connections/${this.connectionId}/tables/${this.table?.schemaName}/${this.table?.tableName}/schema`]));
    }
  }

}
