import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataDeleteComponent } from './table-data-delete.component';

describe('TableDataDeleteComponent', () => {
  let component: TableDataDeleteComponent;
  let fixture: ComponentFixture<TableDataDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDataDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDataDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
