import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Table } from '../models/table';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table-rename',
  templateUrl: './table-rename.component.html',
  styleUrls: ['./table-rename.component.css']
})
export class TableRenameComponent implements OnInit {

  connectionId: number = 0;
  table?: Table;
  newName: string = '';
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
    this.newName = this.table.tableName ?? '';

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
      });
  }

  rename() {
    if (this.table) {
      this.tableService.rename(this.connectionId, this.table, this.newName)
        .subscribe(() => this.router.navigate([`/connections/${this.connectionId}/view`]));
    }
  }

}
