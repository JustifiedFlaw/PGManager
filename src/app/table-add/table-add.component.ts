import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Table } from '../models/table';
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
  
  constructor(
    private connectionService: ConnectionService,
    private tableService: TableService,
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
  }

  add(): void {
    this.tableService.add(this.connectionId, this.table)
      .subscribe(() => this.router.navigate([`/connections/${this.connectionId}/view`]))
  }

}
