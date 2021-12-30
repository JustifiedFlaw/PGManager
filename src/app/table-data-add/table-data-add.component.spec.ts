import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataAddComponent } from './table-data-add.component';

describe('TableDataAddComponent', () => {
  let component: TableDataAddComponent;
  let fixture: ComponentFixture<TableDataAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDataAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDataAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
