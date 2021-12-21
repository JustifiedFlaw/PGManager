import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionAddComponent } from './connection-add.component';

describe('ConnectionAddComponent', () => {
  let component: ConnectionAddComponent;
  let fixture: ComponentFixture<ConnectionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
