import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaRenameComponent } from './schema-rename.component';

describe('SchemaRenameComponent', () => {
  let component: SchemaRenameComponent;
  let fixture: ComponentFixture<SchemaRenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaRenameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaRenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
