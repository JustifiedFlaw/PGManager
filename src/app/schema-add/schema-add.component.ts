import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { BreadCrumb } from '../models/bread-crumb';
import { SchemaService } from '../schema.service';

@Component({
  selector: 'app-schema-add',
  templateUrl: './schema-add.component.html',
  styleUrls: ['./schema-add.component.css']
})
export class SchemaAddComponent implements OnInit {

  connectionId: number = 0;
  crumbs: BreadCrumb[] = [
    { url: '/connections', name: 'Connections' }
  ];
  schema?: string;
  
  constructor(
    private connectionService: ConnectionService,
    private schemaService:  SchemaService,
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

        this.crumbs.push({ url: null, name: 'Create Schema'});
      });
  }

  add(): void {
    if (this.schema) {    
      this.schemaService.add(this.connectionId, this.schema)
        .subscribe(() => this.router.navigate([`/connections/${this.connectionId}/view`]))
    }
  }

}
