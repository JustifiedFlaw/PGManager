import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Table } from '../models/table';
import { TableService } from '../table.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  connectionId: number = 0;
  tables: Table[] = [];

  constructor(
    private tableService: TableService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.connectionId = this.route.snapshot.params.id;

    this.tableService.getAll(this.connectionId)
      .subscribe(tables => this.tables = tables);
  }

}
