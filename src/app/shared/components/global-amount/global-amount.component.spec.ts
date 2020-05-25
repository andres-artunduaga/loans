import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalAmountComponent } from './global-amount.component';

describe('GlobalAmountComponent', () => {
  let component: GlobalAmountComponent;
  let fixture: ComponentFixture<GlobalAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalAmountComponent ]
    })
    .compileComponents();
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
