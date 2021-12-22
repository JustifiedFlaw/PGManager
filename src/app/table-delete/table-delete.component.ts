import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Table } from '../models/table';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table-delete',
  templateUrl: './table-delete.component.html',
  styleUrls: ['./table-delete.component.css']
})
export class TableDeleteComponent implements OnInit {

  connectionId: number = 0;
  table?: Table;
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

        this.crumbs.push({ url: null, name: 'Drop Table'});
      });
  }

  drop(): void {
    if (this.table) {
      this.tableService.drop(this.connectionId, this.table)
        .subscribe(() => this.router.navigate([`/connections/${this.connectionId}/view`]));
    }
  }

}
