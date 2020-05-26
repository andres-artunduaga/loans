import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ENVIRONMENT } from '@core/constants/tokens';
import { GlobalAmountComponent } from '@shared/components/global-amount/global-amount.component';

describe('GlobalAmountComponent', () => {
  let component: GlobalAmountComponent;
  let fixture: ComponentFixture<GlobalAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalAmountComponent],
      providers: [{ provide: ENVIRONMENT, useValue: {} }],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
