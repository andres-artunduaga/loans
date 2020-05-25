import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListComponent } from './main-list.component';
import { DialogService } from '@core/services/dialog.service';
import { SharedModule } from '@shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ENVIRONMENT } from '@core/constants/tokens';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainListComponent', () => {
  let component: MainListComponent;
  let fixture: ComponentFixture<MainListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainListComponent ],
      providers: [DialogService, { provide: ENVIRONMENT, useValue: {} }],
      imports: [SharedModule, HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
