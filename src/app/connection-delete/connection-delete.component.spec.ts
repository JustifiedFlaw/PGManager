import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionDeleteComponent } from './connection-delete.component';

describe('ConnectionDeleteComponent', () => {
  let component: ConnectionDeleteComponent;
  let fixture: ComponentFixture<ConnectionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
