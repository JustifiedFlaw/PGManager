import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { BreadCrumb } from '../models/bread-crumb';
import { SchemaService } from '../schema.service';

@Component({
  selector: 'app-schema-delete',
  templateUrl: './schema-delete.component.html',
  styleUrls: ['./schema-delete.component.css']
})
export class SchemaDeleteComponent implements OnInit {

  connectionId: number = 0;
  schema?: string;
  crumbs: BreadCrumb[] = [
    { url: '/connections', name: 'Connections' }
  ];

  constructor(
    private connectionService: ConnectionService,
    private schemaService: SchemaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.connectionId = this.route.snapshot.params.id;
    this.schema = this.route.snapshot.params.schema;

    this.connectionService.get(this.connectionId)
      .subscribe(connection => {
        this.crumbs.push({ 
          url: `/connections/${this.connectionId}/view`,
          name: connection.connectionName
        });

        if (this.schema) {
          this.crumbs.push(
            { url: null, name: this.schema}
          );
        }

        this.crumbs.push({ url: null, name: 'Drop Schema'});
      });
  }

  drop(): void {
    if (this.schema) {
      this.schemaService.drop(this.connectionId, this.schema)
        .subscribe(() => this.router.navigate([`/connections/${this.connectionId}/view`]));
    }
  }

}
