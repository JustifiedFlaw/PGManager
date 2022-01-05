import { TestBed } from '@angular/core/testing';

import { DataFormGroupService } from './data-form-group.service';

describe('DataFormGroupService', () => {
  let service: DataFormGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFormGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
