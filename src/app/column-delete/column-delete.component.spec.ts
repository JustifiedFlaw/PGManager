import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDeleteComponent } from './column-delete.component';

describe('ColumnDeleteComponent', () => {
  let component: ColumnDeleteComponent;
  let fixture: ComponentFixture<ColumnDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
