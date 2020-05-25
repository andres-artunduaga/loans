import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLayoutComponent } from './public-layout.component';
import { SharedModule } from '@shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ENVIRONMENT } from '@core/constants/tokens';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PublicLayoutComponent', () => {
  let component: PublicLayoutComponent;
  let fixture: ComponentFixture<PublicLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PublicLayoutComponent],
      providers: [{ provide: ENVIRONMENT, useValue: {} }],
      imports: [SharedModule, BrowserAnimationsModule, HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
