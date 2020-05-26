import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountSliderComponent } from '@shared/components/amount-slider/amount-slider.component';

describe('AmountSliderComponent', () => {
  let component: AmountSliderComponent;
  let fixture: ComponentFixture<AmountSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
