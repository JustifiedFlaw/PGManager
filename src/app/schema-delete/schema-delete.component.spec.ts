import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaDeleteComponent } from './schema-delete.component';

describe('SchemaDeleteComponent', () => {
  let component: SchemaDeleteComponent;
  let fixture: ComponentFixture<SchemaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
