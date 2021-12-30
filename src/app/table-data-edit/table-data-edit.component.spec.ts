import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDataEditComponent } from './table-data-edit.component';

describe('TableDataEditComponent', () => {
  let component: TableDataEditComponent;
  let fixture: ComponentFixture<TableDataEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDataEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDataEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
