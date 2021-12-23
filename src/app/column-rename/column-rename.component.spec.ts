import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnRenameComponent } from './column-rename.component';

describe('ColumnRenameComponent', () => {
  let component: ColumnRenameComponent;
  let fixture: ComponentFixture<ColumnRenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnRenameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnRenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
