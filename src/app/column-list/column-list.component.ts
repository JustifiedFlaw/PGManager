import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Column } from '../models/column';
import { Table } from '../models/table';
import { TableService } from '../table.service';

@Component({
  selector: 'app-column-list',
  templateUrl: './column-list.component.html',
  styleUrls: ['./column-list.component.css']
})
export class ColumnListComponent implements OnInit {

  connectionId: number = 0;
  table?: Table;
  columns: Column[] = [];

  constructor(
    private tableService: TableService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.connectionId = this.route.snapshot.params.id;
    this.table = {
      schemaName: this.route.snapshot.params.schema,
      tableName: this.route.snapshot.params.table
    };

    this.tableService.getColumns(this.connectionId, this.table)
      .subscribe(columns => this.columns = columns);
  }

}
