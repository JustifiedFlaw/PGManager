import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { Connection } from '../models/connection';

@Component({
  selector: 'app-connection-delete',
  templateUrl: './connection-delete.component.html',
  styleUrls: ['./connection-delete.component.css']
})
export class ConnectionDeleteComponent implements OnInit {

  connection?: Connection;

  constructor(
    private connectionService: ConnectionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.connectionService.get(this.route.snapshot.params.id)
      .subscribe(connection => this.connection = connection);
  }

  delete(id: number): void {
    this.connectionService.delete(id)
      .subscribe(() => this.router.navigate(["/connections"]));
  }

}
