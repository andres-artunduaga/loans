import { TestBed } from '@angular/core/testing';

import { SharedModule } from '@shared/shared.module';
import { DialogService } from './dialog.service';
import { EnvironmentService } from './environment.service';

describe('DialogService', () => {
  let service: DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnvironmentService, DialogService],
      imports: [SharedModule]
    });
    service = TestBed.inject(DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
