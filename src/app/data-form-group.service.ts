import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Column } from './models/column';

@Injectable({
  providedIn: 'root'
})
export class DataFormGroupService {

  constructor() { }

  toFormGroup(columns: Column[] ) {
    const group: any = {};

    columns.forEach(column => {
      group[column.columnName] = new FormControl('', Validators.pattern(this.validationPattern(column)));
    });
    return new FormGroup(group);
  }

  validationPattern(column: Column): string {
    switch (column.dataType) {
      case 'bigint':
      case 'integer':
      case 'smallint':  
        return "\\d*"

      case 'numeric':
      case 'double precision':
      case 'real':      
        return "\\d*(.\\d+)?"

      case 'date':
      case 'time without time zone':
      case 'time with time zone':
      case 'timestamp without time zone':
      case 'timestamp with time zone':
        return "\\d{4}-[01]\\d-[0-3]\\d([T ][0-2]\\d:[0-5]\\d(:[0-5]\\d(?:\\.\\d+)?)?)?Z?";
      
      default:
        return ".*"
    };
  }
}
