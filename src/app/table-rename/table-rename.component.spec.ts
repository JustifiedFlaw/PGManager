import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRenameComponent } from './table-rename.component';

describe('TableRenameComponent', () => {
  let component: TableRenameComponent;
  let fixture: ComponentFixture<TableRenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRenameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
