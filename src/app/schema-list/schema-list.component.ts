import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Schema } from '../models/schema';
import { SchemaService } from '../schema.service';

@Component({
  selector: 'app-schema-list',
  templateUrl: './schema-list.component.html',
  styleUrls: ['./schema-list.component.css']
})
export class SchemaListComponent implements OnInit {

  connectionId: number = 0;
  schemas: Schema[] = [];

  constructor(
    private schemaService: SchemaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.connectionId = this.route.snapshot.params.id;

    this.schemaService.getAll(this.connectionId)
      .subscribe(schemas => this.schemas = schemas);
  }

}
