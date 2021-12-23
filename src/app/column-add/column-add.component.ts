import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { BreadCrumb } from '../models/bread-crumb';
import { Column } from '../models/column';
import { Table } from '../models/table';
import { TableService } from '../table.service';
import { DataTypes } from '../data-types';

@Component({
  selector: 'app-column-add',
  templateUrl: './column-add.component.html',
  styleUrls: ['./column-add.component.css']
})
export class ColumnAddComponent implements OnInit {

  column: Column = {
    schemaName: '',
    tableName: '',
    columnName: '',
    dataType: 'varchar',
    ordinalPosition: 0,
    isNullable: false,
    characterMaximumLength: undefined,
    isIdentity: false,
    identityGeneration: 'ALWAYS'
  };
  connectionId: number = 0;
  table?: Table;
  crumbs: BreadCrumb[] = [
    { url: '/connections', name: 'Connections' }
  ];
  dataTypes = DataTypes;
  hasMaxLength: boolean = true;
  identityGenerationTypes: string[] = [
    "ALWAYS",
    "BY DEFAULT"
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

    this.column.schemaName = this.table.schemaName;
    this.column.tableName = this.table.tableName;

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

        this.crumbs.push({ url: null, name: 'Add Column'});
      });
  }

  add() {
    if (this.table) {
      this.tableService.addColumn(this.connectionId, this.table, this.column)
        .subscribe(() => this.router.navigate([`/connections/${this.connectionId}/tables/${this.table?.schemaName}/${this.table?.tableName}/schema`]));
      
        //TODO: show errors (could be contains null values)
    }
  }

  showMaxLength() {
    let dataType = this.dataTypes.find(t => t.name === this.column.dataType);
    this.hasMaxLength = dataType?.useMaxLength ?? false;

    if (!this.hasMaxLength) {
      this.column.characterMaximumLength = undefined;
    }
  }

}
