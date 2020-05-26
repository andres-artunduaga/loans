import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ENVIRONMENT } from '@core/constants/tokens';
import { DialogService } from '@core/services/dialog.service';
import { SharedModule } from '@shared/shared.module';
import { ApprovedListComponent } from './approved-list.component';

describe('ApprovedListComponent', () => {
  let component: ApprovedListComponent;
  let fixture: ComponentFixture<ApprovedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedListComponent ],
      providers:[
        DialogService,
        { provide: ENVIRONMENT, useValue: {} }
      ],
      imports:[SharedModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
