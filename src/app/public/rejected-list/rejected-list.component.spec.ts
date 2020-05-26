import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ENVIRONMENT } from '@core/constants/tokens';
import { SharedModule } from '@shared/shared.module';
import { RejectedListComponent } from 'app/public/rejected-list/rejected-list.component';

describe('RejectedListComponent', () => {
  let component: RejectedListComponent;
  let fixture: ComponentFixture<RejectedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedListComponent ],
      providers:[
        { provide: ENVIRONMENT, useValue: {} }
      ],
      imports:[SharedModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
