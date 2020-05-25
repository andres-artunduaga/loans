import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCreditComponent } from './new-credit.component';
import { ENVIRONMENT } from '@core/constants/tokens';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewCreditComponent', () => {
  let component: NewCreditComponent;
  let fixture: ComponentFixture<NewCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCreditComponent ],
      providers: [
        { provide: ENVIRONMENT, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
