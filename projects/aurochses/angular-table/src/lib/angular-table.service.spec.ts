import { TestBed, inject } from '@angular/core/testing';

import { AngularTableService } from './angular-table.service';

describe('AngularTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularTableService]
    });
  });

  it('should be created', inject([AngularTableService], (service: AngularTableService) => {
    expect(service).toBeTruthy();
  }));
});
